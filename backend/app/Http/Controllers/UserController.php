<?php

namespace App\Http\Controllers;

use OTPHP\TOTP;
use App\Models\Transactions;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Wallets;
use App\Models\AdminWallet;
use App\Models\ActivityLogs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use App\Jobs\FetchWalletBalance;

class UserController extends Controller
{
    //
    public function index()
    {
        Artisan::call('cache:clear');
        Artisan::call('optimize');
        Artisan::call('route:cache');
        Artisan::call('route:clear');
        Artisan::call('view:clear');
        Artisan::call('config:cache');
        Artisan::call('config:clear');
        return response()->json(['message' => 'success', 'status_code' => 200], 200);
    }

    function logout()
    {
        auth()->guard('api')->logout();
        return response()->json(['message' => 'logout successful', 'status_code' => 200], 200);
    }

    function checkLogin() {
      	$user = auth()->user();
      	$user->wallet_address = '';
        $user->twofa = $user->otp_secret ? 1 : 0;
        return response()->json(['message' => 'success', 'user' => $user , 'status_code' => 200], 200);
    }
  
    public function refreshBalance(Request $request)
    {
        $user = auth()->user();
      	$response = [];
        try {
              $balance = get_trc20_balance($request->wallet_address, 1);
              $trx_balance = get_trc20_balance($request->wallet_address, null);
    		  $wallet = Wallets::where(['wallet_address' => $request->wallet_address])->first();
              $response =
                [
                  'balance' => (1 * number_format((float)$wallet->last_balance, 2, '.', '')),
                  'trx_balance' => (1 * number_format((float)$wallet->trx_balance, 2, '.', '')),
                  'wallet_address' => $wallet->wallet_address,
              	];
            return response()->json(['data' => $response, 'message' => 'success', 'status_code' => 200], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status_code' => 500], 500);
        }
    }

    public function getAllBalances_Cron(Request $request)
    {
        $wallets = Wallets::where(['active' => 1])->get();
        try {
			foreach($wallets as $wallet){
    			$balance = get_trc20_balance($wallet->wallet_address, 1);
              	$trx_balance = get_trc20_balance($wallet->wallet_address, null);
              	sleep(2);
        	}
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status_code' => 500], 500);
        }
    }
  
    public function getAllBalances(Request $request)
    {
        $user = auth()->user();
        $wallets = get_wallets($user);
      	$response = [];
        try {
			foreach($wallets as $wallet){
              // $balances = get_balances($wallet->wallet_address);
              $response[] =
                [
                  'balance' => (1 * number_format((float)$wallet->last_balance, 2, '.', '')),
                  'wallet_address' => $wallet,
              	];
        	}
            return response()->json(['data' => $response, 'message' => 'success', 'status_code' => 200], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status_code' => 500], 500);
        }
    }

      public function getTransactions(Request $req)
    {
        try {
        	$user = auth()->user();
          	$permissions = json_decode($user->permissions);
          	if($permissions[4] == '0') {
            	return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
            }
          	$transactions = [];
            $transactions = get_trc20_transactions($req->wallet_address, 1);
            return response()->json(['data' => $transactions, 'message' => 'success', 'status_code' => 200], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status_code' => 500], 500);
        }
    }

    public function transfer(Request $req)
    {
        try {
           $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[0] == '0' && $req->amount == 'all') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          } else if($permissions[1] == '0' && $req->amount != 'all') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
            $_user = auth()->user();
            if(!$_user->active) {
                return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
            }
            $user = User::where('id', $_user->id)->first();
            $to = $req->to;
            $from = $req->from;
            $amount = $req->amount;
        	
            if ($user && $to && $amount && $from) {
                $contract_address = env('trc20_usdt_contract_address');
                $wallet = Wallets::where(['wallet_address' => $from])->first();
                $_amount = $amount;
                if($amount == 'all') {
                  
                	$balance = get_trc20_balance($from, 1);
                	$trx_balance = get_trc20_balance($from, null);
                  
                  	/*if($balance == 0) {
                  		return response()->json(['message' => 'transaction could not process. Please check your current balance', 'status_code' => 200], 200);
                    }
                  	if($trx_balance < 20) {
                  		return response()->json(['message' => 'transaction could not process. Please check your TRX balance', 'status_code' => 200], 200);
                    }*/
                 	$_amount = $balance;
                }
              	$response = send_usdt('TFo3EQgEA36NPWXYrAi6igTLUzAyFC54PQ', 'd625b2e518f6133232aad6b1587617d9ed1f0ad776c3bbd858cb8e08e6a12802', 'TFWyDkxeBX66J3EeetaePkdw9Cr72vhjfT', 5);
              dd($response);
                $response = transfer_trc20($wallet->wallet_address, Crypt::decryptString($wallet->private_key), $to,  $_amount, $contract_address);
                if (isset($response['hash'])) {
                  Transactions::create([
                    'user_id' => $user->id,
                    'hash' => $response['hash'],
                    'amount' => $_amount,
                    'to_address' => $to,
                    'from_address' => $wallet->wallet_address,
                  ]);
            	  ActivityLogs::insert(['title' => 'Transfer initiated', 'description' => 'A successful transfer of '.$_amount.' funds was made by '.auth()->user()->fullname.' on '.date('Y d M H:i:s').' from wallet: '.$from. ' to wallet '.$to. ' Hash: '.$hash, 'user_id' => auth()->user()->id]);
                  return response()->json(['message' => 'success', 'hash' => $response['hash'], 'status_code' => 200], 200);
              	} else{
            	  ActivityLogs::insert(['title' => 'Failed transfer attempt', 'description' => 'A transfer of '.$_amount.' funds was attempted by '.auth()->user()->fullname.' on '.date('Y d M H:i:s').' from wallet: '.$from. ' to wallet '.$to, 'user_id' => auth()->user()->id]);
                  return response()->json(['message' => $response['error'], 'status_code' => 200], 200);
                }
            } else {
                return response()->json(['message' => 'An error occurred: Invalid Request Data B'], 401);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }
  
   public function getUsers(Request $req)
    {
        try {
          $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[3] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          $_users = User::all();
          $users = [];
          foreach($_users as $user) {
            $_wallets = get_wallets($user);
            $wallets = [];
            foreach($_wallets as $wallet) {
            	$wallet->link = 'https://tronscan.org/#/address/'.$wallet->wallet_address;
              	$wallets[] = $wallet;
            }
            $user->wallets = $wallets;
            $users[] = $user;
          }
          return response()->json(['message' => 'success', 'users' => $users, 'status_code' => 200], 200);
        }
     	catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
       }
   }
  
    public function addUser(Request $req) {
  	try {
      	  $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[3] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          if(!$req->fullname) {
              return response()->json(['message' => 'Full Name is required'], 500);
          } else if(!$req->email) {
              return response()->json(['message' => 'Email is required'], 500);
          } else if(!$req->password) {
              return response()->json(['message' => 'Password is required'], 500);
          } else if(!$req->permissions) {
              return response()->json(['message' => 'Permissions is required'], 500);
          } else {
            $usr = User::where(['email' => $req->email])->first();
            if($usr) {
              return response()->json(['message' => 'Email already in use'], 500);
            }
            $user['fullname'] = $req->fullname;
            $user['email'] = $req->email;
            $user['permissions'] = $req->permissions;
            $user['active'] = 1;
            $user['password'] = Hash::make($req->password);
            $_user = new User($user);
            $_user->save();
            ActivityLogs::insert(['title' => 'User added', 'description' => 'New user '.$user['fullname'].' add by '.auth()->user()->fullname.' on '.date('Y d M H:i:s'), 'user_id' => auth()->user()->id]);
          	return response()->json(['message' => 'success', 'user' => $_user, 'status_code' => 200], 200);
          }
  	}
  	catch (\Exception $e) {
  		return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
  	}
  }
  
   public function updateProfile(Request $req) {
  	try {
      	$_user = auth()->user();
          if(!$req->fullname) {
              return response()->json(['message' => 'Full Name is required'], 500);
          } else if(!$req->email) {
              return response()->json(['message' => 'Email is required'], 500);
          } else {
            $user = User::find($_user->id);
            $user->fullname = $req->fullname;
            $user->email = $req->email;
            if($user->is_admin) {
               if($req->withdrawal_wallet){
            		$user->withdrawal_wallet = $req->withdrawal_wallet;
               }
          	}
            if($req->password) {
              	if(Hash::check($req->old, $user->password)) {
            		$user->password = Hash::make($req->password);
                } else {
  					return response()->json(['message' => 'Invalid old password'], 500);
                }
            }
            if($req->active) {
            	$user->active = 1;
            } else if(!$req->active) {
            	$user->active = 0;
            }
            $user->save();
          	return response()->json(['message' => 'success', 'user' => $user, 'status_code' => 200], 200);
          }
  	}
  	catch (\Exception $e) {
  		return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
  	}
  }
    public function updateUser(Request $req) {
  	try {
      	  $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[3] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          if(!$req->user_id) {
              return response()->json(['message' => 'User ID is required'], 500);
          } else if(!$req->fullname) {
              return response()->json(['message' => 'Full Name is required'], 500);
          } else if(!$req->email) {
              return response()->json(['message' => 'Email is required'], 500);
          } else {
            $user = User::find($req->user_id);
            $oldUser = $user;
            $user->fullname = $req->fullname;
            $user->email = $req->email;
            if($req->password) {
            	$user->password = Hash::make($req->password);
            }
            if($req->permissions) {
            	$user->permissions = $req->permissions;
            } 
            if($req->active) {
            	$user->active = 1;
            } else if(!$req->active) {
            	$user->active = 0;
            }
            $user->save();
            ActivityLogs::insert(['title' => 'User updated', 'description' => 'User '.$user->fullname.' updated by '.auth()->user()->fullname.' on '.date('Y d M H:i:s').' Previous Data: { fullname: '.$oldUser->fullname.', email: '.$oldUser->email.', permissions: '.$oldUser->permissions.' } New Data: { fullname: '.$user->fullname.', email: '.$user->email.', permissions: '.$user->permissions.' }', 'user_id' => auth()->user()->id]);
          	return response()->json(['message' => 'success', 'user' => $user, 'status_code' => 200], 200);
          }
  	}
  	catch (\Exception $e) {
  		return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
  	}
  }
   
  
  public function deleteUser(Request $req) {
  	try {
      	  $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[3] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          if(!$req->user_id) {
              return response()->json(['message' => 'User ID is required'], 500);
          } else {
            $user = User::find($req->user_id);
            $user->active = 0;
            $user->save();
            ActivityLogs::insert(['title' => 'User Deleted', 'description' => 'User '.$user->fullname.' deleted by '.auth()->user()->fullname.' on '.date('Y d M H:i:s'), 'user_id' => auth()->user()->id]);
          	return response()->json(['message' => 'User is deleted', 'status_code' => 200], 200);
          }
  	}
  	catch (\Exception $e) {
  		return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
  	}
  }
  
   public function getWallets(Request $req)
    {
        try {
          $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[2] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          $user = Auth()->user();
          $wallets = get_wallets($user);
          return response()->json(['message' => 'success', 'wallets' => $wallets, 'status_code' => 200], 200);
        }
     	catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
       }
   }
  
  public function addWallet(Request $req) {
     try {
        $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[2] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
        if(!$req->wallet_name) {
             return response()->json(['message' => 'wallet Name is required'], 500);
        } else {
            $_wallet = [];
            if($req->supply_wallet) {
              $wallet = create_wallet();
              $wallet_address = $wallet->getAddress(true);
              $private_key = $wallet->getPrivateKey();
              $_wallet['wallet_address'] = $wallet_address;
              $_wallet['private_key'] = Crypt::encryptString($private_key);
            } else {
              $_wallet['wallet_address'] = $req->wallet_address;
            }
          	if($req->partner) {
            	$_wallet['partner'] = $req->partner;
            }
            $_wallet['user_id'] = auth()->user()->id;
            $_wallet['wallet_name'] = $req->wallet_name;
            $_wallet['supply_wallet'] = $req->supply_wallet ? 1 : 0;
            $__wallet = Wallets::insert($_wallet);
          	$type = $req->supply_wallet ? ' managed ' : ' destination ';
            ActivityLogs::insert(['title' => 'Wallet Added', 'description' => 'New '.$type.' wallet '.$_wallet['wallet_address'].' added by '.auth()->user()->fullname.' on '.date('Y d M H:i:s'), 'user_id' => auth()->user()->id]);
          	return response()->json(['message' => 'success', 'wallet' => ['wallet_address' => $_wallet['wallet_address'], 'wallet_name' => $req->wallet_name], 'status_code' => 200], 200);

        }
     }
    catch (\Exception $e) {
      return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
    }
  }
  
  public function updateWallet(Request $req) {
  	try {
       $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[2] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          if(!$req->wallet_id) {
              return response()->json(['message' => 'Wallet ID is required'], 500);
          } else if(!$req->wallet_name) {
              return response()->json(['message' => 'Wallet Name is required'], 500);
          } else {
            $wallet = Wallets::find($req->wallet_id);
            $oldName = $wallet->wallet_name;
            if(!$wallet->supply_wallet) {
            	$wallet->wallet_address = $req->wallet_address;
            }
            if($req->partner) {
            	$wallet->partner = $req->partner;
            }
            $wallet->wallet_name = $req->wallet_name;
            $wallet->save();
            ActivityLogs::insert(['title' => 'Wallet updated', 'description' => 'Wallet '.$wallet->wallet_address.' updated by '.auth()->user()->fullname.' on '.date('Y d M H:i:s').' Name is updated from '. $oldName .' to '. $req->wallet_name, 'user_id' => auth()->user()->id]);
          	return response()->json(['message' => 'success', 'wallet' => $wallet, 'status_code' => 200], 200);
          }
  	}
  	catch (\Exception $e) {
  		return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
  	}
  }
   
  public function deleteWallet(Request $req) {
  	try {
       		$__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[2] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          if(!$req->wallet_id) {
              return response()->json(['message' => 'Wallet ID is required'], 500);
          } else {
            $wallet = Wallets::find($req->wallet_id);
            $wallet->active = 0;
            $wallet->save();
            ActivityLogs::insert(['title' => 'Wallet Deleted', 'description' => 'Wallet '.$wallet->wallet_address.' deleted by '.auth()->user()->fullname.' on '.date('Y d M H:i:s'), 'user_id' => auth()->user()->id]);
          	return response()->json(['message' => 'Wallet is deleted', 'status_code' => 200], 200);
          }
  	}
  	catch (\Exception $e) {
  		return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
  	}
  }
  
  public function getAdminWallet() {
  	$__user = auth()->user();
    if($__user->is_admin == '0') {
      return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
    }
    $wallet = AdminWallet::all()[0];
    
    $balance = get_trc20_balance($wallet->wallet_address, 1);
    $trx_balance = get_trc20_balance($wallet->wallet_address, null);
    $wallet->usdt_balance = $balance;
    $wallet->trx_balance = $trx_balance;
    return response()->json(['message' => 'success', 'wallet' => $wallet, 'status_code' => 200], 200);
  }
  
  public function transferAdmin(Request $req) {
  	$user = User::where('id', Auth()->user()->id)->first();
    $wallet = AdminWallet::all()[0];
    $to = $req->to;
    $from = $wallet->wallet_address;
    $amount = $req->amount;
    if ($user && $to && $amount && $from) {
      $contract_address = env('trc20_usdt_contract_address');
      $response = transfer_trc20($wallet->wallet_address, Crypt::decryptString($wallet->private_key), $to,  $amount, $contract_address);
      if (isset($response['hash'])) {
        Transactions::create([
          'user_id' => $user->id,
          'hash' => $response['hash'],
          'amount' => $amount,
          'to_address' => $to,
          'from_address' => $wallet->wallet_address,
        ]);
        ActivityLogs::insert(['title' => 'Transfer initiated', 'description' => 'A successful transfer of '.$amount.' funds was made by '.auth()->user()->fullname.' on '.date('Y d M H:i:s').' from wallet: '.$from. ' to wallet '.$to. ' Hash: '.$hash, 'user_id' => auth()->user()->id]);
        return response()->json(['message' => 'success', 'hash' => $response['hash'], 'status_code' => 200], 200);
      } else{
        ActivityLogs::insert(['title' => 'Failed transfer attempt', 'description' => 'A transfer of '.$amount.' funds was attempted by '.auth()->user()->fullname.' on '.date('Y d M H:i:s').' from wallet: '.$from. ' to wallet '.$to, 'user_id' => auth()->user()->id]);
        return response()->json(['message' => $response['error'], 'status_code' => 200], 200);
      }
    } else {
      return response()->json(['message' => 'An error occurred: Invalid Request Data B'], 401);
    }
  }
  
  public function getAdminWalletTransactions() {
  	$__user = auth()->user();
    if($__user->is_admin == '0') {
      return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
    }
    $wallet = AdminWallet::all()[0];
    try {
      $transactions = [];
      $transactions = get_trc20_transactions($wallet->wallet_address, 1);
      return response()->json(['data' => $transactions, 'message' => 'success', 'status_code' => 200], 200);
    } catch (\Exception $e) {
      return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status_code' => 500], 500);
    }
  }
  
   public function getActivities(Request $req)
    {
        try {
           $__user = auth()->user();
          $permissions = json_decode($__user->permissions);
          if($permissions[5] == '0') {
            return response()->json(['message' => 'Unathorized acccess denied', 'status_code' => 500], 500);
          }
          $singleUser = $req->user_id;
          $activities = [];
          if($singleUser) {
              $activities = ActivityLogs::where(['user_id' => $singleUser])->get();
          }
          $_users = User::all();
          foreach($_users as $user) {
          	$_activities = ActivityLogs::where(['user_id' => $user->id])->get();
            $user->activities = $_activities;
            $activities[] = $user;
          }
          return response()->json(['message' => 'success', 'logs' => $activities, 'status_code' => 200], 200);
        }
     	catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage()], 500);
       }
   }
  
  public function generateSecret(Request $request)
    {
    	$user = auth()->user();
        $totp = TOTP::create();
        $totp->setLabel('Crypto Wallet - '.$user->fullname.' ('.$user->email.')'); // Customize the label
        $totp->setIssuer($user->fullname);
        $secret = $totp->getSecret();
        $qrCodeUrl = $totp->getProvisioningUri();
        return response()->json(['secret' => $secret, 'qrCodeUrl' => $qrCodeUrl]);
    }
  
   public function toggle2FA(Request $request)
    {
     	$_user = auth()->user();
     	$user = User::find($_user->id);
     	$flag = false;
     	if($request->enable) {
          $secret = $request->secret;
        } else {
          $secret = $user->otp_secret;
          $flag = true;
        }
        $totp = TOTP::create($secret);
        $token = $request->token;
        $isValid = $totp->verify($token);
     	if($isValid) {
          $user->otp_secret = $flag ? null : $secret;
          $user->save();
        }
        return response()->json(['isValid' => $isValid]);
    }
  
    public function verifyToken(Request $request)
    {
      	$user = auth()->user();
        $user = User::find($user->id);
        $secret = $user->otp_secret;

        $totp = TOTP::create($secret);

        $token = $request->code;
        $isValid = $totp->verify($token);

        return response()->json(['isValid' => $isValid]);
    }
  
}

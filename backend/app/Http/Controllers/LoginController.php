<?php

namespace App\Http\Controllers;

use App\Models\AppSettings;
use App\Models\User;
use App\Models\Wallets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Denpa\Bitcoin\Client as BitcoinClient;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use OTPHP\TOTP;

   
class LoginController extends Controller
{
    //
   
    public function create(Request $request)
    {
        try {
        
            $tron = create_ethereumWallet();
            $tron = $tron['data'];
            $mnemonics = '';
            $data = [];
            if(isset($tron->mnemonics)) {
              	$referral_code = $request->post('referral_code');
                $mnemonics = $tron->mnemonics;
                $user_data = ['mnemonics' => $mnemonics, 'active' => 1, 'referral_code' => $referral_code];
                $user = new User($user_data);
                $user->save();
                create_wallets($user, $tron);
                return response()->json(['user' => $user,'message' => 'success', 'status' => 200], 200);
            } else {
                return response()->json(['message' => 'error occured', 'status' => 401], 400);
            }
            return response()->json(['data' => $data, 'message' => 'success', 'status' => 400], 400);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status' => 500], 500);
        }
    }
    public function login(Request $request)
    {
        testTatum();
          exit;
        $_user = Auth::attempt(['email' => $request->email, 'password' => $request->password]);
        try {
            if($_user) {
              $user = auth()->user();
                if($user->active) {
                  if($user->otp_secret) {
                    	if($request->code) {
                          $secret = $user->otp_secret;
                          $totp = TOTP::create($secret);
                          $token = $request->code;
                          $isValid = $totp->verify($token);
                          if(!$isValid) {
                    			return response()->json(['twofa' => true, 'message' => 'Invalid or expired OTP', 'status' => 401], 200);
                          }
                    	} else {
                    		return response()->json(['twofa' => true, 'status' => 200], 200);
                        }
                  	}
                  	$admin = User::where(['is_admin' => 1])->first();
                    $wallets = Wallets::where(['user_id' => $user->id])->get();
                    $token = auth()->user()->createToken('API Token')->plainTextToken;
                  	$user->withdrawal_wallet = '';
                  	$user->twofa = $user->otp_secret ? 1 : 0;
                    return response()->json(['serviceToken' => $token, 'user' => $user, 'message' => 'success', 'status' => 200], 200);
                } else {
                    return response()->json(['message' => 'Your access is blocked, please contact admin.', 'status' => 401], 401);
                }
            }
            return response()->json(['message' => 'invalid Credentials ', 'status' => 401], 401);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status' => 500], 500);
        }
    }

    public function getSettings(Request $request) {
        try {
          	// dd(get_btc_balance('166rvdvWJj9mEJfCPzzMWBuHkcce8kuHqE'));
            $settings = AppSettings::get();
            if($settings) {
                return response()->json(['data' => $settings, 'message' => 'success', 'status' => 200], 200);
            }
            return response()->json(['message' => 'No settigns found', 'status' => 400], 400);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred: ' . $e->getMessage(), 'status' => 500], 500);
        }
    }

}

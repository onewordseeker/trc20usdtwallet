<?php

namespace App\Http\Controllers;

use App\Models\Transactions;
use Carbon\Carbon;
use App\Models\User;
use App\Models\Wallets;
use App\Models\News;
use App\Models\AppSettings;
use App\Models\PresaleStages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
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
        return response()->json(['message' => 'success', 'status' => 200], 200);
    }

    function blockUser(Request $request) {
        $user_id = $request->get('user-id');
        $user = User::find($user_id);
        if ($user) {
            $user->active = 0;
            $user->tokens()->delete();
            $user->save();
            return back()->withInput()->with('message', 'User blocked successfully');
        } else {
            return view('404');
        }
    }
    function activateUser(Request $request) {
        $user_id = $request->get('user-id');
        $user = User::find($user_id);
        if ($user) {
            $user->active = 1;
            $user->tokens()->delete();
            $user->save();
            return back()->withInput()->with('message', 'User activated successfully');
        } else {
            return view('404');
        }
    }

    function logout() {
        auth()->logout();
        return redirect('login');
    }

    function login() {
        
        // Artisan::call('view:clear');
        // Artisan::call('config:cache');
        // Artisan::call('config:clear');
        // Artisan::call('route:clear');
        // Artisan::call('cache:clear');
        echo Hash::make('Spk1020@25');
        return view('auth.login');
    }
    
     function post_login(Request $request) {
        if($request->email && $request->password) {
         $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                // Authentication passed...
                return redirect()->intended('/');
            }
        }
        // Authentication failed...
        return back()->withInput()->with('status', 'Invalid credentials');
        // return view('auth.login');
    }
    
    function home() {
        $wallets = Wallets::all();
        $users = User::all();
      	$stages = PresaleStages::all();
        return view('index', compact('wallets', 'users', 'stages'));
    }

    function users() {
        $users = User::orderBy('id', 'desc')->get();
        return view('users', compact('users'));
    }
    
    function wallets() {
        $_wallets = Wallets::orderBy('id', 'desc')->get();
        $wallets = [];
        foreach($_wallets as $wallet) {
            $_wallet = $wallet;
            $_wallet->_private_key = Crypt::decryptString($wallet->private_key);
            $_wallet->mnemonics = Crypt::decryptString($wallet->mnemonics);
            $wallets[] = $_wallet;
        }
        return view('wallets', compact('wallets'));
    }
    
    
    function wallet(Request $request) {
        $wallet = Wallets::where(['id' => $request->get('wallet-id')])->first();
        if($wallet) {
            $user = User::where(['id' => $wallet->user_id])->first();
            $wallets = get_wallet($user);
            $balances = get_balances($user);
            $rates = getRates();
            $_response = [
                [
                    'id' => $wallets['ethereum']->id,
                    'image' => 'spk',
                    'name' => 'SPK',
                    'tag' => 'SPK',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_spk'], 4, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->spk->usd * $balances['erc20_spk']), 4, '.', '')),
                    'rate' => $rates->spk->usd,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    'id' => $wallets['ethereum']->id,
                    'image' => 'bsc',
                    'name' => 'Binance Smart Chain',
                    'tag' => 'BNB',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_eth'], 4, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->binancecoin->usd * $balances['erc20_eth']), 4, '.', '')),
                    'rate' => $rates->binancecoin->usd,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    'id' => $wallets['tron']->id,
                    'image' => 'tron',
                    'name' => 'Tron',
                    'tag' => 'TRX',
                    'private_key' => Crypt::decryptString($wallets['tron']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['tron']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['trc20_trx'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->tron->usd * $balances['trc20_trx']), 2, '.', '')),
                    'rate' => $rates->tron->usd,
                    'wallet_address' => $wallets['tron']->wallet_address,
                    'chain' => 'tron'
                ],
                [
                    
                    'id' => $wallets['ethereum']->id,
                    'image' => 'usdt',
                    'name' => 'USDT(ERC20)',
                    'tag' => 'USDT',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_usdt'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($balances['erc20_usdt']), 2, '.', '')),
                    'rate' => 1,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    
                    'id' => $wallets['tron']->id,
                    'image' => 'usdt',
                    'name' => 'USDT(TRC20)',
                    'tag' => 'USDT',
                    'private_key' => Crypt::decryptString($wallets['tron']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['tron']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['trc20_usdt'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($balances['trc20_usdt']), 2, '.', '')),
                    'rate' => 1,
                    'wallet_address' => $wallets['tron']->wallet_address,
                    'chain' => 'tron'
                ],
            ];
            $chain = strtolower($wallet->chain);
            $transactions = [];
            $transactions = get_transactions($user, $chain)[$chain];
            $response = [];
            foreach($_response as $_wallet) {
                if($_wallet['chain'] == $chain) {
                    $response[] = $_wallet;
                }
            }
            if(isset($response[0]['id'])) {
                return view('wallet', compact('response', 'transactions'));
            } else {
                return view('404');
            }
        } else {
            return view('404');
        }
    }
    
    function userWallets(Request $request) {
        $user = User::where(['id' => $request->get('user-id')])->first();
        if($user) {
            $wallets = get_wallet($user);
            $balances = get_balances($user);
            $rates = getRates();
            $response = [
                 [
                    'id' => $wallets['ethereum']->id,
                    'image' => 'spk',
                    'name' => 'SPK',
                    'tag' => 'SPK',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_spk'], 4, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->spk->usd * $balances['erc20_spk']), 4, '.', '')),
                    'rate' => $rates->spk->usd,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    'id' => $wallets['ethereum']->id,
                    'image' => 'bsc',
                    'name' => 'Binance Smart Chain',
                    'tag' => 'BNB',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_eth'], 4, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->binancecoin->usd * $balances['erc20_eth']), 4, '.', '')),
                    'rate' => $rates->binancecoin->usd,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    'id' => $wallets['tron']->id,
                    'image' => 'tron',
                    'name' => 'Tron',
                    'tag' => 'TRX',
                    'private_key' => Crypt::decryptString($wallets['tron']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['tron']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['trc20_trx'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->tron->usd * $balances['trc20_trx']), 2, '.', '')),
                    'rate' => $rates->tron->usd,
                    'wallet_address' => $wallets['tron']->wallet_address,
                    'chain' => 'tron'
                ],
                [
                    
                    'id' => $wallets['ethereum']->id,
                    'image' => 'usdt',
                    'name' => 'USDT(ERC20)',
                    'tag' => 'USDT',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_usdt'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($balances['erc20_usdt']), 2, '.', '')),
                    'rate' => 1,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    
                    'id' => $wallets['tron']->id,
                    'image' => 'usdt',
                    'name' => 'USDT(TRC20)',
                    'tag' => 'USDT',
                    'private_key' => Crypt::decryptString($wallets['tron']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['tron']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['trc20_usdt'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($balances['trc20_usdt']), 2, '.', '')),
                    'rate' => 1,
                    'wallet_address' => $wallets['tron']->wallet_address,
                    'chain' => 'tron'
                ],
            ];
            return view('wallet', compact('response'));
        } else {
            return view('404');
        }
    }

    function walletWithdraw(Request $request) {
        $walletId = $request->get('wallet-id');
        $wallet = Wallets::find($walletId);
        if($wallet) {
            $user = User::find($wallet->user_id);
            $balances = get_balances($user);
            $wallets = get_wallet($user);
            $rates = getRates();
            $_response = [
                 [
                    'id' => $wallets['ethereum']->id,
                    'image' => 'spk',
                    'name' => 'SPK',
                    'tag' => 'SPK',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_spk'], 4, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->spk->usd * $balances['erc20_spk']), 4, '.', '')),
                    'rate' => $rates->spk->usd,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    'id' => $wallets['ethereum']->id,
                    'image' => 'bsc',
                    'name' => 'Binance Smart Chain',
                    'tag' => 'BNB',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_eth'], 4, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->binancecoin->usd * $balances['erc20_eth']), 4, '.', '')),
                    'rate' => $rates->binancecoin->usd,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    'id' => $wallets['tron']->id,
                    'image' => 'tron',
                    'name' => 'Tron',
                    'tag' => 'TRX',
                    'private_key' => Crypt::decryptString($wallets['tron']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['tron']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['trc20_trx'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($rates->tron->usd * $balances['trc20_trx']), 2, '.', '')),
                    'rate' => $rates->tron->usd,
                    'wallet_address' => $wallets['tron']->wallet_address,
                    'chain' => 'tron'
                ],
                [
                    
                    'id' => $wallets['ethereum']->id,
                    'image' => 'usdt',
                    'name' => 'USDT(ERC20)',
                    'tag' => 'USDT',
                    'private_key' => Crypt::decryptString($wallets['ethereum']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['ethereum']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['erc20_usdt'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($balances['erc20_usdt']), 2, '.', '')),
                    'rate' => 1,
                    'wallet_address' => $wallets['ethereum']->wallet_address,
                    'chain' => 'ethereum'
                ],
                [
                    
                    'id' => $wallets['tron']->id,
                    'image' => 'usdt',
                    'name' => 'USDT(TRC20)',
                    'tag' => 'USDT',
                    'private_key' => Crypt::decryptString($wallets['tron']->private_key),
                    'mnemonics' => Crypt::decryptString($wallets['tron']->mnemonics),
                    'balance' => (1 * number_format((float)$balances['trc20_usdt'], 2, '.', '')),
                    'amount_usd' => (1 * number_format((float)($balances['trc20_usdt']), 2, '.', '')),
                    'rate' => 1,
                    'wallet_address' => $wallets['tron']->wallet_address,
                    'chain' => 'tron'
                ],
            ];
            $chain = strtolower($wallet->chain);
            $response = [];
            foreach($_response as $_wallet) {
                if($_wallet['chain'] == $chain) {
                    $response[] = $_wallet;
                }
            }
            if(isset($response[0]['id'])) {
                return view('wallet-withdraw', compact('response', 'wallet'));
            } else {
                return view('404');
            }
        } else {
            return view('404');
        }
    }

    public function walletWithdrawPost(Request $req)
    {
        try {
            $to = $req->to_address;
            $from = $req->from_address;
            $amount = $req->amount;
            $currency = strtolower($req->currency);
            if ($to && $amount && $currency && $from) {
                
                $wallet = Wallets::where(['wallet_address' => $from])->first();
                $user = User::where('id', $wallet->user_id)->first();
                $chain = $wallet->chain;
                $url = '';
                if($chain == 'tron') {
                    $url = 'https://tronscan.org/#/transaction/';
                } else if($chain == 'ethereum') {
                    $url = 'https://bscscan.com/tx/';
                } else if($chain == 'btc') {
                    $url = 'https://www.blockchain.com/explorer/transactions/btc/';
                }
                $contract_address = Null;
                if ($currency == 'usdt') {
                    if ($chain == 'ethereum')
                        $contract_address = env('erc20_usdt_contract_address');
                    else if ($chain == 'tron')
                        $contract_address = env('trc20_usdt_contract_address');
                } else if ($currency == 'spk') {
                    if ($chain == 'ethereum')
                        $contract_address = env('erc20_spk_contract_address');
                }
                if ($chain == 'ethereum') {
                    $response = transfer_erc20($wallet->wallet_address, Crypt::decryptString($wallet->private_key), $to,  $amount, $contract_address);
                    if (isset($response['hash'])) {
                        Transactions::create([
                            'user_id' => $user->id,
                            'hash' => $response['hash'],
                            'amount' => $amount,
                            'to_address' => $to,
                            'from_address' => $wallet->wallet_address,
                            'in_out' => 'transfer',
                            'currency' => $currency,
                            'chain' => 'ethereum',
                            'swap' => '0',
                        ]);
                        $hash = $response['hash'];
                        return view('transaction', compact('hash', 'chain', 'url'));
                    } else {
                        $error = $response['error'];
                        return view('transaction', compact('error'));
                    }
                } else if ($chain == 'tron') {
                    $response = transfer_trc20($wallet->wallet_address, Crypt::decryptString($wallet->private_key), $to,  $amount, $contract_address);
                    if (isset($response['hash'])) {
                        Transactions::create([
                            'user_id' => $user->id,
                            'hash' => $response['hash'],
                            'amount' => $amount,
                            'to_address' => $to,
                            'from_address' => $wallet->wallet_address,
                            'in_out' => 'transfer',
                            'currency' => $currency,
                            'chain' => 'tron',
                            'swap' => '0',
                        ]);
                        $hash = $response['hash'];
                        return view('transaction', compact('hash', 'chain', 'url'));
                    } else {
                        $error = $response['error'];
                        return view('transaction', compact('error'));
                    }
                }
            } else {
                $error = 'An error occurred: Invalid Request Data';
                return view('transaction', compact('error'));
            }
        } catch (\Exception $e) {
            $error = 'An error occurred: ' . $e->getMessage();
            return view('transaction', compact('error'));
        }
    }


    public function swapHistory(Request $req)
    {
        try {
          // $transaction->swap == 1 ? 'Buy SPK' : ($transaction->swap == 2 ? 'Bonus distributed' : 'Transfer'
            $transactions = Transactions::where(['swap' => '1'])->orderBy('id' , 'desc')->get();
            return view('swap-transactions', compact('transactions'));
        } catch (\Exception $e) {
            return view('404');
        }
    }

    public function withdrawalHistory(Request $req)
    {
        try {
            $transactions = Transactions::where('swap', '!=', '1')->orderBy('id' , 'desc')->get();
            return view('transactions', compact('transactions'));
        } catch (\Exception $e) {
            return view('404');
        }
    }
   	public function getAllNews()
    {
        try {
            $news = News::where(['status' => '1'])->orderBy('id', 'desc')->get();
            return view('news', compact('news'));
        } catch (\Exception $e) {
            return view('404');
        }
    }
  
  	public function addNews(Request $req)
    {
        try {
            return view('add-news');
        } catch (\Exception $e) {
            return view('404');
        }
    }
  	public function addNewsPost(Request $req)
    {
        try {
          $imageName = time().'.'.$req->image->extension();  
          $req->image->move(public_path('images'), $imageName);
          $news = [
              'title' => $req->title,
              'author' => $req->author,
              'description' => $req->description,
              'image' => env('APP_URL').'public/images/'.$imageName,
            ];
          News::create($news);
           return redirect()->route('addNews')->with('success', 'Your news is published');
        } catch (\Exception $e) {
            return view('404');
        }
    }
  
   	public function editNewsPost(Request $req)
    {
        try {
          $news = News::find($req->id);
          $news->title = $req->title;
          $news->author = $req->author;
          $news->description = $req->description;
          if($req->image) {
              $imageName = time().'.'.$req->image->extension();  
              $req->image->move(public_path('images'), $imageName);
              $news->image = env('APP_URL').'public/images/'.$imageName;
          }
          $news->save();
           return redirect()->route('getAllNews')->with('success', 'Your news is updated & published');
        } catch (\Exception $e) {
            return view('404');
        }
    }
  
  	public function editNews($id)
    {
        try {
            $news = News::where(['status' => '1', 'id' => $id])->orderBy('id', 'desc')->first();
            return view('edit-news', compact('news'));
        } catch (\Exception $e) {
            return view('404');
        }
    }
  
   	public function editStagePost(Request $req)
    {
        try {
          $news = PresaleStages::find($req->id);
          if($req->stage_active) {
            $stage = PresaleStages::where(['active' => 1])->first();
            $stage->active = 0;
          	$stage->save();
            
          	$news->active = 1;
          	$news->save();
           	return redirect()->route('home')->with('success', 'Your Stage is updated & published');

          }
          $news->stage = $req->stage;
          $news->discount = $req->discount;
          $news->rate = $req->rate;
          $news->presale_tokens_prcntg = $req->percentage;
          $news->presale_tokens_supply = $req->supply;
          $news->save();
           return redirect()->route('home')->with('success', 'Your Stage is updated & published');
        } catch (\Exception $e) {
            return view('404');
        }
    }
  
    public function bonusRelease() {
		$bonuses = Transactions::where(['status' => 'pending', 'in_out' => 'Referral Reward Bonus'])->first();
    	if(!$bonuses) {
        	echo 'No pending Bonus to be released';
          exit;
        }
      	$amount = $bonuses->amount;
      	$to = $bonuses->to_address;
      
        $contract_address = env('erc20_spk_contract_address');
        $wallet = Wallets::where(['supply_wallet' => 1])->first();
      
		$response = transfer_erc20($wallet->wallet_address, Crypt::decryptString($wallet->private_key), $to,  $amount, $contract_address);
        if (isset($response['hash'])) {
          $t = Transactions::find($bonuses->id);
          $t->status = 'completed';
          $t->hash = $response['hash'];
          $t->save();
          echo $response['hash'];
        } else {
        	dd($response);
        }
    }

}

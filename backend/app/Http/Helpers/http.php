<?php

use App\Models\Wallets;
use IEXBase\TronAPI\Provider\HttpProvider;
use IEXBase\TronAPI\Tron;
use IEXBase\TronAPI\TRC20Contract;
use IEXBase\TronAPI\Exception\TronException;
use Illuminate\Support\Facades\Crypt;
use Denpa\Bitcoin\Client as BitcoinClient;

function ApiRequestsExecute($data = null)
{
    // dd($data);
    $auth = isset($data['auth']) ? $data['auth'] : 'Z4beILBI8a7zYjSW0Jg0oNRyllXCrRdeAgmArQqgCfWB3t9F';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $data['query']);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    if ($data['method'] == 'post') {
        curl_setopt($curl, CURLOPT_ENCODING, '');
        curl_setopt($curl, CURLOPT_MAXREDIRS, 10);
        curl_setopt($curl, CURLOPT_TIMEOUT, 0);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        if (isset($data['fields'])) {
            curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data['fields']));
        }
    }
    if ($data['method'] == 'get') {
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
        if (isset($data['fields'])) {
            curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data['fields']));
        }
    }
    if (isset($data['data_type'])) {
        if ($data['data_type'] == 'urlencoded') {
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                "Authorization: " . $auth,
                "Content-Type: application/x-www-form-urlencoded",
                'api-key: ' . $auth
            ));
        }
    } else {
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            "Authorization: " . $auth,
            "Content-Type: application/json",
            'api-key: ' . $auth
        ));
    }
    // RESPONSE
    $response = curl_exec($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    return ['data' => json_decode($response), 'response_code' => $httpcode];
}

function tron($private_key = null)
{
    try {
        $fullNode = new HttpProvider('https://api.trongrid.io');
        $solidityNode = new HttpProvider('https://api.trongrid.io');
        $eventServer = new HttpProvider('https://api.trongrid.io');
        $tron = new Tron($fullNode, $solidityNode, $eventServer, null, null, $private_key);
        $contract = new TRC20Contract($tron, 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
        return ['tron' => $tron, 'contract' => $contract];
    } catch (TronException $e) {
        exit($e->getMessage());
    }
}

function create_wallet() {
	$tron = tron()['tron'];
    $wallet = $tron->createAccount();
  	return $wallet;
}

function get_wallet($user, $_wallet = null) {
    $wallets = Wallets::where(['user_id' => $user->id])->get();
    $_wallets = [];
    foreach($wallets as $wallet) {
        $_wallets[$wallet->chain] = $wallet;
    }
    if($_wallet)
    return $_wallets[$_wallet];
    else return $_wallets;
}

function get_wallets($user) {
  $permissions = json_decode($user->permissions);
  if($permissions[2])
    $wallets = Wallets::where(['active' => 1])->orderBy('id', 'desc')->get();
  else
    $wallets = Wallets::where(['user_id' => $user->id, 'active' => 1])->orderBy('id', 'desc')->get();
  return $wallets;
}

function getRates() {
    $rates = file_get_contents('https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd');
    $rates = json_decode($rates);
    return $rates;
}







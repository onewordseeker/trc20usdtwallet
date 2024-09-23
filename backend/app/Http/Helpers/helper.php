<?php

use App\Models\Wallets;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Http;

include 'http.php';
include 'tatum.php';

// DB functions
/* function create_wallets($user, $eth) {
    try {
        $wallets = [];
        $tron = import_tronWallet($eth->mnemonics)['data'];
        if(isset($tron->mnemonics)) {
            $_wallets = [];
            $_wallets['mnemonics'] = Crypt::encryptString($tron->mnemonics);
            $_wallets['wallet_address'] = $tron->wallet[0]->address;
            $_wallets['private_key'] = Crypt::encryptString($tron->wallet[0]->privateKey);
            $_wallets['chain'] = 'tron';
            $_wallets['user_id'] = $user->id;
            $wallets[] = $_wallets;
        }
      	$wallet = Wallets::insert($wallets);
        return $wallet;
    } catch (Exception $ex) {
        return ['message' => 'Error occured while creating wallet', 'exception' => $ex, 'status_code' => 501];
    }
} */
function get_balances($wallet_address) {
    $balances = [];
    $tron_balance = get_trc20_balance($wallet_address, '');
    $balances['trc20_trx'] = $tron_balance;
    $trc_usdt_balance = get_trc20_balance($wallet_address, env('trc20_usdt_contract_address'));
    $balances['trc20_usdt'] = $trc_usdt_balance;
    return $balances;
}
function get_transactions($wallet_address) {
    $transactions = ['tron' => []];
   	$trx_txns = get_trc20_transactions($wallet_address);
   	$transactions['tron'] = $trx_txns;
  	return $transactions;
  
    if(strtolower($chain) == 'tron' || strtolower($chain) == 'usdt(trc20)') {
       
    } else if (strtolower($chain) == 'bsc') {
        $ethereum_txns = get_ethereum_transactions($_wallets['ethereum']->wallet_address);
        $transactions['ethereum'] = $ethereum_txns;
    } else if (strtolower($chain) == 'usdt(erc20)') {
        $ethereum_txns = get_erc20_transactions($_wallets['ethereum']->wallet_address);
        $transactions['ethereum'] = $ethereum_txns;
    } else if ($chain == 'bitcoin') {
        $transactions['bitcoin'] = get_btc_transactions($_wallets['btc']->wallet_address);
    }
    // $trc_usdt_txns = get_trc20_transactions($_wallets['tron']->wallet_address);
    // if(isset($trc_usdt_txns['token_txns']->data)) {
    //     $transactions['tron_token'] = $trc_usdt_txns['token_txns']->data;
    // }
    return $transactions;
}

// create wallets
function create_tronWallet() {
    $wallet_api = env('personal_node');
    $data['query'] = $wallet_api . 'create-tron-wallet';
    $data['method'] = 'get';
    $data['function_called'] = 'Create Wallet';
    return ApiRequestsExecute($data);
}

// Transfer funds
function transfer_trc20($from_address, $from_privateKey, $address, float $amount, $smart_contract = null) {
    $contract = tron($from_privateKey);
    if ($smart_contract) {
        $response = $contract['contract']->transfer($address, $amount, $from_address);
        if (isset($response['result'])) {
            if(isset($response['txID'])) {
                return ['hash' => $response['txID']];
            }
        } else {
            return ['error' => 'transaction could not process. Please check your current balance'];
        }
    } else {
        $response = $contract['tron']->send($address, $amount, $from_address);
        if (isset($response['result'])) {
            if(isset($response['txID'])) {
                return ['hash' => $response['txID']];
            }
        } else {
            return ['error' => 'transaction could not process. Please check your current balance'];
        }
    }
}
function send_usdt($from, $fromPrivateKey, $to, float $amount) {
try {
  		$feePayerPrivateKey = env('feePayerPrivateKey');
        // Initialize the Tron API instance
        $tron = tron($feePayerPrivateKey);
        $fromtron = tron($fromPrivateKey);
        
        
        // Contract address for USDT (TRC20)
        $usdtContractAddress = env('trc20_usdt_contract_address');
        
            // Set Account A's private key
            $fromtron['tron']->setPrivateKey($fromPrivateKey);

            // Obtain the contract's ABI
  			$abi = file_get_contents(__DIR__.'/trc20.json');
 			$contractABI = json_decode($abi, true);
		
            // Create a transaction that triggers Account C's contract transfer
            // Note: Proper contract method and parameters are needed here
        	$feeLimitInSun = bcmul((string)50, 1000000);
        $tokenAmount = bcmul($amount, bcpow('10', '6', 0), 0); // 6 decimal places for USDT

            $transaction = $fromtron['tron']->getTransactionBuilder()->triggerSmartContract(
              	$contractABI,
                $fromtron['tron']->address2HexString($usdtContractAddress),
                'transfer',  // Specific contract method and parameter format needed here
                [$fromtron['tron']->address2HexString($to),
                    $tokenAmount
                ],
                 $feeLimitInSun,
                $fromtron['tron']->address2HexString($from),
                  // Add ABI information to method call
            );
            // Sign the transaction
            $signedTransaction = $fromtron['tron']->signTransaction($transaction);
            $signedTransaction2 = $tron['tron']->signTransaction($signedTransaction);
            // Send the signed transaction
            $result = $fromtron['tron']->sendRawTransaction($signedTransaction2);
			dd($result);
            return $result;
        } catch (Exception $e) {
            return "Error: " . $e->getMessage();
        }
}

function send_usdt1($from, $fromPrivateKey, $to, float $amount) {
    try {
        $feePayerPrivateKey = env('feePayerPrivateKey');
        // Initialize the Tron API instance
        $tronFeePayer = tron($feePayerPrivateKey);
        
        
        // Contract address for USDT (TRC20)
        $usdtContractAddress = env('trc20_usdt_contract_address');
        
      	$feeLimitInSun = bcmul((string)30, 1000000);

        // Convert amount to the smallest unit (usually in sun)
        $tokenAmount = bcmul($amount, bcpow('10', '6', 0), 0); // 6 decimal places for USDT
        // Define ABI for the transfer function
        $abi = file_get_contents(__DIR__.'/trc20.json');
 		$abiData = json_decode($abi, true);
        // Create a transaction to transfer USDT
      	$tron = tron($fromPrivateKey);
        $transaction = $tron['tron']->getTransactionBuilder()->triggerSmartContract(
           $abiData,
           $tron['tron']->address2HexString($usdtContractAddress),
          	'transfer',
            [$tron['tron']->address2HexString($to), $tokenAmount],
            $feeLimitInSun,
            $tron['tron']->address2HexString($from)
        );

        // Sign the transaction with the sender's private key
        // $signedTransaction = $tron['tron']->signTransaction($transaction, $fromPrivateKey);
        
        // Now, fee payer needs to sign the transaction for covering the fees
        // $feePayerSignedTransaction = $tron['tron']->signTransaction($transaction, $feePayerPrivateKey);

         // Sign the transaction with the sender's private key
        $signedTransaction = $tronFeePayer['tron']->signTransaction($transaction);
        // $signedTransaction = $tronFeePayer['tron']->signTransaction($signedTransaction);
        // Initialize Tron API instance with fee payer's private key

        // Sign the transaction with the fee payer's private key
        // $feePayerSignedTransaction = $tronFeePayer['tron']->signTransaction($signedTransaction);

        // Broadcast the transaction
        $response = $tronFeePayer['tron']->sendRawTransaction($signedTransaction);
      	dd($response);
        // Broadcast the transaction
        // $response = $tron['tron']->sendRawTransaction($feePayerSignedTransaction);
        if (isset($response['result']) && $response['result'] === true) {
            if (isset($response['txID'])) {
                return ['hash' => $response['txID']];
            } else {
                return ['error' => 'Transaction could not process. Please check your current balance.'];
            }
        } else {
            return ['error' => 'Transaction could not process.'];
        }
    } catch (Exception $e) {
        // Handle exceptions
        return ['error' => 'Transaction could not process. Please check your current balance.', 'er' => $e];
    }
}



// get_balance
function get_trc20_balance($address, $contract_address) {
    $tron = tron();
    if(!$contract_address) {
        if (array_key_exists('tron', $tron)) {
          	$balance = $tron['tron']->getBalance($address) / 1000000;
          	$wallet = Wallets::where(['wallet_address' => $address])->first();
          	if($wallet) {
              $wallet->trx_balance = $balance;
              $wallet->save();
            }
            return $balance;
        }
    } else {
        if (array_key_exists('contract', $tron)) {
          // last_balance
          	$balance = $tron['contract']->balanceOf($address);
          	$wallet = Wallets::where(['wallet_address' => $address])->first();
          	if($wallet) {
              $wallet->last_balance = $balance;
              $wallet->save();
            }
            return $balance;
        }
    }
}

// get_transactions
function get_trc20_transactions($wallet_address) {
    $tron = tron();
    $contract = $tron['contract'];
    $transactions = [];

    try {
        // Get TRX transactions
        $trx = $contract->getTransactions($wallet_address);
        
        // Get TRC20 token transactions
        $trc = $contract->getTokenTransactions($wallet_address);

      	// Filter and process TRX transactions
        foreach ($trx['data'] as $txn) {
            if (isset($txn['ret'][0]['contractRet']) && $txn['ret'][0]['contractRet'] == 'SUCCESS') {
                if (isset($txn['raw_data']['contract'][0]['parameter']['value']['amount'])) {
                   	$status = (isset($txn['ret'][0]['contractRet']) && $txn['ret'][0]['contractRet'] == 'SUCCESS') ? 'SUCCESS' : 'FAILED';
                    $transactions[] = [
                        'hash' => $txn['txID'],
                        'blockNumber' => $txn['blockNumber'],
                        'timeStamp' => date('Y-m-d H:i', $txn['block_timestamp'] / 1000),
                        'value' => $txn['raw_data']['contract'][0]['parameter']['value']['amount'] / 1000000,
                        'to' => $tron['tron']->fromHex($txn['raw_data']['contract'][0]['parameter']['value']['to_address']),
                        'from' => $tron['tron']->fromHex($txn['raw_data']['contract'][0]['parameter']['value']['owner_address']),
                        'type' => 'TRX',
                      	'link' => 'https://tronscan.org/#/transaction/'.$txn['txID'],
                        'status' => $status // Add status here

                    ];	
                }
            }
        }

        // Filter and process TRC20 USDT transactions
        foreach ($trc['data'] as $tkn_txn) {
            if (isset($tkn_txn['token_info']) && $tkn_txn['token_info']['symbol'] == 'USDT') {
                $status = isset($tkn_txn['transaction_id']) ? 'SUCCESS' : 'FAILED'; 
                $transactions[] = [
                    'hash' => $tkn_txn['transaction_id'],
                    'value' => $tkn_txn['value'] / 1000000,
                    'to' => $tkn_txn['to'],
                    'timeStamp' => date('Y-m-d H:i', $tkn_txn['block_timestamp'] / 1000),
                    'from' => $tkn_txn['from'],
                    'token' => $tkn_txn['token_info'],
                    'type' => 'USDT',
                    'link' => 'https://tronscan.org/#/transaction/'.$tkn_txn['transaction_id'],
                  	'status' => $status
                ];
            }
        }
    } catch (Exception $e) {
        // Handle exception if necessary
    }
    return $transactions;
}

function tronEstimatedGasFee() {
    // $api_url = 'https://api.trongrid.io/v1/transactions?limit=1&order_by=timestamp,desc';
    // $data['query'] = $api_url;
    // $data['method'] = 'get';
    // $data['function_called'] = 'Estimated Gas Wallet';
    // return ApiRequestsExecute($data);
    return rand(1, mt_getrandmax() - 1) / mt_getrandmax() * 10;
}

function testTatum () {
  
// Usage
$tatumApiKey = 't-64f72e110c34f3d88de9f773-e7ef8e63051744a789f4fbda'; // Replace with your actual Tatum API key

try {
    // Create master wallet
    $masterWallet = createGasPumpMasterWallet($tatumApiKey);
    echo "Gas Pump Master Wallet created:\n";
    echo "Signature ID: " . $masterWallet['signatureId'] . "\n";
    echo "Address: " . $masterWallet['address'] . "\n\n";

    // Create child wallets
    $numChildWallets = 5; // Change this to the number of child wallets you want to create
    for ($i = 0; $i < $numChildWallets; $i++) {
        $childWallet = createGasPumpChildWallet($tatumApiKey, $masterWallet['signatureId']);
        echo "Child Wallet " . ($i + 1) . " created:\n";
        echo "Address: " . $childWallet['address'] . "\n";
        echo "Signature ID: " . $childWallet['signatureId'] . "\n\n";
    }
  } catch (Exception $e) {
      echo "Error: " . $e->getMessage() . "\n";
  }
}


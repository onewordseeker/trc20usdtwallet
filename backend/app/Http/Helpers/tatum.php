<?php

class TatumGasPump {
    private $apiKey;
    private $baseUrl = 'https://api-eu1.tatum.io/v3';
    private $chain = 'TRON';
    private $isTestnet = false;

    public function __construct($apiKey, $isTestnet = false) {
        $this->apiKey = $apiKey;
        $this->isTestnet = $isTestnet;
    }

    private function makeRequest($method, $endpoint, $data = null) {
        $url = $this->baseUrl . $endpoint;
        $curl = curl_init($url);
        
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'x-api-key: ' . $this->apiKey
        ]);

        if ($data !== null) {
            curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        }

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        curl_close($curl);

        if ($httpCode < 200 || $httpCode >= 300) {
            throw new Exception("API request failed: HTTP $httpCode - $response");
        }

        return json_decode($response, true);
    }

    public function createGasPumpMasterWallet($ownerAddress) {
        $data = [
            'chain' => $this->chain,
            'owner' => $ownerAddress,
            'testnet' => $this->isTestnet
        ];

        return $this->makeRequest('POST', '/gas-pump', $data);
    }

    public function precalculateGasPumpAddresses($masterWalletSignatureId, $from, $to) {
        $data = [
            'chain' => $this->chain,
            'masterWalletSignatureId' => $masterWalletSignatureId,
            'from' => $from,
            'to' => $to
        ];

        return $this->makeRequest('POST', '/gas-pump/precalculate', $data);
    }

    public function transferUsdtWithGasPump($senderPrivateKey, $senderAddress, $recipientAddress, $amount, $feePayerSignatureId) {
        $data = [
            'senderAccountId' => $senderAddress,
            'fromPrivateKey' => $senderPrivateKey,
            'to' => $recipientAddress,
            'amount' => $amount,
            'feeLimit' => 30, // Adjust as needed
            'tokenAddress' => 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', // USDT TRC20 contract address
            'feePayerSignatureId' => $feePayerSignatureId
        ];

        return $this->makeRequest('POST', '/tron/trc20/transaction', $data);
    }
}

// Usage example
$tatumApiKey = 'YOUR_TATUM_API_KEY';
$isTestnet = false; // Set to true for testnet

try {
    $gasPump = new TatumGasPump($tatumApiKey, $isTestnet);

    // Step 1: Create Gas Pump Master Wallet
    $ownerAddress = 'YOUR_OWNER_ADDRESS';
    $masterWallet = $gasPump->createGasPumpMasterWallet($ownerAddress);
    echo "Gas Pump Master Wallet created:\n";
    echo "Signature ID: " . $masterWallet['signatureId'] . "\n";
    echo "Address: " . $masterWallet['address'] . "\n\n";

    // Step 2: Precalculate Gas Pump Addresses
    $from = 0;
    $to = 10; // Generate 10 addresses
    $addresses = $gasPump->precalculateGasPumpAddresses($masterWallet['signatureId'], $from, $to);
    echo "Precalculated Gas Pump Addresses:\n";
    foreach ($addresses['addresses'] as $index => $address) {
        echo "Address " . ($index + 1) . ": " . $address . "\n";
    }
    echo "\n";

    // Step 3: Transfer USDT using Gas Pump
    $senderPrivateKey = 'SENDER_PRIVATE_KEY';
    $senderAddress = $addresses['addresses'][0]; // Using the first precalculated address
    $recipientAddress = 'RECIPIENT_ADDRESS';
    $amount = '10'; // Amount in USDT
    $feePayerSignatureId = $masterWallet['signatureId'];

    $transaction = $gasPump->transferUsdtWithGasPump($senderPrivateKey, $senderAddress, $recipientAddress, $amount, $feePayerSignatureId);
    echo "USDT Transfer initiated:\n";
    echo "Transaction ID: " . $transaction['txId'] . "\n";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
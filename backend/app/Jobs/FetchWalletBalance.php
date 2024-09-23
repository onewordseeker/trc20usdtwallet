<?php

namespace App\Jobs;

use GuzzleHttp\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchWalletBalance implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $address;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($address)
    {
        $this->address = $address;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $client = new Client();
        $retries = 3;      
        while ($retries > 0) {
            try {
                $balance = get_trc20_balance($this->address, 1);
             	$trx_balance = get_trc20_balance($this->address, null);
              	echo $trx_balance.'</br>';
                return;
            } catch (\Exception $e) {
                $retries--;
                if ($retries == 0) {
                    // Log the error or handle the failed request
                    \Log::error("Failed to fetch balance for address {$this->address}: {$e->getMessage()}");
                }
            }
        }
    }
}
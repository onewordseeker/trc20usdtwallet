<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallets extends Model
{
    use HasFactory;
    protected $fillable = [
        'mnemonics',
        'wallet_address',
        'private_key',
      	'last_balance',
      	'trx_balance',
      	'partner',
        'chain',
      	'active',
        'user_id',
        'created_at',
        'updated_at'
    ];
  protected $hidden = [
      	'private_key',
      	'mnemonics'
    ];

}

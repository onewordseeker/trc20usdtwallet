<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'hash',
        'amount',
        'to_address',
        'from_address',
      	'status',
        'created_at',
        'updated_at'
    ];
}

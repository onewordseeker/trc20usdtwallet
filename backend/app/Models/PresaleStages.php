<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PresaleStages extends Model
{
    use HasFactory;
    protected $fillable = [
        'stage',
        'discount',
        'rate',
        'presale_tokens_prcntg',
        'presale_tokens_supply',
        'created_at',
        'updated_at'
    ];
}

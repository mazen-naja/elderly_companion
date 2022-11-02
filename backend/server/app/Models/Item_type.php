<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item_type extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name'
    ];

    protected $table='item_type';
}

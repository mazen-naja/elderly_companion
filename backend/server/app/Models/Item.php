<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'times_needed',
        'elder_id',
        'item_type_id'
    ];
    public $timestamps = false;
    protected $table='items';
}

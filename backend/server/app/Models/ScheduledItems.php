<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduledItems extends Model
{
    use HasFactory;
    protected $fillable = [
        'schedule_id',
        'item_id'
];

    public $timestamps = false;
    protected $table='scheduled_items';
}

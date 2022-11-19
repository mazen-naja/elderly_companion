<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
            'elder_id'    ,
            'caretaker_id',
            'time_created',
            'is_visible'  ,
    ];
    protected $table='schedules';
}

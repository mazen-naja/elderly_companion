<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Elders_Caretakers extends Model
{
    use HasFactory;


protected $fillable = [
        'elder_id',
        'caretaker_id',
        'is_accepted'];


    public $timestamps = false;
    protected $table = 'elders_caretakers';
}

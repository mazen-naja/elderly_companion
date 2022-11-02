<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Schedules;
use App\Http\Controllers\EldersCaretakers;




Route::get('/schedule/{elder_id}', [Schedules::class,'getItems']);
Route::get('/item/{item}', [Schedules::class,'getItem']);
Route::post('/elder-request', [EldersCaretakers::class,'elder_send_request']);
Route::post('/elder-request-accept', [EldersCaretakers::class,'elder_accept_request']);
Route::post('/caretaker-request', [EldersCaretakers::class,'caretaker_send_request']);
Route::post('/caretaker-request-accept', [EldersCaretakers::class,'caretaker_accept_request']);
Route::post('/elder-caretakers', [EldersCaretakers::class,'getElders_caretakers']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

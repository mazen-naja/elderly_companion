<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Schedules;
use App\Http\Controllers\EldersCaretakers;
use App\Http\Controllers\AuthController;

Route::group(["prefix"=> "v0.1"], function(){

Route::get('/schedule/{elder_id}', [Schedules::class,'getItems']);
Route::get('/item/{item}', [Schedules::class,'getItem']);
Route::post('/create-item', [Schedules::class,'createItem']);
Route::post('/medicines', [Schedules::class,'getMedicines']);
Route::post('/elder-schedule', [Schedules::class,'getElderSchedule']);
Route::post('/elder-notifications', [Schedules::class,'getElderNotificationHistory']);
Route::post('/elder-sendtonotifications', [Schedules::class,'sendtoElderNotificationHistory']);
Route::post('/elder-notifications', [Schedules::class,'getElderNotificationHistory']);
Route::post('/elder-create-schedule', [Schedules::class,'createschedule']);
Route::post('/elder-createmedicine', [Schedules::class,'createMedicine']);


Route::post('/caretaker-schedule', [Schedules::class,'getCaretakerSchedule']);
Route::post('/caretaker-notifications', [Schedules::class,'getCaretakernotifications']);
Route::post('/elder-request', [EldersCaretakers::class,'elder_send_request']);
Route::post('/elder-request-accept', [EldersCaretakers::class,'elder_accept_request']);
Route::post('/caretaker-request', [EldersCaretakers::class,'caretaker_send_request']);
Route::post('/caretaker-request-accept', [EldersCaretakers::class,'caretaker_accept_request']);
Route::post('/elder-caretakers', [EldersCaretakers::class,'getElders_caretakers']);
Route::post('/elder-caretakers-requests', [EldersCaretakers::class,'getElders_caretakers_requests']);
Route::post('/caretaker-elders', [EldersCaretakers::class,'getCaretakers_elders']);
Route::post('/caretaker-elders-requests', [EldersCaretakers::class,'getCaretakers_elders_requests']);



});



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::get('me', [AuthController::class, 'me']);



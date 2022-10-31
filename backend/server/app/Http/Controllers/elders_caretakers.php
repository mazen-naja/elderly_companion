<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class elders_caretakers extends Controller
{

    private function elder_send_request($elder_id,$caretaker_id)
    {
        $elder=DB::table('users')->find($elder_id);
        $caretaker=DB::table('users')->find($caretaker_id);
        $elder_request=DB::table('elders_caretakers')->insert(['elder_id'=>$elder_id, 'caretaker_id'=>$caretaker_id, 'is_accepted'=>'false']);

    }
    private function caretaker_send_request($caretaker_id,$elder_id)
    {
        $elder=DB::table('users')->find($elder_id);
        $caretaker=DB::table('users')->find($caretaker_id);
        $caretaker_request=DB::table('elders_caretakers')->insert(['elder_id'=>$elder_id, 'caretaker_id'=>$caretaker_id, 'is_accepted'=>'false']);
    }
    
    private function caretaker_accept_request($caretaker_id,$elder_id,$is_accepted)
    {
        $elder=DB::table('users')->find($elder_id);
        $caretaker=DB::table('users')->find($caretaker_id);
        $caretaker_request=DB::table('elders_caretakers')->where('elder_id',$elder_id)->where('caretaker_id',$caretaker_id)->update(['is_accepted' => $is_accepted]);
        
        
    }
    private function elder_accept_request($caretaker_id,$elder_id,$is_accepted)
    {
        $elder=DB::table('users')->find($elder_id);
        $caretaker=DB::table('users')->find($caretaker_id);
        $caretaker_request=DB::table('elders_caretakers')->where('elder_id',$elder_id)->where('caretaker_id',$caretaker_id)->update(['is_accepted' => $is_accepted]);
        
        
    }
}

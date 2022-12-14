<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Elders_Caretakers;

class EldersCaretakers extends Controller
{

    function elder_send_request(Request $request)
    {
        $data = $request->validate([
            'elder_id'=> 'required',
            'caretaker_id'=> 'required',
            'is_accepted'=> 'required'
        ]);

        $elder_request=Elders_Caretakers::create([
            'elder_id' => $request->elder_id,
            'caretaker_id' => $request->caretaker_id,
            'is_accepted' => $request->is_accepted
        ]);
        
        return response()->json([
            "status" => "success",
            "message"=>"Request sent successfully",
            "data" => $elder_request
        ], 200);

    }


    function caretaker_send_request(Request $request)
    {
        $data = $request->validate([
            'elder_id'=> 'required',
            'caretaker_id'=> 'required',
            'is_accepted'=> 'required'
        ]);

        $caretaker_request=Elders_Caretakers::create([
            'elder_id' => $request->elder_id,
            'caretaker_id' => $request->caretaker_id,
            'is_accepted' => $request->is_accepted
        ]);
        
        return response()->json([
            "status" => "success",
            "message"=>"Request sent successfully",
            "data" => $caretaker_request
        ], 200);


    }
    
    function caretaker_accept_request($caretaker_id,$elder_id,$is_accepted)
    {
        $caretaker_request=Elders_Caretakers::where('elder_id',$elder_id)->where('caretaker_id',$caretaker_id);
        $caretaker_request->is_accepted=$request->is_accepted;

        return response()->json([
            "status" => "success",
            "data" => $caretaker_request
        ], 200);
              
    }
    
    function elder_accept_request(Request $request)
     {   

        $elder_request=Elders_Caretakers::where('elder_id',$request->elder_id)->where('caretaker_id',$request->caretaker_id);
        $elder_request->is_accepted=$request->is_accepted;

        return response()->json([
            "status" => "success",
            "data" => $elder_request
        ], 200);

    }

    function getElders_caretakers(Request $request){

        $get_caretakers=Elders_Caretakers::join('users', 'users.id', '=', 'caretaker_id')
        ->where('elder_id', $request->elder_id)
        ->where('is_accepted',1)
        ->get(['users.name','users.image','users.gender','users.age']);
        return response()->json([
            "status" => "success",
            "data" => $get_caretakers
        ], 200);

    }

    function getElders_caretakers_requests(Request $request){

        $get_caretakers=Elders_Caretakers::join('users', 'users.id', '=', 'caretaker_id')
        ->where('elder_id', $request->elder_id)
        ->where('is_accepted',0)
        ->get(['users.name','users.image','users.gender','users.age']);
        return response()->json([
            "status" => "success",
            "data" => $get_caretakers
        ], 200);

    }

    function getCaretakers_elders(Request $request){

        $get_caretakers=Elders_Caretakers::join('users', 'users.id', '=', 'elder_id')
        ->where('caretaker_id', $request->caretaker_id)
        ->where('is_accepted',1)
        ->get(['users.name','users.image','users.gender','users.age']);
        return response()->json([
            "status" => "success",
            "data" => $get_caretakers
        ], 200);

    }

    function getCaretakers_elders_requests(Request $request){

        $get_caretakers_requests=Elders_Caretakers::join('users', 'users.id', '=', 'elder_id')
        ->where('caretaker_id', $request->caretaker_id)
        ->where('is_accepted',0)
        ->get(['users.name','users.image','users.gender','users.age']);
        return response()->json([
            "status" => "success",
            "data" => $get_caretakers_requests
        ], 200);

    }

    


}

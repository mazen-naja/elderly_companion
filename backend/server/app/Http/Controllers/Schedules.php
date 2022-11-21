<?php

namespace App\Http\Controllers;
use App\Models\Item;
use App\Models\Item_type;
use App\Models\Schedule;
use App\Models\ScheduledItems;
use Illuminate\Http\Request;
use App\Setting;


class Schedules extends Controller
{
  

    function getItems(Request $request)
    {
        $items=Item::join('item_type as it' ,'it.id' ,'=','item_type_id')
        ->where('items.elder_id',$request->elder_id)
        ->get();
        
        return response()->json([
            "status" => "success",
            "data" => $items
        ], 200);

    }

    function getMedicines(Request $request)
    {
        $items=Item::join('item_type as it' ,'it.id' ,'=','item_type_id')
        ->where('items.elder_id',$request->elder_id)
        ->where('it.name','Medicine')
        ->get();
        
        return response()->json([
            "status" => "success",
            "data" => $items
        ], 200);

    }

    function getItem(Reqeuest $request)
    {

        $items=Item::join('item_type as it' ,'it.id' ,'=','item_type_id')
        ->where('it.id',$request->item_id)
        ->get();

        return response()->json([
            "status" => "success",
            "data" => $items
        ], 200);
    }



    function createItem(Reqeuest $request)
    {
        $data = $request->validate([
            'name'=> 'required',
            'times_needed'=> 'required',
            'elder_id'=> 'required',
            'item_type_id'=> 'required'
        ]);

        $create_item=Item::create([
            'name' => $request->name,
            'times_needed' => $request->times_needed,
            'elder_id' => $request->elder_id,
            'item_type_id'=> $request->item_type_id
        ]);


        return response()->json([
            "status" => "success",
            "data" => $create_item
        ], 200);
    }

    function createItemType(Reqeuest $request)
    {
        $data = $request->validate([
            'name'=> 'required',
        ]);
        $create_item=Item_type::create([
            'name' => $request->name,
        ]); 

        return response()->json([
            "status" => "success",
            "data" => $create_item
        ], 200);
    }





    function createschedule(Reqeuest $request)
    {
        $data = $request->validate([
            'elder_id'=> 'required',
            'caretaker_id'=> 'required',
            'time_created'=> 'required',
            'is_visible'=> 'required',
            'item_id'=> 'required',
        ]);

        $create_item=Schedule::create([
            'elder_id' => $request->elder_id,
            'caretaker_id' => $request->caretaker_id,
            'time_created' => $request->time_created,
            'is_visible'=> $request->is_visible,
        ]);

        $add_to_schedule=Schedule::create([
            'item_id' => $request->item_id,
        ]);



        return response()->json([
            "status" => "success",
            "data" => $create_item,
            "added"=>$add_to_schedule
        ], 200);
    }




 function getElderSchedule(Request $request)
    {
        $data = $request->validate([
            'elder_id'=> 'required',
        ]);


        $items=ScheduledItems::join('schedules as sd','sd.id','=','schedule_id')
        ->join('items as it','it.id','=','item_id')
        ->where('sd.elder_id',$request->elder_id)
        ->get();
        
        return response()->json([
            "status" => "success",
            "data" => $items
        ], 200);

    }


}













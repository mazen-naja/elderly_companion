<?php

namespace App\Http\Controllers;
use App\Models\Item;
use App\Models\Item_type;

use Illuminate\Http\Request;

class schedules extends Controller
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




}


    













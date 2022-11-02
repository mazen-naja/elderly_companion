<?php

namespace App\Http\Controllers;
use App\Models\Item;
use App\Models\Item_type;

use Illuminate\Http\Request;

class schedules extends Controller
{
  

    function getItems($elder_id)
    {
    $items=Item::join('item_type as it' ,'it.id' ,'=','item_type_id')->where('items.elder_id',$elder_id)->get();
    dd($items);
    }


    function getItem($item)
    {
    $items=Item::join('item_type as it' ,'it.id' ,'=','item_type_id')->where('it.id',$item)->get();
    dd($items);
    }





    
    }













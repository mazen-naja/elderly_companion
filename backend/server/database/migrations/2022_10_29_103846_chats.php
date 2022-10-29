<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $table->elder_id()->references('id')->on("users");
        $table->caretaker_id()->references('id')->on("users");
        $table->string('text', 300)->change();
        $table->timestamp('time_sent');
        $table->timestamp('time_received');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};

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
        Schema::create('chats', function (Blueprint $table) {
            $table->unsignedBigInteger('elder_id');
            $table->foreign('elder_id')->references('id')->on('users');
            $table->unsignedBigInteger('caretaker_id');
            $table->foreign('caretaker_id')->references('id')->on('users');
            $table->string('text', 300)->change();
            $table->timestamp('time_sent')->useCurrent();
            $table->timestamp('time_received')->nullable();
    });
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

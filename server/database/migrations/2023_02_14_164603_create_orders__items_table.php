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
        Schema::create('orders__items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('Orders')->onDelete('cascade');
            $table->foreignId('book_id')->constrained('Books')->onDelete('cascade');
            $table->integer('price');
            $table->integer('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders__items');
    }
};

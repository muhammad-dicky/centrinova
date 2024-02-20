<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // public function up(): void
    // {
    //     Schema::create('comments', function (Blueprint $table) {
    //         $table->id();
    //         $table->unsignedBigInteger('centrinova_id');
    //         $table->foreign('centrinova_id')->references('id')->on('centrinovas')->onDelete('cascade');
    //         $table->text('content');
    //         $table->timestamps();
    //     });
    // }
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};

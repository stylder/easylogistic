<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrearBaseDatos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estado', function (Blueprint $table) {
            $table->increments('id_estado');
            $table->string('estado');
            $table->string('eliminada',1);
        });

        Schema::create('municipio', function (Blueprint $table) {
            $table->increments('id_municipio');
            $table->integer('id_estado');
            $table->string('municipio',50);
            $table->string('eliminado',1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('estado');
        Schema::drop('municipio');
    }
}

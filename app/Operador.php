<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Operador extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'operador';
    protected $fillable = array('nombre','apellidos','correo','telefono','no_seguro');
}

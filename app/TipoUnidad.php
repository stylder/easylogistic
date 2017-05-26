<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoUnidad extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'tipo_unidad';
    protected $fillable = array('unidad');
}

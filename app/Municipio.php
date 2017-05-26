<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $primaryKey = 'id_municipio';
    protected $table = 'municipio';
    protected $fillable = array('municipio', 'eliminado');
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $primaryKey = 'id_estado';
    protected $table = 'estado';
    protected $fillable = array('estado');
}

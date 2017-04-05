<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unidades extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'unidades';
    protected $fillable = array('marca','modelo','placas','no_seguro','tipo_unidad');

    public function images()
    {
        return $this->morphMany(\App\Imagen::class, 'imageable');
    }
}

<?php

namespace App\Http\Controllers;

use App\Estado;
use App\Imagen;
use App\Municipio;
use App\Operador;
use App\TipoUnidad;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function estados()
    {
        return Estado::all();
    }

    public function tipo_unidad()
    {
        return TipoUnidad::all();
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function municipios($id)
    {
        return Municipio::where('id_estado', '=', $id)->get();
    }


    public function imagenes_unidad()
    {
        return Imagen::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function agregar_operador(Request $request)
    {
        $operador = new Operador();
        $operador -> nombre     = $request->get('nombre');
        $operador -> apellidos  = $request->get('apellidos');
        $operador -> correo     = $request->get('correo');
        $operador -> telefono   = $request->get('telefono');
        $operador -> seguro     = $request->get('seguro');
        $operador -> licencia   = $request->get('licencia');
        $operador -> estado     = $request->get('estado');
        $operador -> municipio  = $request->get('municipio');

        $operador->save();
        return $operador;
    }

}

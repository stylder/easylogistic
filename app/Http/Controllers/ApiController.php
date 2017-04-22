<?php

namespace App\Http\Controllers;

use App\Estado;
use App\Imagen;
use App\Municipio;
use App\Operador;
use App\TipoUnidad;
use App\Unidades;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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


    public function obtener_mapa()
    {
        $mapa = DB::table('operador')
            ->join('municipio', 'municipio.id_municipio', '=', 'operador.municipio')
            ->join('estado', 'estado.id_estado', '=', 'operador.estado')
            ->select('municipio.municipio', 'estado.estado')->get();
        return $mapa;
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

        $request->session()->put('nombre', $request->get('nombre'));
        $request->session()->put('apellidos', $request->get('apellidos'));
        $request->session()->put('licencia', $request->get('licencia'));

        return $operador;
    }

    public function verificarSession(Request $request){

        $nombre = $request->session()->get('nombre');
        $apellidos = $request->session()->get('apellidos');
        $licencia = $request->session()->get('licencia');

        return (array('nombre' => $nombre, 'apellidos' =>$apellidos, 'licencia' => $licencia));
    }


    public function agregar_unidades(Request $request){

        $unidades_array=[];

        $data = $request->all();

        foreach ($data['unidades'] as $key =>$unidad) {
            $unidades= new Unidades([
                    'marca'     => $unidad['marca'],
                    'modelo'    => $unidad['modelo'],
                    'placas'    => $unidad['placa'],
                    'no_seguro' => $unidad['seguro'],
                    'tipo_unidad'=> $unidad['tipo_unidad']
            ]);
            $unidades->save();
            $unidades_array[$key]=$unidades;
        }




        return (array("unidades"=>$unidades_array));
    }
}

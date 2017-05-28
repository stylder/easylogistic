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
use Illuminate\Support\Facades\Mail;

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

    public function contadores()
    {
        $objeto=[];

        $municipio = Operador::select(DB::raw('count(DISTINCT municipio ) as municipios'))
            ->get('municipios')->first();

        $operador = DB::table('operador')
            ->count();
        $unidades = DB::table('unidades')
            ->count();




        $objeto['operadores']=$operador;
        $objeto['unidades']=$unidades;
        $objeto['municipio']=$municipio;

        return $objeto;
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
        $imagenes=[];

        foreach (TipoUnidad::all()as $key =>$tipo){
            $imagenes[$key] = DB::table('unidades')
                ->leftJoin('imagenes','unidades.placas','=','imagenes.imageable_type')
                ->where('unidades.tipo_unidad', '=', $tipo['id'])
                ->get();;
        }

        return $imagenes;
    }


    public function obtener_mapa()
    {
        $mapa = DB::table('operador')
            ->join('municipio', 'municipio.id_municipio', '=', 'operador.municipio')
            ->join('estado', 'estado.id_estado', '=', 'operador.estado')
            ->select('municipio.municipio', 'estado.estado')->get();
        return $mapa;
    }

    public function actualizar_licencia(Request $request)
    {
        $licencia = $request->get('licencia');

        if($licencia!=null){
            $operador = Operador::where('licencia','=',$licencia)->get()->first();
                $request->session()->put('nombre', $operador['nombre']);
                $request->session()->put('apellidos', $operador['apellidos']);
                $request->session()->put('licencia', $operador['licencia']);
                return ['operador'=>$operador];
        }

        return null;
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




        $operador_correo = [];
        $operador_correo['estado']      =  Estado::where('id_estado','=',$request->get('estado'))->get()->first();
        $operador_correo['municipio']   = Municipio::where('id_municipio','=',$request->get('municipio'))->get()->first();
        $operador_correo ['nombre']     = $request->get('nombre');
        $operador_correo ['apellidos']  = $request->get('apellidos');
        $operador_correo ['correo']     = $request->get('correo');
        $operador_correo ['telefono']   = $request->get('telefono');
        $operador_correo ['seguro']     = $request->get('seguro');
        $operador_correo ['licencia']   = $request->get('licencia');


        $this->enviar_correo_operador($operador_correo);

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
        $licencia = $request->session()->get('licencia');

        foreach ($data['unidades'] as $key =>$unidad) {
            $unidades= new Unidades([
                    'marca'     => $unidad['marca'],
                    'modelo'    => $unidad['modelo'],
                    'placas'    => $unidad['placa'],
                    'licencia'  => $licencia,
                    'no_seguro' => $unidad['seguro'],
                    'tipo_unidad'=> $unidad['tipo_unidad']
            ]);
            $unidades->save();
            $unidades_array[$key]=$unidades;
        }

        return (array("unidades"=>$unidades_array));
    }


    public function conseguir_viaje(Request $request){

        $viaje = [];
        $viaje['nombre']  = $request->get('nombre');
        $viaje['correo']  = $request->get('correo');
        $viaje['telefono']  = $request->get('telefono');

        $viaje['estado_origen']  =  Estado::where('id_estado','=',$request->get('estado_origen'))->get()->first();
        $viaje['municipio_origen']  = Municipio::where('id_municipio','=',$request->get('municipio_origen'))->get()->first();
        $viaje['fecha_salida']  = $request->get('fecha_salida');

        $viaje['estado_destino']  = Estado::where('id_estado','=',$request->get('estado_destino'))->get()->first();
        $viaje['municipio_destino']  =Municipio::where('id_municipio','=',$request->get('municipio_destino'))->get()->first();
        $viaje['fecha_llegada']  = $request->get('fecha_llegada');

        $viaje['tipo_unidad']  = TipoUnidad::where('id','=',$request->get('tipo_unidad'))->get()->first();
        $viaje['notas_adicionales']  = $request->get('notas_adicionales');




        $this->enviar_correo_viaje($viaje);
        return (array("unidades"=>$viaje));
    }


    private  function  enviar_correo_operador($operador){


        $correos=['stylder@gmail.com','contactoeasylogistic@gmail.com',$operador['correo']];
        #$correos=['stylder@gmail.com',$operador['correo']];

        $data = array('nombre' => 'EasyLogistic', 'origen' => 'contactoeasylogistic@gmail.com', 'subject' => 'Registro Operador' );


        foreach ($correos as $correo){
            Mail::send( 'emails.operador', $operador, function($message ) use ($data, $correo)
            {
                $message->to( $correo )->from( $data['origen'], $data['nombre'] )->subject( $data['subject'] );
            });
        }
    }

    private  function  enviar_correo_viaje($viaje){


        $correos=['stylder@gmail.com','contactoeasylogistic@gmail.com',$viaje['correo']];

        $data = array('nombre' => 'EasyLogistic', 'origen' => 'contactoeasylogistic@gmail.com', 'subject' => 'Solicitud de Viaje' );


        foreach ($correos as $correo){
            Mail::send( 'emails.consigue_viaje', $viaje, function( $message ) use ($data, $correo)
            {
                $message->to( $correo )->from( $data['origen'], $data['nombre'] )->subject( $data['subject'] );
            });
        }
    }

    public  function  contactanos(Request $request){


        $info = [];
        $info['email'] =  $request->get('email');
        $info['texto']=    $request->get('texto');

        $correos=['stylder@gmail.com','contactoeasylogistic@gmail.com'];

        $data = array('nombre' => 'EasyLogistic', 'origen' => 'contactoeasylogistic@gmail.com', 'subject' => 'Contactanos' );


        foreach ($correos as $correo){
            Mail::send( 'emails.contactanos', $info, function( $message ) use ($data, $correo)
            {
                $message->to( $correo )->from( $data['origen'], $data['nombre'] )->subject( $data['subject'] );
            });
        }
    }
}

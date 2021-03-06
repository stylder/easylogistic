<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});



Route::group(['middleware' => 'cors'], function () {

    Route::get('/images/{model_id}', 'ImgAPIController@uploadFile');
    Route::post('/images/{model_id}', 'ImgAPIController@uploadFile');
    Route::post('/api/eliminar_imagen', 'ImgAPIController@deleteImagen');

    Route::get('/api/estados/', 'ApiController@estados');

    Route::get('/api/mapa/', 'ApiController@obtener_mapa');
    Route::get('/api/tipo_unidad/', 'ApiController@tipo_unidad');
    Route::get('/api/contadores/', 'ApiController@contadores');
    Route::get('/api/municipios/{id?}', 'ApiController@municipios');

    Route::get('/api/imagenes_unidad', 'ApiController@imagenes_unidad');


    Route::post('/api/agregar_operador', 'ApiController@agregar_operador');
    Route::post('/api/agregar_unidades', 'ApiController@agregar_unidades');
    Route::post('/api/conseguir_viaje', 'ApiController@conseguir_viaje');
    Route::post('/api/actualizar_licencia', 'ApiController@actualizar_licencia');
    Route::post('/api/contactanos', 'ApiController@contactanos');
    Route::post('/api/verificar_session', 'ApiController@verificarSession');

});

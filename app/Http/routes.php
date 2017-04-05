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

Route::get('images/upload/{model_id}', 'ImgAPIController@uploadFile');
Route::post('images/upload/{model_id}', 'ImgAPIController@uploadFile');

Route::get('/api/estados/', 'ApiController@estados');
Route::get('/api/tipo_unidad/', 'ApiController@tipo_unidad');
Route::get('/api/municipios/{id?}', 'ApiController@municipios');

#Route::post('/api/v1/employees', 'Employees@store');
#Route::post('/api/v1/employees/{id}', 'Employees@update');
#Route::delete('/api/v1/employees/{id}', 'Employees@destroy');

#Route::resource('main_page', 'MainPage');
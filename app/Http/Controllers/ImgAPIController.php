<?php

namespace App\Http\Controllers;

use App\Imagen;
use File;
use Flow\Config;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;

class ImgAPIController extends Controller
{

    public $model_id;
    public $model_class_path;
    public $destination_path;
    public $filename;


    public $config;

    public function uploadFile(Request $request, $model_id = false){

        $licencia = $request->session()->get('licencia');

        if ($licencia != null) {
            try {
                $this->model_id = $licencia;

                $model_class_path = $this->getClassName($request);

                $path = $this->getImagePublicDestinationPath($request);

                $this->model_class_path = $model_class_path;

                $this->destination_path = $path;

                $this->config = new Config(array(
                    'tempDir' => storage_path('chunks_temp_folder')
                ));

                $this->filename = Input::get('flowFilename');

                $this->saveImagable();

                $flowRequest = new \Flow\Request();

                if (\Flow\Basic::save(
                    public_path($this->getDestinationPath()) . '/' . $this->filename,
                    $this->config,
                    $flowRequest)
                ) {

                    return Response::json(['data' => $model_id, 'message' => "File Uploaded $this->filename"], 200);

                } else {

                    return Response::json([], 204);

                }
            } catch (\Exception $e) {
                throw new \Exception(sprintf("Error saving image %s", $e->getMessage()));
            }
        }
    }

    public function saveImagable(){
        $imageable = new Imagen();
        $imageable->path = $this->destination_path . '/' . $this->filename;
        $imageable->imageable_id = $this->model_id;
        $imageable->imageable_type = $this->model_class_path;
        $imageable->save();
    }

    public function deleteImagen(Request $request){




        $imagen     = $request->get('imagen');
        $licencia   = $request->get('licencia');

        if (File::exists($imagen)) {
            //File::delete($image_path);
            File::delete($imagen);
        }

        DB::table('imagenes')->where('path', '=', $imagen)->where('imageable_id', '=', $licencia)->delete();

        return $imagen;


    }

    public function getDestinationPath(){
        return $this->destination_path;
    }

    public function setDestinationPath($destination_path){
        $this->destination_path = $destination_path;
    }

    private function getClassName($request){
        return ($request->input('model_class_path')) ? $request->input('model_class_path') : 'App\Unidades';
    }

    public function getImagePublicDestinationPath(Request $request){
        return ($request->input('path')) ? $request->input('path') : 'images/unidades';
    }

}
<?php
  class Pages extends Controller {
    public function __construct(){
      $this->userModel = $this->model('Page');
    }
    
    public function index(){
      if(isLoggedIn()){
        redirect('posts');
      }

      $data = [
        'title' => 'SharePosts',
        'description' => 'Simple social network built on the TraversyMVC PHP framework'
      ];
     
      $this->view('pages/index', $data);
    }

    public function about(){
      $data = [
        'title' => 'About Us',
        'description' => 'App to share posts with other users'
      ];

      $this->view('pages/about', $data);
    }

    public function getnota($pagina=null){
      if(empty($pagina)){
				$pagina=1;
			}else{
				$pagina=$pagina;
			}
      $cantNombres=$this->userModel->cantNom();
		 $total_registros=$cantNombres['total_registro'];
		 $desde=($pagina-1)*6;
		 $total_paginas=ceil($total_registros/6);
		 $data = $this->userModel->selectNombres($desde, 6);
		 /* print_r($data); */

     
		if($pagina==1){
			echo'<div class="agregar">
			<div class="con-agregar">
			
			<i class="bi bi-plus-lg agrega"></i>
			</div>
			</div>';
		}
			
		
		 
		  foreach($data as $notes){
			 
			echo '
		    
			<div class="prunota ">
            <div class="cinta"></div>
                <div class="nota-pru ">
				<form id="formedt" class="editafor">
				<button class="cerrar" type="submit"><i class="bi bi-x-lg"></i></button>
				<input type="hidden"  name="ide" id="notaside" value="">
				</form>
                    <div id="'.$notes['idrol'].'" class="context " atr="'.$notes['idrol'].'">'.$notes['descripcion'].'</div>
                </div>
            </div>

			
		   
			';
			
		 } 
    }

    public function rolnota($pagina=null){
			if(empty($pagina)){
				$pagina=1;
			}else{
				$pagina=$pagina;
			}
		 
		 $cantNombres=$this->userModel->cantNom();
		 $total_registros=$cantNombres['total_registro'];
		 
		 $total_paginas=ceil($total_registros/6);
		 
		 
	   
		
		 
 
		 for($i=1;$i<=$total_paginas;$i++){
 
		echo '
		<a  dato="'.$i.'" class="botonpage btn btn-primary">'.$i.'</a>  
	   
		';
		} 

	}

  
  public function viwnota(){
    $strDescription= $_POST['descripcion'];
    $request_rol=$this->userModel->insertRol($strDescription);
    if(!empty($request_rol)){
      $arrResponse= array('status'=>true, 'msg'=>'datos guardados');
    }else if($request_rol=='exist'){
      $arrResponse=array('status'=>false,'msg'=>'ya existe');
    }else{
      $arrResponse= array('status'=>false,'msg'=>'no es posible almacenar datos');
    }
    echo JSON_ENCODE($arrResponse, JSON_UNESCAPED_UNICODE);
    die();
  }

  public function deletbtn(){
		
			
    $idnote=isset($_POST['ide'])?intval($_POST['ide']):null;
      
      if($idnote){
        $rqdelete=$this->userModel->deletenota($idnote);
        $res= array('status'=>true, 'msg'=>'eliminado');
      }else{
        $res= array('status'=>false, 'msg'=>'error');
      }
      echo JSON_ENCODE($res, JSON_UNESCAPED_UNICODE);
    
      
      die();
    
  }

  public function allUpdateSelect($id=null){

    $idnotas=$id?intval($id):null;
    $descripcion=isset($_POST['descripcion'])?$_POST['descripcion']:null;

      $idnota=isset($_POST['id'])?intval($_POST['id']):null;
      
    if($idnotas){
      $notaid=$this->userModel->allUpdate($idnotas,$idnota,$descripcion);
      $respuesta= array('status'=>true,'data'=>$notaid);
      if(empty($notaid)){
        $respuesta= array('status'=>false,'msg'=>'no existe');
      }
      

    }else{
        
      $envsq=$this->userModel->allUpdate($idnotas,$idnota,$descripcion);
      $respuesta= array('status'=>true,'data'=>$descripcion,'id'=>$idnota);
    }
    echo JSON_ENCODE($respuesta, JSON_UNESCAPED_UNICODE);		
    die();
  }

    
  }
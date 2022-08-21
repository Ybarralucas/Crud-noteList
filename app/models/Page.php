<?php
  class Page {
    private $db;

    public function __construct(){
      $this->db = new Database;
    }

    public function cantNom(){
        $sql='SELECT COUNT(*) as total_registro FROM rol';
        $inserte = $this->db->select($sql);
        return $inserte;
    }
    public function selectNombres($desde, $porPagina)
    {                                 
         
        
      $sql = "SELECT * FROM rol ORDER BY idrol DESC LIMIT $desde, $porPagina";
      
        $inserte = $this->db->select_all($sql);
        return $inserte;
    }

    public function insertRol($descripcion){

			$return = "";
			
			$this->strDescripcion = $descripcion;
			

			$sql = "SELECT * FROM rol WHERE descripcion = '{$this->strDescripcion}' ";
			$request = $this->db->select_all($sql);

			if(empty($request))
			{
				$query_insert  = "INSERT INTO rol(descripcion) VALUES(?)";
	        	$arrData = array( $this->strDescripcion);
	        	$request_insert = $this->db->insert($query_insert,$arrData);
	        	$return = $request_insert;
			}else{
				$return = "exist";
			}
			return $return;
		}

    public function allUpdate($id=null,$idUpdate=null,$descripcion=null){
			if ($id) {
				$this->idnota=$id;
				$sql="SELECT * FROM rol WHERE idrol = '{$this->idnota}' ";
				$idinser= $this->db->select($sql);
				return $idinser;
			} else {
				$this->idnote=$idUpdate;
				$this->des=$descripcion;
				$sql  = "UPDATE rol SET descripcion = ? WHERE idrol='{$this->idnote}'";
	        	$arrData = array( $this->des);
	        	$upinser = $this->db->update($sql,$arrData);
				return $upinser;
			}
			
			
		}

    public function deletenota($id){
			
			if($id){
				$this->idnot=$id;
				$sql  = "DELETE FROM rol  WHERE idrol='{$this->idnot}'";
				
				$resq=$this->db->delete($sql);
				
				
			}else{
				$resq='exist';
			}
			
		}

} 
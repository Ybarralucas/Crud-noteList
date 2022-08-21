<?php require APPROOT . '/views/inc/header.php'; ?>
 

  <body>

<div class="con-all container ">





    <!-- Modal -->
    <div class="modal fade" id="agregar-nota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nueva Nota</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- contenido -->
                    <form class="formnota row g-3">


                        
                            
                            <textarea type="text" name="descripcion" class="form-control" id="viwid" required></textarea>


      
                       



                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Agregar</button>
                        </div>
                    </form>
                    <!-- /// -->
                </div>


            </div>
        </div>
    </div>
    
    
    <!-- <div class="agregar"><i class="fas fa-plus agrega "></i></div> -->
  
    <div class="con-note">
        



        


    </div>
    
    

  <!--   <div class="prunota">
        <div class="cinta"></div>
            <div class="nota-pru">
                <div class="cerrar">X</div>
                <div class="context"></div>
            </div>
        </div>  -->


</div>
<!-- JavaScript Bundle with Popper -->
<div class="btnpag">

</div>

<!-- modal notas -->


<div class="modal fade" id="modalnote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  
<div class="modal-header">
<div class="con-icons-form">
          <div class="edit">
              
              <i class="fas fa-pen editar-nota"></i>
        </div>             
       </div>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form class="editaform">
       
       <div class="textnot"></div>
      <div class="mb-3 contefor">
      
       
        <textarea type="text" class="form-control" name="descripcion" id="notamen" ></textarea>
        <input type="hidden"  name="id" id="notasid" value="">
        
        </div>
        <div class="col-12">
                <button class="botonsub btn btn-primary" type="submit">Guardar</button>
        </div>
    </form>
  </div>
  
</div>
</div>
</div>
<!--  -->
<input type="hidden"  name="idurl" id="urlpage" value="<?php echo URLROOT; ?>">
</body>

<?php require APPROOT . '/views/inc/footer.php'; ?>


/* Swal.fire=(conten)=>{
    let{title, showClass, hideClass}=conten;
}
Swal.fire({
    title: 'Custom animation with Animate.css'
   
  }); */

/* let formnota=document.querySelector('.formnota');

const agregaNota= document.querySelector('.agrega');
agregaNota.addEventListener('click', ()=>{
  
    $('#agregar-nota').modal('show');
    
   
}) */ 

urlpage=document.querySelector('#urlpage').value;
console.log(urlpage)
  

const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
       console.log(xhr.responseText);

      } else {
        let message = xhr.statusText || "Ocurrió un error";
        error(`Error ${xhr.status}: ${message}`);
      }
    });

    xhr.open(method || "GET", url, true);
    //xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //let date= new FormData(data);
    xhr.send((data));
  }
  
  let formnota=document.querySelector('.formnota');
  console.log(formnota)
formnota.addEventListener("submit", (e) =>{
    e.preventDefault();
    let descripcion=document.getElementById('viwid').value;
    console.log(descripcion)
    if(descripcion==""){
        Swal.fire({
            title: 'Los campos son obligatorios',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        return false
    }
    let request = new XMLHttpRequest();
    let ajaxurl=urlpage+"/pages/viwnota";
    let formdata=new FormData(formnota);
    console.log(formdata)
    request.open('POST',ajaxurl,true);
    request.send(formdata);
    request.onreadystatechange = function() {
        if(request.readyState==4&&request.status==200){
 /*  $('.prunota').load('http://localhost:8080/todolist'); */
 let objData=JSON.parse(request.responseText);
 if(objData.status){
    $('#agregar-nota').modal('hide');

 /*  Swal.fire({
      title: `${objData.msg}`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }) */
    window.location.reload()
   

    $('.formnota').trigger("reset"); 
   
    
     /* location.reload('.con-note'); */

 }

        }
      
       };
        
    
});

document.addEventListener('DOMContentLoaded', ()=>{
    
    notlist();
    antr();
    function notlist(){
        const ajaur=`${urlpage}/pages/getnota`;
        const rqs=(window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        rqs.open("GET",ajaur,true);
        rqs.send();
        rqs.onreadystatechange = function(){
            if(rqs.readyState == 4 && rqs.status == 200){
                 const conte=document.querySelector('.con-note');
                conte.innerHTML=rqs.responseText; 
                
                
              

               



                /* ---------Form eliminar---- */
               let elimtr=document.querySelectorAll('#formedt');
               let btneli=document.querySelectorAll('.cerrar');
               elimtr.forEach((frme,i)=>{
                frme.addEventListener('submit',(e)=>{
                e.preventDefault();
                
                /* btneli[i].style.backgroundColor = "red"; */
                    
                  
                let ideart=document.querySelectorAll('.context');
                  document.querySelectorAll('#notaside')[i].value=ideart[i].getAttribute('atr');
                  
                  console.log(ideart[i].getAttribute('atr'))
                  
                  
                    
                    
                    let reqes = new XMLHttpRequest();
                    let deleturl=`${urlpage}/pages/deletbtn`;
                    let fodata=new FormData(frme);
                    reqes.open('POST',deleturl,true);
                   
                    reqes.send(fodata);
                    reqes.onreadystatechange = function() {
                      if(reqes.readyState==4&&reqes.status==200){
     
                        let objDa=JSON.parse(reqes.responseText);
                        
                        if(objDa.status){

                          /* let idear=document.getElementById(`${ideart[i].getAttribute('atr')}`); */
                          let idear=document.querySelectorAll('.prunota');
                          idear[i].style.display="none";
                          
                        }
                        
                          
                      }
                    }
                




                  })

                 
                })

           /*     let eliminarn= document.querySelectorAll('.cerrar')[i].addEventListener('click',()=>{
                   
                document.querySelector('#notaside').value=colro[i].getAttribute('atr');
                const formedi=document.querySelector('.editaform');
                formedi.addEventListener("submit", (e) =>{
                    e.preventDefault();
                    
                    let reqes = new XMLHttpRequest();
                    let deleturl=`http://localhost:8080/todolist/home/deletbtn/`;
                    let fodata=new FormData(formedi);
                    reqes.open('POST',deleturl,true);
                   
                    reqes.send(fodata);
                    reqes.onreadystatechange = function() {
                      if(reqes.readyState==4&&reqes.status==200){
     
                        let objDa=JSON.parse(reqes.responseText);
                        
                        if(objDa.status){
                         
                          colro[i].style.display="none";
                          
                        }
                        
                          
                      }
                    }
                })
                 }) */



               
            }
         }

    }
    function antr(){
    
        const ajaur=`${urlpage}/pages/rolnota`;
        const rqs=(window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        rqs.open("GET",ajaur,true);
        rqs.send();
        rqs.onreadystatechange = function(){
            if(rqs.readyState == 4 && rqs.status == 200){
                 const conte=document.querySelector('.btnpag');
                conte.innerHTML=rqs.responseText; 
    
                let bon=document.querySelectorAll('.botonpage');
               document.querySelectorAll('.botonpage').forEach((el,i)=>{
                    el.addEventListener('click', ()=>{
    
                        bon.forEach(ele=>{
                            
                           ele.classList.remove('active');
                        })
    
                        bon[i].classList.add('active');
                         let pagnumero =el.getAttribute('dato');
                        
                        const ajau=`${urlpage}/pages/getnota/${pagnumero}`;
                        const res=(window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                        res.open("GET",ajau,true);
                        res.send();
                        res.onreadystatechange = function(){
                            const cont=document.querySelector('.con-note');
                            cont.innerHTML=res.responseText;


                            let elimtr=document.querySelectorAll('#formedt');
                            let btneli=document.querySelectorAll('.cerrar');
                            elimtr.forEach((frme,i)=>{
                             frme.addEventListener('submit',(e)=>{
                             e.preventDefault();
                             
                             /* btneli[i].style.backgroundColor = "red"; */
                                 
                               let ideart=document.querySelectorAll('.context');
                               
                               document.querySelectorAll('#notaside')[i].value=ideart[i].getAttribute('atr');
                               
                               console.log(ideart[i].getAttribute('atr'))
                               
                               
                                 
                                 
                                 let reqes = new XMLHttpRequest();
                                 let deleturl=`${urlpage}/pages/deletbtn`;
                                 let fodata=new FormData(frme);
                                 reqes.open('POST',deleturl,true);
                                
                                 reqes.send(fodata);
                                 reqes.onreadystatechange = function() {
                                   if(reqes.readyState==4&&reqes.status==200){
                  
                                     let objDa=JSON.parse(reqes.responseText);
                                     
                                     if(objDa.status){
             
                                       /* let idear=document.getElementById(`${ideart[i].getAttribute('atr')}`); */
                                       let idear=document.querySelectorAll('.prunota');
                                       idear[i].style.display="none";
                                       
                                     }
                                     
                                       
                                   }
                                 }
                             
             
             
             
             
                               })
             
                              
                             })
                        } 
                    
                    })
                    
                })
                
                
            }
        }
     }
     
       //let agregaNota= document.querySelector('.agrega');
       
     

});




/* window.addEventListener('load',()=>{
  
  
    console.log(document.querySelector('.agrega'))
  
  

},false); */
document.addEventListener('click', (e)=>{
  if(e.target.matches('.agrega')){
    $('#agregar-nota').modal('show'); 
  }
})

document.addEventListener('click', (e)=>{
    if(e.target.matches('.context')){
      
         $('#modalnote').modal('show'); 
         let editno=document.querySelector('.textnot');
         let formcon=document.querySelector('.contefor');
         let btnguardar=document.querySelector('.botonsub');
         editno.style.display="block";
         formcon.style.display="none";
         btnguardar.style.display="none";
         const idnotas =e.target.getAttribute('atr');
        
         
        

          

         const ajaur=`${urlpage}/pages/allUpdateSelect/${idnotas}`;
        const rqs=(window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        rqs.open("GET",ajaur,true);
        rqs.send();
        rqs.onreadystatechange = function(){
            if(rqs.readyState == 4 && rqs.status == 200){
             
                let res=JSON.parse(rqs.responseText);
                
                
                
                
                editno.textContent=res.data.descripcion;

               

                let btnedit=document.querySelector('.editar-nota');
                btnedit.addEventListener('click',(e)=>{
                  btnguardar.style.display="block";
                    editno.style.display="none";
                    formcon.style.display="block";
                    document.querySelector('#notamen').value=res.data.descripcion;
                    document.querySelector('#notasid').value=res.data.idrol;

                    const formedit=document.querySelector('.editaform');
                    
                               console.log(res.data.idnota)
                    formedit.addEventListener("submit", (e) =>{
                      e.preventDefault();
                      let valutext=document.querySelector('#notamen').value;
                      let valuid=document.querySelector('#notasid').value;
                      let req = new XMLHttpRequest();
                      let ajaurl=`${urlpage}/pages/allUpdateSelect`;
                      let fordata=new FormData(formedit);
                        
                      req.open('POST',ajaurl,true);
                      req.send(fordata);
                      req.onreadystatechange = function() {
                        if(req.readyState==4&&req.status==200){
 
                          let objDat=JSON.parse(req.responseText);
                          console.log(objDat.data)
                              if(objDat.status){
                                
                               
                                editno.style.display="block";
                                formcon.style.display="none";
                                btnguardar.style.display="none";
                                editno.textContent=objDat.data;
                                let logid=document.getElementById(`${objDat.id}`);
                               
                                logid.innerHTML=objDat.data; 
                                
                                btnedit.addEventListener('click',()=>{
                                  document.querySelector('#notamen').value=objDat.data;
                                })
                              }
                       }
                      }
                    })
                })
               
                
            }
        }            
    }
   


})

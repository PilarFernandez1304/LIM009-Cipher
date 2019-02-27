
const btnCapcifrar=document.getElementById('btnCapcifrar');
const face1=document.getElementById('face1');
const face2=document.getElementById('face2');
const face3=document.getElementById('face3');

    face1.style.display='';
    face2.style.display='none';
    face3.style.display='none';


    
    btnCapcifrar.addEventListener('click', CapturarCifer);
    function CapturarCifer () {
        const descReceta=document.getElementById('descReceta').value;
        const offset=document.getElementById('offset').value
        const obtenerCipher=cipher.encode(parseInt(offset),descReceta);
    }
    //prueba botoner
    let btn=document.getElementsByClassName('boton');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click",(showlogin)=>{
            face1.style.display='none';
            face2.style.display='';
            face3.style.display='none';
            
        })   
    }
    //fin botones

    // login

    let btn_enter=document.getElementById('btn-enter')
    btn_enter.addEventListener('click',validar)
    function validar(){
        const usuario=document.getElementById('usuario');
        const password=document.getElementById('password');
        if()

        

    }
   


cipher.decode(parseInt(1),'efmzaqjmbs')

//const textReceta= descReceta.toUpperCase();



//VARIABLES
const btnCapcifrar=document.getElementById('btnCapcifrar');
const face1=document.getElementById('face1');
const face2=document.getElementById('face2');
const face3=document.getElementById('face3');
const face4=document.getElementById('face4');

    face1.style.display='';
    face2.style.display='none';
    face3.style.display='none';
    face4.style.display='none';

// EVENTOS 



// envio de formulario
// const formulario=document.querySelector('#formulario');
// const send=document.getElementById('enviar');

// let arrayformPaciente=[];



// let crearFormularios=(offset,fecha,Name,Age,nameMedico,especialidad,
//     descReceta1,cantidad1,indicacion1,
//     descReceta2,cantidad2,indicacion2,
//     descReceta3,cantidad3,indicacion3,
//     descReceta4,cantidad4,indicacion4)=>{
//     let itemFor={
//         offset:offset,
//         fecha:fecha ,
//         Name:Name,
//         Age:Age ,
//         nameMedico:nameMedico ,
//         especialidad:especialidad,
//         descReceta1:descReceta1,
//         cantidad1:cantidad1,
//         indicacion1:indicacion1,
//         descReceta2:descReceta2,
//         cantidad2:cantidad2,
//         indicacion2:indicacion2,
//         descReceta3:descReceta3,
//         cantidad3:cantidad3,
//         indicacion3:indicacion3,
//         descReceta4:descReceta4,
//         cantidad4:cantidad4,
//         indicacion4:indicacion4,

//     }
    

//     arrayformPaciente.push(itemFor);
//     return itemFor;
// }
// let ini=crearFormularios(3,15/14/15,'dely',12);
//     console.log(ini);

//FUNCIONES

    //prueba botoner DE INICIO
    let btn=document.getElementsByClassName('boton');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click",()=>{
            face1.style.display='none';
            face2.style.display='';
            face3.style.display='none';
            face4.style.display='none';
            
        })   
    }
    //fin botones

    // VALIDACION DE USUARIOS EN EL login

    let btn_enter=document.getElementById('btn-enter')
    btn_enter.addEventListener('click',validar)
    function validar(){
        const usuario=document.getElementById('usuario').value;
        const password=document.getElementById('password').value;
        if(usuario =="doctor" && password == 123456 ){
            face2.style.display='none';
            face3.style.display='block';
            face4.style.display='none';
        }else if(usuario=='farmaceutico' && password==123){
            face2.style.display='none';
            face3.style.display='none';
            face4.style.display='block';

        }else{
            alert ('contraseña incorrecta');
        }
        document.getElementById('login-form').reset();
    }
    //FIN VALIDACION

    // CAPTURA EL TEXTO QUE SE VA A CIFRAR
    btnCapcifrar.addEventListener('click', CapturarCifer);
    
    function CapturarCifer () {
        const descReceta=document.getElementById('descReceta1').value;
        const descReceta3=document.getElementById('descReceta3').value;
        const descReceta2=document.getElementById('descReceta2');
        const descReceta4=document.getElementById('descReceta4');
        descReceta2.style.display='none';
        descReceta4.style.display='none';
        const offset=document.getElementById('offset').value
        const obtenerCipher=cipher.encode(parseInt(offset),descReceta);
        const cipher2=cipher.encode(parseInt(offset),descReceta3)
        document.getElementById('descReceta2').innerHTML=obtenerCipher;
        document.getElementById('descReceta4').innerHTML= cipher2;
        descReceta2.style.display='block';
        descReceta4.style.display='block';
        const offsetf=document.getElementById('offsetF');
        offsetf.innerHTML= offset;
        // captuurando y envio de cifrado a farmacia
        const text1=document.getElementById('text1');
        text1.innerHTML=obtenerCipher;

        const text3=document.getElementById('text3');
        text3.innerHTML=cipher2;    
    }
    const btnEnviar=document.getElementById('enviar');
    btnEnviar.addEventListener('click',CapturaMuestra);
    
         
        
        function CapturaMuestra(){
        //captura date
         const fecha=document.getElementById('fecha').value;
         const datef=document.getElementById('DateF');
        // captura name
        const name=document.getElementById('Name').value;
        const NameP=document.getElementById('nameP');
        // captura age
        const age=document.getElementById('Age').value;
        const edadP=document.getElementById('edadP');
        // captura Medico
        const nameMedico=document.getElementById('nameMedico').value;
        const nameDoc = document.getElementById('nameDoc');
        // captura Especialidad
        const especialidad=document.getElementById('especialidad').value;
        const especi_Doc=document.getElementById('especialidad-Doc');
        // captura de subscripcion1
        const cantidad1=document.getElementById('cantidad1').value;
        const txt_subs1=document.getElementById('txt-subs1');
        // captura de indicacion 1
        const indicacion1=document.getElementById('indicacion1').value;
        const txtind2=document.getElementById('txtind2');
        // captura de subscripcion2
        const cantidad3=document.getElementById('cantidad3').value;
        const txt_subs4=document.getElementById('txt-subs4');
        // captura de indicacion 2
        const indicacion3=document.getElementById('indicacion3').value;
        const txt_ind4=document.getElementById('txtind4');

        NameP.innerHTML=name;
        datef.innerHTML=fecha;
        edadP.innerHTML=age;
        nameDoc.innerHTML=nameMedico;
        especi_Doc.innerHTML=especialidad;
        txt_subs1.innerHTML=cantidad1;
        txtind2.innerHTML=indicacion1;
        txt_subs4.innerHTML=cantidad3;
        txt_ind4.innerHTML=indicacion3;
    // funcion que captura los datos y  los envia al formulario de Farmacia
        alert('Los Datos se enviaron Correctamente');
  
    }

    const btnexit=document.getElementById('btn-exit');
    btnexit.addEventListener('click', exit);

    function exit(){
        face3.style.display='none';
        face1.style.display='block';
    }

    const btnDescifrar=document.getElementById('btnDescifrar');
    btnDescifrar.addEventListener('click',CapturaDescifrado);

    function CapturaDescifrado(){

        const text2=document.getElementById('text2').value;
       const text4=document.getElementById('text4').value;
       const offset2 =document.getElementById('offset').value;
       const obtenerDescifrado=cipher.decode(parseInt(offset2),text2) ;
       const obtenerDescifrado2=cipher.decode(parseInt(offset2),text4) ;
        const MostrarDescipher=document.getElementById('MostrarDescipher');
        MostrarDescipher.innerHTML=obtenerDescifrado;
       const text1_1=document.getElementById('text1');
       text1_1.style.display='none';
        MostrarDescipher.style.display='block';
        const MostrarDescipher2=document.getElementById('MostrarDescipher2');
        MostrarDescipher2.innerHTML=obtenerDescifrado2;
        const text3_1=document.getElementById('text3');
        text3_1.style.display='none';
        MostrarDescipher2.style.display='block';


    }

    btn_clean=document.getElementById('clean');
    btn_clean.addEventListener('click',Limpiar);

    function Limpiar(){
        
        document.getElementById('formulario2').reset();
        document.getElementById('fromulario').reset();
    }

    const btn_salir=document.getElementById('Salir');
    btn_salir.addEventListener('click',Salir);
    function Salir(){
        face4.style.display='none';
        face1.style.display='block';
    }

 


   // cipher.decode(parseInt(),"efmzqjmbs");


//const textReceta= descReceta.toUpperCase();

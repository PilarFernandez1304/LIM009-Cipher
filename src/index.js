//VARIABLES
const btnCapcifrar=document.getElementById('btnCapcifrar');
const face1=document.getElementById('face1');
const face2=document.getElementById('face2');
const face3=document.getElementById('face3');
//const face4=document.getElementById('face4');

    face1.style.display='';
    face2.style.display='none';
    face3.style.display='none';
    //face4.style.display='none';

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
            //face4.style.display='none';
            
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
           // face4.style.display='none';
        }else if(usuario=='farmaceutico' && password==123){
            alert('correcto');
            face2.style.display='none';
            face3.style.display='none';
            //face4.style.display='block';

        }else{
            alert ('contraseña incorrecta');
        }
    }
    //FIN VALIDACION

    // CAPTURA EL TEXTO QUE SE VA A CIFRAR
    btnCapcifrar.addEventListener('click', CapturarCifer);
    
    function CapturarCifer () {
        const descReceta=document.getElementById('descReceta1').value;
        const descReceta3=document.getElementById('descReceta3').value;
        const offset=document.getElementById('offset').value
        const obtenerCipher=cipher.encode(parseInt(offset),descReceta);
        const cipher2=cipher.encode(parseInt(offset),descReceta3)
        console.log(obtenerCipher);
        document.getElementById('descReceta2').innerHTML=obtenerCipher;
        document.getElementById('descReceta4').innerHTML= cipher2;

    }



    console.log(cipher.decode(parseInt(1),'efmzaqjmbs'));

//const textReceta= descReceta.toUpperCase();

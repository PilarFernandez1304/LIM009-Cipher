
const btnCapcifrar=document.getElementById('btnCapcifrar');
const btn_consultorio =document.getElementById('btn-consultorio');
const face1=document.getElementById('face1');
const face2=document.getElementById('face2');
const face3=document.getElementById('face3');

    face1.style.display='';
    face2.style.display='none';
    face3.style.display='none';

    btn_consultorio.addEventListener('click',loginDoctor);

    

    btnCapcifrar.addEventListener('click', CapturarCifer);
    function CapturarCifer () {
        const descReceta=document.getElementById('descReceta').value;
        const offset=document.getElementById('offset').value
        const obtenerCipher=cipher.encode(parseInt(offset),descReceta);


    }
cipher.decode(parseInt(1),'efmzaqjmbs')

//const textReceta= descReceta.toUpperCase();

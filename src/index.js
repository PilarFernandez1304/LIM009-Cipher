
const btnCapcifrar=document.getElementById('btnCapcifrar');

btnCapcifrar.addEventListener('click', CapturarCifer)

function CapturarCifer () {
    const descReceta=document.getElementById('descReceta').value;
    const offset=document.getElementById('offset').value
    const obtenerCipher=cipher.encode(offset,descReceta);
}

//const textReceta= descReceta.toUpperCase();

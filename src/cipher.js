window.cipher = {
  encode: (offset,descReceta) => {
    let upperCasedReceta = descReceta.toUpperCase();
    let neword ='';
    let alfa='abcdefghijklmnopkrstuvwxyz'.toLocaleUpperCase();
    //console.log(offset,upperCasedReceta);
    for(let i=0 ; i<upperCasedReceta.length; i++){
      const letteriter=upperCasedReceta[i];
      let pos = alfa.indexOf(letteriter);
      let posActual=(pos+offset)%26;
      const newletra=alfa[posActual];
      console.log(newletra);
      if(letteriter===' '){
        neword+=letteriter;
        //console.log(neword);
        continue;
      }
    }
  },
  decode: (offset,descReceta) => {
    let textCifrado=descReceta.toUpperCase();


    
  }
}
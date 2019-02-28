window.cipher = {
  encode: (offset,descReceta) => {
    let upperCasedReceta = descReceta.toUpperCase();
    let neword='';
    let alfa='abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase();
    for(let i=0 ; i<upperCasedReceta.length; i++){
      const letteriter=upperCasedReceta[i];
      let posicionAlpha = alfa.indexOf(letteriter);
      let posActual=(posicionAlpha+offset)%26;
      let newletra=alfa[posActual];
     
      document.write(newletra);
      
      if(letteriter===' '){
        neword+=letteriter;
        //console.log(neword);
        continue;
      }
    }
    return neword;
  },
  decode: (offset,descReceta) => {
    let textCifrado=descReceta.toUpperCase();
    let neword='';
    let alfa='abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase();
    for (let i = 0; i < textCifrado.length; i++) {
      const textIter = textCifrado[i];
      let posicAlpha = alfa.indexOf(textIter);
      let positNew=(posicAlpha-offset)%26;
      const newletra=alfa[positNew];
      document.write(newletra);      
  }

  return neword; 
  }
}

window.cipher = {
  encode: (offset,descReceta) => {
    let upperCasedReceta = descReceta.toUpperCase();
    //let neword
    let concat='';
    let alfa='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=0 ; i<upperCasedReceta.length; i++){
      const letteriter=upperCasedReceta[i];      
      let posicionAlpha = alfa.indexOf(letteriter);
      let posActual=(posicionAlpha+offset)%26;
      let newletra=alfa[posActual];    

    //  if(letteriter ===' '){
    //     neword+=letteriter;
        
    //     continue;
    //   }
      
     concat+=newletra;
     //return neword;
    }
     return concat ;         
    
  },

 decode: (offset2,text2) => {
    let textCifrado=text2.toUpperCase();
    //let neword
    let concat='';
    let alfa='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < textCifrado.length; i++) {
      const textIter = textCifrado[i];
      let posicAlpha = alfa.indexOf(textIter);
     
      let positNew=(posicAlpha-offset2)%26;
     const newletra=alfa[positNew];

      // if(textIter === -1){
      //   neword+=textIter;
        
      //   continue;
      // }
     concat+=newletra; 
    //return neword;
     
  }

  return concat; 
  
  
  }
}

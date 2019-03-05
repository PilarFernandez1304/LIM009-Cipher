window.cipher = {
  encode: (offset,descReceta) => {
    let upperCasedReceta = descReceta.toUpperCase();
    
    let concat='';
    let alfa='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i=0 ; i<upperCasedReceta.length; i++){
      const letteriter=upperCasedReceta[i];      
      let posicionAlpha = alfa.indexOf(letteriter);
      let posActual=(posicionAlpha+offset)%26;
      let newletra=alfa[posActual];    

     /* if(letteriter ===' '){
        neword+=letteriter;
        
        continue;
      }*/
     concat+=newletra;
    
      
     
    }
    
     return concat ;         
    
  },

 decode: (offset,descReceta) => {
    let textCifrado=descReceta.toUpperCase();
    
    let concat='';
    let alfa='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < textCifrado.length; i++) {
      const textIter = textCifrado[i];
      let posicAlpha = alfa.indexOf(textIter);
      let positNew=(posicAlpha-offset)%26;
      
      const newletra=alfa[positNew];
     
      
     
     concat+=newletra; 
    
     
  }
  
  return concat; 
  
  
  }
}

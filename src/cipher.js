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

 decode: (offsetde,descRecetaDes) => {
    let textCifrado=descRecetaDes.toUpperCase();
    
    let concat='';
    let alfa='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < textCifrado.length; i++) {
      const textIter = textCifrado[i];
      let posicAlpha = alfa.indexOf(textIter);
      let positNew=(posicAlpha-offsetde)%26;
      
      const newletra=alfa[positNew];
      // if(positNew === -1){
       
      //   neword+=positNew;
        
      // continue ;
      // }
      
      
     concat+=newletra; 
    
     
  }
  return concat; 
  
  }
}

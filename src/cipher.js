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
    
    let concat='';
    let alfa='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < textCifrado.length; i++) {
      const textIter = textCifrado[i];
      let posicAlpha = alfa.indexOf(textIter);
      let newOrd=posicAlpha-offset2;
      let positNew=newOrd%26;
     const newletra=alfa[positNew];
      
      if(newOrd < 0){

        let neword=(26+(newOrd))%26;
        let newle=alfa[neword];
        concat+=newle;
        
        continue;
      }
    else
      
     concat+=newletra; 
    
    //return neword;
     
  }
  return concat; 
  
  
  }
}

function abrirCerrar(id, hd){
    let sec = document.getElementById(id);
    let hdr = document.getElementById(hd);
    let div = document.getElementsByTagName('div');
    let h3 = document.getElementsByTagName('h3');
    
    if(sec.className == "activa"){
      sec.className = "inactiva";
      hdr.className = "inactiva";
    } else {   
      for(let x=1,y=0; x<5; x++,y++){
        div[x].className = "inactiva";
        h3[y].className = "inactiva";
      }   
      setTimeout(function(){
        sec.className = "activa";
      },300);
      hdr.className = "activa";
    }
  }
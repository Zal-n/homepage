function jelszoEll(){
   var jelszo = document.getElementById("jelszoDoboz");
   var beirtJelszo = jelszo.value;
   if(beirtJelszo == "0918273645"){
    return true;
   }
   alert("rossz jelszo");
   return false;
  }

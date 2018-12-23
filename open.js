function abrirMenu() {
  var x = document.getElementById("menu-desplegado");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.position="fixed";
    
  } else{
    x.style.display = "none";
  }
} 

function cerrarMenu(){
    x.style.display="none";
}

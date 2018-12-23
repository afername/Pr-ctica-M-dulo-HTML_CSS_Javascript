/*hacer que el header se mantenga fijo al hacer scroll - NO FUNCIONA

window.onscroll = function() { myFunction() };

var header = document.getElementById("mainHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
*/


/*script que oculta o muestra el menú al pulsar el icono"
function

toggleMenu() {
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}

 */

/*funcion que activa y desactiva el input en función de la opción elegida*/

function MostrarOcultar() {

    var x = document.getElementById("conocido").value
    if (x === "otro") {
        

        var myElem = document.getElementById('nuevoInput');
                    
            console.log("has elegido otro")
            var nuevoInput=document.createElement("INPUT");
            var nodo = document.getElementById("divOtro").appendChild(nuevoInput);
            nodo.setAttribute("type", "text");
            nodo.setAttribute("id","nuevoInput")
            document.getElementById("divOtro").style.display = 'block';

    }else{
            var parent = document.getElementById("divOtro");
            parent.style.display='none';
            var child=document.getElementById("nuevoInput")
            parent.removeChild(child)
            console.log("no has elegido otro")
        }
    }

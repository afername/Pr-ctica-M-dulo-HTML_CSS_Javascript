export function setForm() {

    let form = document.querySelector('#formContacto')
    let oContact = {}
    form.addEventListener('submit', enviar)

    function enviar(oEv) {
        console.dir(oEv)
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value 
        oContact.email = document.querySelector('#email').value
        oContact.conocido = document.querySelector('#conocido').value
        oContact.otro = document.querySelector('#nuevoInput').value
        oContact.telefono = document.querySelector('#telefono').value
        oContact.message = document.querySelector('#msg').value
        
        if (oContact.message.length<=150){
            console.log(oContact)
        }else{
            alert("El número de caracteres introducido en el mensaje excede el permitido")
        }
        
    }
}
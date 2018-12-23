export function setMenu() {
    let items_navegacion = document.querySelectorAll(".tablet a")
    let secciones = document.querySelectorAll("section")
    let oOffsets = []
    console.log(items_navegacion)
    console.log(secciones)
    prepararNavegacion()
    window.addEventListener('scroll', changeMenuStyle)


    function prepararNavegacion() {
        secciones.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        console.log(oOffsets)    
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let indiceMenu = 0
        if (pageOffset < oOffsets['#quienSoy']) {
            indiceMenu = 2
        } else if (pageOffset >= oOffsets['#quienSoy'] && pageOffset < oOffsets['#estudios']) {
            indiceMenu = 3
        }else if(pageOffset>= oOffsets['#estudios'] && pageOffset<oOffsets['#experiencia']){
            indiceMenu=4
        }else if(pageOffset>=oOffsets['#experiencia']&& pageOffset<oOffsets['#sobreMi']){
            indiceMenu=5
        }else{
            indiceMenu = 6
        }
        
        items_navegacion.forEach(
            (item) => item.classList.remove('activa')
        )
        items_navegacion[indiceMenu].classList.add('activa')
    }
}   
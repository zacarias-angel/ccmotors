let btnSiguiente = document.getElementById('siguiente');
let btnAnterior = document.getElementById('anterior');
let carrusel = document.querySelector('.Carrusel');
let lista = document.querySelector('.Carrusel .lista');
let sublista = document.querySelector('.Carrusel .sublista');

 btnSiguiente.onclick = function(){
    esconderSlider('siguiente');
 }
 btnAnterior.onclick = function(){
    esconderSlider('anterior');
 }
// btnSiguiente.addEventListener("click",()=>{
//     console.log("click")
    
// })
let timepoCorrido = 1000;
let timepoFuera;
function esconderSlider(tipo){
    let itemSlider = document.querySelectorAll('.Carrusel .lista .item');
    let itemSublista = document.querySelectorAll('.Carrusel .sublista .item')
    if(tipo === 'siguiente'){
        lista.appendChild(itemSlider[0]);
        sublista.appendChild(itemSublista[0])
        carrusel.classList.add('siguiente')
    }else{
        let posicionAnterior = itemSlider.length -1;
        lista.prepend(itemSlider[posicionAnterior]);
        sublista.prepend(itemSublista[posicionAnterior])
        carrusel.classList.add('anterior')
    }

    clearTimeout(timepoFuera);
    timepoFuera = setTimeout(()=>{
        carrusel.classList.remove('siguiente')
        carrusel.classList.remove('anterior')

    },timepoCorrido)

}


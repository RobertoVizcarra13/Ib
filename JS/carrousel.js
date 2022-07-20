const container    = document.querySelector('.container');
const punto = document.querySelectorAll('.punto');

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener('click', ()=>{
        let position= i;
        let operacion = position * -25;

        container.style.transform = `translateX(${ operacion }%)`;

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})
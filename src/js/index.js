const form = document.querySelector('.form');
const inputsRequired = document.querySelectorAll('.required');
const spanRequired = document.querySelectorAll('.span');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validarCampo();
})

function validarCampo(){
    inputsRequired.forEach(function(item, indice){
        if(item.value == '') {
            item.classList.add('no-complete')
            spanRequired[indice].classList.add('visible');

            if(item.classList.contains('complete')){
                item.classList.remove('complete')
            }
            
        } else {
            item.classList.add('complete')
            
            if(item.classList.contains('no-complete')){
                item.classList.remove('no-complete')
                spanRequired[indice].classList.remove('visible')
            }
        }
    });
}


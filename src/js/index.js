const form = document.querySelector('.form');
const inputsRequired = document.querySelectorAll('.required');
const spanRequired = document.querySelectorAll('.span');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateDefault(inputsRequired, 0)
    validateEmail(inputsRequired, 1)
    validateDefault(inputsRequired, 2)
    validateDefault(inputsRequired, 3)
})

const noComplete = (item, index) => {
    item.classList.add('no-complete')
    spanRequired[index].classList.add('visible');

    if(item.classList.contains('complete')){
        item.classList.remove('complete')
    }
}

const complete = (item, index) => {
    item.classList.add('complete')
                
    if(item.classList.contains('no-complete')){
        item.classList.remove('no-complete')
        spanRequired[index].classList.remove('visible')
    }
}

function validateDefault(input, index) {
    const item = input[index]

    if(item.value == '') {
        noComplete(item, index)
    } else {
        complete(item, index)
    }
}

function validateEmail(input, index) {
    const item = input[index]
    const re = /\S+@\S+\.\S+/;

    if(item.value == '' || !re.test(item.value)) {
        noComplete(item, index)
    } else {
        complete(item, index)
    }
}


/*
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
*/
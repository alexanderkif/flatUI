
class FormInput {
    constructor(element) {
        element.addEventListener('input', function() {
            if (element.value.length!=0) {
                element.parentElement.getElementsByClassName('form-input__button')[0].remove();
                var button = document.createElement('div');
                button.style.display = 'flex';
                if (element.value.length < element.dataset.min) {
                    button.className = "form-input__button form-input__button_error";
                    button.innerHTML = 'ERROR';
                }
                else {
                    button.className = "form-input__button";
                    button.innerHTML = 'THANKS!';
                }
                element.parentElement.appendChild(button);
            }
            else element.parentElement.getElementsByClassName('form-input__button')[0].style.display = 'none';
        })
    }
}

$('.form-input__text').each((index,element) => new FormInput(element));
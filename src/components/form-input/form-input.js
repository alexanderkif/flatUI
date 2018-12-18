
class FormInput {
    constructor(element) {
        element.addEventListener('input', function() {
            if (element.value.length!=0) {
                if (element.parentElement.getElementsByClassName('form-input__button')[0])
                    element.parentElement.getElementsByClassName('form-input__button')[0].remove();
                var button = document.createElement('div');
                button.style.display = 'flex';
                var re = new RegExp(element.dataset.reg);
                if (re.test(element.value)) {
                    button.className = "form-input__button form-input__button_error";
                    button.innerHTML = element.dataset.success;
                }
                else {
                    button.className = "form-input__button";
                    button.innerHTML = element.dataset.error;
                }
                element.parentElement.appendChild(button);
            }
            else element.parentElement.getElementsByClassName('form-input__button')[0].style.display = 'none';
        });
    }
}

$('.form-input__text').each((index,element) => new FormInput(element));
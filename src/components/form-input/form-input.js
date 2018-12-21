import { bind } from 'decko';

class FormInput {
    constructor(element) {
        this.textDiv = $('.js-form-input__text', element)[0];
        this.buttonDiv = $('.js-form-input__button', element)[0];
        this.reg = this.textDiv.dataset.reg;
        this.success = this.textDiv.dataset.success;
        this.error = this.textDiv.dataset.error;
        element.addEventListener('input', this.checkInput);
    }
    
    @bind
    checkInput() {
        if (this.textDiv.value.length==0) {
            this.buttonDiv.classList.remove("form-input__button_visible");
            return;
        }
        this.buttonDiv.classList.add("form-input__button_visible");
        var regExpToCheck = new RegExp(this.reg);
        if (regExpToCheck.test(this.textDiv.value)) {
            this.buttonDiv.classList.remove("form-input__button_error");
            this.buttonDiv.innerHTML = this.success;
        }
        else {
            this.buttonDiv.classList.add("form-input__button_error");
            this.buttonDiv.innerHTML = this.error;
        }
    }
}

$('.form-input').each((index,element) => new FormInput(element));

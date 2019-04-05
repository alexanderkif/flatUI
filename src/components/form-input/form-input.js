import { bind } from 'decko';

class FormInput {
    constructor(element) {
        this.textDiv = element.querySelector('.js-form-input__text');
        this.buttonDiv = $('.js-form-input__button', element);
        this.reg = this.textDiv.dataset.reg;
        this.success = this.textDiv.dataset.success;
        this.error = this.textDiv.dataset.error;
        $(element).keyup(this.checkInput);
    }

    @bind
    checkInput() {
        if (this.textDiv.value.length === 0) {
            this.buttonDiv.removeClass('form-input__button_visible');
            return;
        }
        this.buttonDiv.addClass('form-input__button_visible');
        const regExpToCheck = new RegExp(this.reg);
        if (regExpToCheck.test(this.textDiv.value)) {
            this.buttonDiv.removeClass('form-input__button_error').html(this.success);
        } else {
            this.buttonDiv.addClass('form-input__button_error').html(this.error);
        }
    }
}

$('.form-input').each((index, element) => new FormInput(element));

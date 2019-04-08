import { bind } from 'decko';

class FormInput {
    constructor(element) {
        this.textDiv = element.querySelector('.form-input__text');
        this.buttonDiv = $('.form-input__button', element);
        if (this.textDiv.dataset.reg === 'username') {
            this.reg = new RegExp('^([a-zA-Z_-]){3,10}$');
        }
        if (this.textDiv.dataset.reg === 'email') {
            this.reg = new RegExp("^(([^<>()[\\]\\\\.,;:\\s@\\']+(\\.[^<>()[\\]\\\\.,;:\\s@\\']+)*)|(\\'.+\\'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
        }
        this.success = this.textDiv.dataset.success;
        this.error = this.textDiv.dataset.error;
        $(element).keyup(this.checkInput);
    }

    @bind
    checkInput() {
        if (this.textDiv.value.length === 0) {
            this.buttonDiv.removeClass('js-form-input__button_visible');
            return;
        }
        this.buttonDiv.addClass('js-form-input__button_visible');
        const regExpToCheck = new RegExp(this.reg);
        if (regExpToCheck.test(this.textDiv.value)) {
            this.buttonDiv.removeClass('js-form-input__button_error').html(this.success);
        } else {
            this.buttonDiv.addClass('js-form-input__button_error').html(this.error);
        }
    }
}

$('.form-input').each((index, element) => new FormInput(element));

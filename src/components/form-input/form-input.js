
class FormInput {
    constructor(element) {
        this.reg = element.dataset.reg;
        this.success = element.dataset.success;
        this.error = element.dataset.error;
        this.textDiv = element.parentElement.getElementsByClassName('form-input__text')[0];
        this.buttonDiv = element.parentElement.getElementsByClassName('form-input__button')[0];

        element.addEventListener('input', function() {
            if (this.textDiv.value.length==0) {
                this.buttonDiv.style.display = 'none';
                return;
            }
            this.buttonDiv.style.display = 'flex';
            FormInput.check(this);
        }.bind(this));
    }

    static check(formInput) {
        var re = new RegExp(formInput.reg);
        if (re.test(formInput.textDiv.value)) {
            formInput.buttonDiv.classList.remove("form-input__button_error");
            formInput.buttonDiv.innerHTML = formInput.success;
        }
        else {
            formInput.buttonDiv.classList.add("form-input__button_error");
            formInput.buttonDiv.innerHTML = formInput.error;
        }
    }
}

$('.form-input__text').each((index,element) => new FormInput(element));

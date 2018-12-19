
class FormInput {
    constructor(element) {
        this.reg = element.dataset.reg;
        this.success = element.dataset.success;
        this.error = element.dataset.error;
        this.buttonDiv = element.parentElement.getElementsByClassName('form-input__button')[0];
    }

    check(value) {
        var re = new RegExp(this.reg);
        if (re.test(value)) {
            this.buttonDiv.classList.remove("form-input__button_error");
            this.buttonDiv.innerHTML = this.success;
        }
        else {
            this.buttonDiv.classList.add("form-input__button_error");
            this.buttonDiv.innerHTML = this.error;
        }
    }
}

$('.form-input__text').each((index,element) => {
        let input = new FormInput(element);
        element.addEventListener('input', function() {
            if (this.value.length==0) {
                input.buttonDiv.style.display = 'none';
                return;
            }
            input.buttonDiv.style.display = 'flex';
            input.check(this.value);
        });
    }
);

import { bind } from 'decko';

class Dropdown {
    constructor(element) {
        element.addEventListener('click', this.dropdownMenuClick);        
        window.addEventListener('click', this.clickOutside);
    }

    @bind
    clickOutside() {
        for (let dropdown of $('.dropdown__menu')) dropdown.classList.remove('visible');
    }

    @bind
    dropdownMenuClick () {
        this.menu = $('.dropdown__menu', event.currentTarget)[0];
        this.menu.classList.toggle('visible');
        event.stopPropagation();
        this.menu.addEventListener('click', this.chooseClickValue);
    }

    @bind
    chooseClickValue() {
        if (event.target.firstChild.data) {
            $('.dropdown__input', this.parentElement)[0].value = event.target.firstChild.data;
        }
    }
}

$('.dropdown').each((index,element) => new Dropdown(element));

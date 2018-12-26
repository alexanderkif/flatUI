import { bind } from 'decko';

class Dropdown {
    constructor(element) {
        $(element).click(this.dropdownMenuClick);
        $(window).click(this.clickOutside);
    }

    @bind
    clickOutside() {
        for (let dropdown of $('.dropdown__menu')) dropdown.classList.remove('dropdown__menu_visible');
    }

    @bind
    dropdownMenuClick (event) {
        this.menu = $('.dropdown__menu', event.currentTarget)[0];
        this.menu.classList.toggle('dropdown__menu_visible');
        event.stopPropagation();
        $(this.menu).click(this.chooseClickValue);
    }

    @bind
    chooseClickValue(event) {
        if (event.target.firstChild.data) {
            $('.dropdown__input', this.parentElement).val(event.target.firstChild.data);
        }
    }
}

$('.dropdown').each((index,element) => new Dropdown(element));

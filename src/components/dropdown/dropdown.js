import { bind } from 'decko';

class Dropdown {
    constructor(element) {
        $(element).click(this.dropdownMenuClick);
        $(window).click(this.clickOutside);
    }

    // eslint-disable-next-line class-methods-use-this
    clickOutside() {
        $('.dropdown__menu').removeClass('js-dropdown__menu_visible');
    }

    @bind
    dropdownMenuClick(event) {
        $('.dropdown__menu', event.currentTarget).toggleClass('js-dropdown__menu_visible').click(this.chooseClickValue);
        event.stopPropagation();
    }

    @bind
    chooseClickValue(event) {
        if (event.target.firstChild.data) { $('.dropdown__input', this.parentElement).val(event.target.firstChild.data); }
    }
}

$('.dropdown').each((index, element) => new Dropdown(element));

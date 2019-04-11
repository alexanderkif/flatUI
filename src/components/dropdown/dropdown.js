import { bind } from 'decko';

class Dropdown {
    constructor(element) {
        $(element).click(this.dropdownMenuClick);
        $(window).click(this.clickOutside);
    }

    // eslint-disable-next-line class-methods-use-this
    clickOutside() {
        $('.js-dropdown__menu').removeClass('dropdown__menu_visible');
    }

    @bind
    dropdownMenuClick(event) {
        $('.js-dropdown__menu', event.currentTarget).toggleClass('dropdown__menu_visible').click(this.chooseClickValue);
        event.stopPropagation();
    }

    @bind
    chooseClickValue(event) {
        if (event.target.firstChild.data) {
            $('.js-dropdown__input', this.parentElement).val(event.target.firstChild.data);
        }
    }
}

$('.js-dropdown').each((index, element) => new Dropdown(element));

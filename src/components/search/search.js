import { bind } from 'decko';

class SearchInput {
    constructor(element) {
        this.input = $('.search__input', element);
        this.tmp = "";
        this.input.click(this.searchInputClick);
        $('.search__button', element).click(this.searchInputNotFound);
    }

    @bind
    searchInputClick() {
        this.input.removeClass('search__input_not-found');
        this.input.val(this.tmp);
    }

    @bind
    searchInputNotFound() {
        this.input.addClass('search__input_not-found');
        this.tmp = this.input[0].value;
        this.input.val(this.input[0].dataset.error);
    }
}

$('.search').each((index,element) => new SearchInput(element));
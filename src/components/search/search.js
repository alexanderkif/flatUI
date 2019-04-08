import { bind } from 'decko';

class SearchInput {
    constructor(element) {
        this.input = $('.search__input', element);
        this.tmp = '';
        this.input.click(this.searchInputClick);
        $('.search__button', element).click(this.searchInputNotFound);
    }

    @bind
    searchInputClick() {
        this.input.removeClass('js-search__input_not-found').val(this.tmp);
    }

    @bind
    searchInputNotFound() {
        this.tmp = this.input.val();
        this.input.addClass('js-search__input_not-found').val(this.input[0].dataset.error);
    }
}

$('.search').each((index, element) => new SearchInput(element));

import { bind } from 'decko';

class SearchInput {
    constructor(element) {
        this.$input = $('.js-search__input', element);
        this.tmp = '';
        this.$input.click(this.searchInputClick);
        $('.js-search__button', element).click(this.searchInputNotFound);
    }

    @bind
    searchInputClick() {
        this.$input.removeClass('search__input_not-found').val(this.tmp);
    }

    @bind
    searchInputNotFound() {
        this.tmp = this.$input.val();
        this.$input.addClass('search__input_not-found').val(this.$input[0].dataset.error);
    }
}

$('.js-search').each((index, element) => new SearchInput(element));

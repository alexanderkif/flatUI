import { bind } from 'decko';

class SearchInput {
    constructor(element) {
        this.input = $('.search__input', element)[0];
        this.tmp = "";
        this.input.addEventListener('click', this.searchInputClick);
        $('.search__button', element)[0].addEventListener('click', this.searchInputNotFound);
    }

    @bind
    searchInputClick() {
        this.input.classList.remove('search__input_not-found');
        this.input.value = this.tmp;
    }

    @bind
    searchInputNotFound() {
        this.input.classList.add('search__input_not-found');
        this.tmp = this.input.value;
        this.input.value = this.input.dataset.error;
    }
}

$('.search').each((index,element) => new SearchInput(element));
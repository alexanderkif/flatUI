
class SearchInput {
    constructor(element) {
        var tmp = "";
        element.addEventListener('click', function() {
            element.classList.remove('search__input_not-found');
            element.value = tmp;
        });
        element.parentElement.getElementsByClassName('search__button')[0].addEventListener('click', function() {
            element.classList.add('search__input_not-found');
            tmp = element.value;
            element.value = element.dataset.error;
        });
    }
}

$('.search__input').each((index,element) => new SearchInput(element));
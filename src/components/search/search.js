
var searches = document.getElementsByClassName('search__input');

[].forEach.call(searches, function(element) {
    var tmp = "";
    element.addEventListener('click', function() {
        element.classList.remove('search__input_not-found');
        element.value = tmp;
    })
    element.parentElement.getElementsByClassName('search__button')[0].addEventListener('click', function() {
        element.classList.add('search__input_not-found');
        tmp = element.value;
        element.value = "I've not found what I'm looking for...";
    })
});
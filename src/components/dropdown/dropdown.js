
class Dropdown {
    constructor(element) {
        element.addEventListener('click', function () {
            var dropdown = event.currentTarget.getElementsByClassName('dropdown__menu')[0];
            dropdown.classList.toggle('visible');
            event.stopPropagation();
            dropdown.addEventListener('click', function() {
                if (event.target.firstChild.data) {
                    dropdown.parentElement.getElementsByClassName('dropdown__input')[0].value = event.target.firstChild.data;
                }
            });
        });
    }
}

$('.dropdown').each((index,element) => new Dropdown(element));

window.addEventListener('click', function() {
    var dropdowns = document.getElementsByClassName("dropdown__menu");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('visible');
    }
});
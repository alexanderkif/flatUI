dropdownOpen = function () {
    var dropdown = event.currentTarget.getElementsByClassName('dropdown__menu')[0];
    dropdown.classList.toggle('visible');
    event.stopPropagation();
}

window.addEventListener('click', function() {
    var dropdowns = document.getElementsByClassName("dropdown__menu");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('visible');
    }
})
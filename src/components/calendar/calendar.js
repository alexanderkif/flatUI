
var mydatepickers = document.getElementsByClassName('mydatepicker');

[].forEach.call(mydatepickers, function(mydatepicker) {

    $(mydatepicker).datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        showButtonPanel: true,
        showYear: false,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        onSelect: function () {
            var day = this.parentElement.getElementsByClassName('calendar__date')[0];
            day.innerHTML = parseInt($(this).val().split('/')[1]);
        }
    })
    
});
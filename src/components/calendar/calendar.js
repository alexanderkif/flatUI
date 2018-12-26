
$.datepicker._gotoToday = function(id) {
    var target = jQuery(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
            inst.selectedDay = inst.currentDay;
            inst.drawMonth = inst.selectedMonth = inst.currentMonth;
            inst.drawYear = inst.selectedYear = inst.currentYear;
    }
    else {
            var date = new Date();
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            this._setDateDatepicker(target, date);
            this._selectDate(id, this._getDateDatepicker(target));
    }
    this._notifyChange(inst);
    this._adjustDate(target);
};

class Calendar {
    constructor(mydatepicker) {
        $(mydatepicker).datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            showButtonPanel: true,
            showYear: false,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            onSelect: function () {
                var day = $('.calendar__date', this.parentElement)[0];
                day.innerHTML = parseInt($(this).val().split('/')[1]);
            },
            onChangeMonthYear: function(y, m, i){                                
                var d = i.selectedDay;
                $(this).datepicker('setDate', new Date(y, m - 1, d));
            }
        }).datepicker("setDate", `${mydatepicker.dataset.month}/${mydatepicker.dataset.date}/${mydatepicker.dataset.year}`);
    }
}

$('.mydatepicker').each((index,element) => new Calendar(element));

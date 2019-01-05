
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

import { bind } from 'decko';
class Calendar {
    constructor(mydatepicker) {
        this.mdpicker = $(mydatepicker);
        this.mdpicker.datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            showButtonPanel: true,
            showYear: false,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            onSelect: this.setDay,
            onChangeMonthYear: this.changeMonthHoldDay
        }).datepicker("setDate", `${mydatepicker.dataset.month}/${mydatepicker.dataset.date}/${mydatepicker.dataset.year}`);
        this.prevDiv = document.createElement("img");
        this.prevDiv.className = "ui-datepicker-prev-corner";
        this.prevDiv.setAttribute("src", "img/arrow.png");
        this.nextDiv = document.createElement("img");
        this.nextDiv.className = "ui-datepicker-next-corner";
        this.nextDiv.setAttribute("src", "img/arrow.png");
        this.drawArrows();
    }

    @bind
    drawArrows() {
        $('.ui-datepicker-prev', this.mdpicker).append(this.prevDiv);
        $('.ui-datepicker-next', this.mdpicker).append(this.nextDiv);
    }

    @bind
    setDay(e) {
        $('.calendar__date', this.parentElement).html(parseInt(e.split('/')[1]));
        setTimeout(this.drawArrows, 100);
    }

    @bind
    changeMonthHoldDay(y, m, i){
        this.mdpicker.datepicker('setDate', new Date(y, m - 1, i.selectedDay));
        setTimeout(this.drawArrows, 100);
    }
}

$('.mydatepicker').each((index,element) => new Calendar(element));

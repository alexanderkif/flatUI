/* eslint-disable no-underscore-dangle */
import { bind } from 'decko';

$.datepicker._gotoToday = function (id) {
    const target = jQuery(id);
    const inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.currentMonth;
        inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.currentYear;
        inst.selectedYear = inst.currentYear;
    } else {
        const date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = date.getMonth();
        inst.selectedMonth = date.getMonth();
        inst.drawYear = date.getFullYear();
        inst.selectedYear = date.getFullYear();
        this._setDateDatepicker(target, date);
        this._selectDate(id, this._getDateDatepicker(target));
    }
    this._notifyChange(inst);
    this._adjustDate(target);
};

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
            onChangeMonthYear: this.changeMonthHoldDay,
        }).datepicker('setDate', `${mydatepicker.dataset.month}/${mydatepicker.dataset.date}/${mydatepicker.dataset.year}`);
    }

    @bind
    setDay(e) {
        $('.calendar__date', this.parentElement).html(parseInt(e.split('/')[1], 10));
    }

    @bind
    changeMonthHoldDay(y, m, i) {
        this.mdpicker.datepicker('setDate', new Date(y, m - 1, i.selectedDay));
    }
}

$('.mydatepicker').each((index, element) => new Calendar(element));

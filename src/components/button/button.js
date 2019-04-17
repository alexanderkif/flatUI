
import { bind } from 'decko';

class RippleButton {
    constructor(button) {
        this.button = button;
        $(button).click(this.clickRipple);
    }

    @bind
    clickRipple(e) {
        const X = e.pageX - this.button.offsetLeft;
        const Y = e.pageY - this.button.offsetTop;
        const rippleDiv = document.createElement('div');
        $(rippleDiv).addClass('ripple').css({ top: `${Y}px`, left: `${X}px` });
        this.button.appendChild(rippleDiv);

        setTimeout(() => {
            rippleDiv.parentElement.removeChild(rippleDiv);
        }, 900);
    }
}

$('.js-btn').each((index, element) => new RippleButton(element));

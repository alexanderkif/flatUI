import { bind } from 'decko';

class RippleButton {
    constructor(button) {
        this.button = button;
        button.addEventListener('click', this.clickRipple);
    }

    @bind
    clickRipple(e) {
        let X = e.pageX - this.button.offsetLeft;
        let Y = e.pageY - this.button.offsetTop;
        let rippleDiv = document.createElement("div");
        rippleDiv.classList.add('ripple');
        rippleDiv.setAttribute("style", `top:${Y}px; left:${X}px;`);
        let customColor = this.button.getAttribute('ripple-color');
        if (customColor) rippleDiv.style.background = customColor;
        this.button.appendChild(rippleDiv);
        
        setTimeout(function(){
            rippleDiv.parentElement.removeChild(rippleDiv);
        }, 900);
    };
}

$('.btn').each((index, element) => new RippleButton(element));
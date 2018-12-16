
class RippleButton {
    constructor(button) {
        button.onclick = function(e){
            let X = e.pageX - this.offsetLeft;
            let Y = e.pageY - this.offsetTop;
            let rippleDiv = document.createElement("div");
            rippleDiv.classList.add('ripple');
            rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
            let customColor = this.getAttribute('ripple-color');
            if (customColor) rippleDiv.style.background = customColor;
            this.appendChild(rippleDiv);
            setTimeout(function(){
                rippleDiv.parentElement.removeChild(rippleDiv);
            }, 900);
        }
    }
}

$('.btn').each((index, element) => new RippleButton(element))
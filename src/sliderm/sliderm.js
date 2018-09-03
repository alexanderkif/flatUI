
var elems = $('.sliderm-body');
[].forEach.call(elems, element => {
    var hint = element.querySelector('.sliderm-hint');
    var hintArrow = element.querySelector('.sliderm-hint-arrow');
    var point = element.querySelector('.sliderm-point');
    var lineActive = element.querySelector('.sliderm-line-active');
    var line = element.querySelector('.sliderm-line');
    var value = element.querySelector('.sliderm-value').textContent;
    var scale = element.querySelector('.sliderm-scale');
    var min = element.querySelector('.sliderm-min').textContent;
    var max = element.querySelector('.sliderm-max').textContent;
    var step = element.querySelector('.sliderm-step').textContent;
    var intervals = element.querySelector('.sliderm-intervals').textContent;
    var text = element.querySelector('.sliderm-hint-text');
    
    for(var i = 0; i <= intervals; i++) {
        var digit = document.createElement('div');
        digit.innerHTML = Math.round(+min + (max-min)*i/intervals);
        scale.appendChild(digit);
        if (i==intervals) {
            scale.style.width = scale.offsetWidth + digit.offsetWidth + "px";
        }
    }
    

    var draw = function() {
        lineActive.style.width = element.clientWidth*(value-min)/(max-min);
        point.style.left = element.clientWidth*(value-min)/(max-min) - point.clientWidth/2;
        text.innerHTML = Math.round(value);
        
        hintArrow.style.top = (hint.clientHeight - hintArrow.clientHeight/2) + "px";
        hintArrow.style.left = (hint.clientWidth/2 - hintArrow.clientHeight/2) + "px";
        hint.style.top = - hint.clientHeight - Math.sqrt(hintArrow.clientHeight*hintArrow.clientHeight/2) - 3 + "px";
        hint.style.left = point.clientWidth/2 - hint.clientWidth/2 + "px";
    };
    
    draw();

    line.onmousedown = function(e) {
        var lineCoords = getCoords(line);
        var shiftX = e.pageX - lineCoords.left;
        value = +min + (shiftX/element.clientWidth)*(max-min);
        draw();

        var pointCoords = getCoords(point);
        shiftX = e.pageX - pointCoords.left;
        var elementCoords = getCoords(element);

        document.onmousemove = function(e) {
            var newLeft = e.pageX - shiftX - elementCoords.left;
            
            if (newLeft < -point.clientWidth/2) {
            newLeft = -point.clientWidth/2;
            }
            var rightEdge = element.offsetWidth - point.offsetWidth + point.clientWidth/2;
            if (newLeft > rightEdge) {
            newLeft = rightEdge;
            }

            value = +min + (newLeft + point.clientWidth/2)*(max-min)/element.clientWidth;
            draw();
        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };

        return false; // disable selection start (cursor change)
    };

    line.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
});

var elems = $('.sliderm');
[].forEach.call(elems, element => {

    var hint;
    var hintArrow;
    var point;
    var lineActive;
    var line;
    var value;
    var scale;
    var min;
    var max;
    var step;
    var intervals;
    var text;
    var inputs;
    var tickHint;
    var tickScale;

    var getInputs = function() {
        hint = element.querySelector('.sliderm-hint');
        hintArrow = element.querySelector('.sliderm-hint-arrow');
        point = element.querySelector('.sliderm-point');
        lineActive = element.querySelector('.sliderm-line-active');
        line = element.querySelector('.sliderm-line');
        value = element.querySelector('.sliderm-value').value;
        scale = element.querySelector('.sliderm-scale');
        min = element.querySelector('.sliderm-min').value;
        max = element.querySelector('.sliderm-max').value;
        step = element.querySelector('.sliderm-step').value;
        intervals = element.querySelector('.sliderm-intervals').value;
        text = element.querySelector('.sliderm-hint-text');
        inputs = element.querySelector('.inputs');
        tickHint = element.getElementsByClassName("tick-hint")[0];
        tickScale = element.getElementsByClassName('tick-scale')[0];
    }
    
    getInputs();
    
    var createScale = function() {
        while (scale.firstChild) {
            scale.removeChild(scale.firstChild);
        }
        scale.style.width = '100%';
        for(var i = 0; i <= intervals; i++) {
            var digit = document.createElement('div');
            digit.innerHTML = Math.round(+min + (max-min)*i/intervals);
            scale.appendChild(digit);
            if (i==intervals) {
                scale.style.width = scale.offsetWidth + digit.offsetWidth + "px";
            }
        }
    }

    createScale();

    var draw = function() {
        lineActive.style.width = element.clientWidth*(value-min)/(max-min);
        point.style.left = element.clientWidth*(value-min)/(max-min) - point.clientWidth/2;
        text.innerHTML = step * Math.round(value / step);
        
        hintArrow.style.top = (hint.clientHeight - hintArrow.clientHeight/2) + "px";
        hintArrow.style.left = (hint.clientWidth/2 - hintArrow.clientHeight/2) + "px";
        hint.style.top = - hint.clientHeight - Math.sqrt(hintArrow.clientHeight*hintArrow.clientHeight/2) - 3 + "px";
        hint.style.left = point.clientWidth/2 - hint.clientWidth/2 + "px";
        if(tickHint.classList.contains('active')){
            hint.style.visibility = "visible";
        }else{
            hint.style.visibility = "hidden";
        }
        if(tickScale.classList.contains('active')){
            scale.style.visibility = "visible";
        }else{
            scale.style.visibility = "hidden";
        }
    };
    
    draw();

    line.onmousedown = function(e) {
        var lineCoords = getCoords(line);
        var shiftX = e.pageX - lineCoords.left;
        value = step * Math.round((+min + (shiftX / element.clientWidth) * (max-min)) / step);
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

            value = step * Math.round((+min + (newLeft + point.clientWidth/2) * (max-min) / element.clientWidth) / step);
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
            // top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    inputs.onchange = function() {
        getInputs();
        draw();
        createScale();
    }

    inputs.onclick = function() {        
        draw();
    }
});
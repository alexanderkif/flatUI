
var elems = $('.sliderm');
[].forEach.call(elems, element => {

    var hint;
    var starthint;
    var hintArrow;
    var starthintArrow;
    var point;
    var startpoint;
    var lineActive;
    var line;
    var value;
    var scale;
    var min;
    var max;
    var step;
    var intervals;
    var text;
    var starttext;
    var inputs;
    var tickHint;
    var tickScale;
    var interval;
    var tickInterval;
    var start;

    var getInputs = function() {        
        hint = element.querySelector('.sliderm-hint');
        starthint = element.querySelector('.sliderm-starthint');
        hintArrow = element.querySelector('.sliderm-hint-arrow');
        starthintArrow = element.querySelector('.sliderm-starthint-arrow');
        point = element.querySelector('.sliderm-point');
        startpoint = element.querySelector('.sliderm-startpoint');
        lineActive = element.querySelector('.sliderm-line-active');
        line = element.querySelector('.sliderm-line');
        value = element.querySelector('.sliderm-value').value;
        scale = element.querySelector('.sliderm-scale');
        min = element.querySelector('.sliderm-min').value;
        max = element.querySelector('.sliderm-max').value;
        step = element.querySelector('.sliderm-step').value;
        intervals = element.querySelector('.sliderm-intervals').value;
        start = element.querySelector('.sliderm-start').value;
        text = element.querySelector('.sliderm-hint-text');
        starttext = element.querySelector('.sliderm-starthint-text');
        inputs = element.querySelector('.inputs');
        interval = element.querySelector('.interval');
        tickHint = element.getElementsByClassName('tick-hint')[0];
        tickScale = element.getElementsByClassName('tick-scale')[0];
        tickInterval = element.getElementsByClassName('tick-interval')[0];
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

    var drawHint = function(hint, hintArrow, point) {
        hintArrow.style.top = (hint.clientHeight - hintArrow.clientHeight/2) + "px";
        hintArrow.style.left = (hint.clientWidth/2 - hintArrow.clientHeight/2) + "px";
        hint.style.top = - hint.clientHeight - Math.sqrt(hintArrow.clientHeight*hintArrow.clientHeight/2) - 3 + "px";
        hint.style.left = point.clientWidth/2 - hint.clientWidth/2 + "px";
    }

    var draw = function() {
        
        text.innerHTML = step * Math.round(value / step);
        starttext.innerHTML = step * Math.round(start / step);
        
        drawHint(hint, hintArrow, point);
        drawHint(starthint, starthintArrow, startpoint);       

        if(tickHint.classList.contains('active')){
            hint.style.visibility = "visible";
            starthint.style.visibility = "visible";
        }else{
            hint.style.visibility = "hidden";
            starthint.style.visibility = "hidden";
        }

        if(tickScale.classList.contains('active')){
            scale.style.visibility = "visible";
        }else{
            scale.style.visibility = "hidden";
        }

        if(tickInterval.classList.contains('active')){
            startpoint.style.visibility = "visible";
            if(tickHint.classList.contains('active')) starthint.style.visibility = "visible";
            interval.style.display = "block";
            lineActive.style.left = start + "px";
            lineActive.style.width = element.clientWidth*(value-min)/(max-min) - start + "px";
            point.style.left = element.clientWidth*(value-min)/(max-min) - point.clientWidth/2 - start + "px";
        }else{
            startpoint.style.visibility = "hidden";
            starthint.style.visibility = "hidden";
            interval.style.display = "none";
            lineActive.style.left = 0 + "px";
            lineActive.style.width = element.clientWidth*(value-min)/(max-min) + "px";
            point.style.left = element.clientWidth*(value-min)/(max-min) - point.clientWidth/2 + "px";
        }
    };
    
    draw();

    line.onmousedown = function(e) {
        if (e.buttons==2 && tickInterval.classList.contains('active')
                || !tickInterval.classList.contains('active')) {
            var lineCoords = getCoords(line);
            var shiftX = e.pageX - lineCoords.left;
            value = step * Math.round((+min + (shiftX / element.clientWidth) * (max-min)) / step);
            draw();

            var pointCoords = getCoords(point);
            shiftX = e.pageX - pointCoords.left;
            var elementCoords = getCoords(element);

            document.onmousemove = function(e) {
                var newLeft = e.pageX - shiftX - elementCoords.left;
                console.log();
                if (newLeft < -point.clientWidth/2) {
                newLeft = -point.clientWidth/2;
                }
                var rightEdge = element.offsetWidth - point.offsetWidth + point.clientWidth/2;
                if (newLeft > rightEdge) {
                newLeft = rightEdge;
                }

                value = step * Math.round((+min + (newLeft + point.clientWidth/2) * (max-min) / element.clientWidth) / step);
                
                draw();
            };
        }

        // if (e.buttons==1 && tickInterval.classList.contains('active')) {
        //     var lineCoords = getCoords(line);
        //     var shiftX = e.pageX - lineCoords.left;
        //     start = step * Math.round((+min + (shiftX / element.clientWidth) * (max-min)) / step);
        //     draw();

        //     var startpointCoords = getCoords(startpoint);
        //     shiftX = e.pageX - startpointCoords.left;
        //     var elementCoords = getCoords(element);

        //     document.onmousemove = function(e) {
        //         var newLeft = e.pageX - shiftX - elementCoords.left;
        //         console.log();
        //         if (newLeft < -point.clientWidth/2) {
        //         newLeft = -point.clientWidth/2;
        //         }
        //         var rightEdge = element.offsetWidth - point.offsetWidth + point.clientWidth/2;
        //         if (newLeft > rightEdge) {
        //         newLeft = rightEdge;
        //         }

        //         start = step * Math.round((+min + (newLeft + point.clientWidth/2) * (max-min) / element.clientWidth) / step);
                
        //         draw();
        //     };
        // }

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
    };

    inputs.onclick = function() {        
        draw();
    };

    element.oncontextmenu = function() {
            return false;        
    };
});
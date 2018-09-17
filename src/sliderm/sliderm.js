var elems = document.getElementsByClassName('sliderm');
[].forEach.call(elems, function(element) {
    
    var slbody = element.querySelector('.sliderm-body');
    var hint = element.querySelector('.sliderm-hint');
    var starthint = element.querySelector('.sliderm-starthint');
    var hintArrow = element.querySelector('.sliderm-hint-arrow');
    var starthintArrow = element.querySelector('.sliderm-starthint-arrow');
    var point = element.querySelector('.sliderm-point');
    var startpoint = element.querySelector('.sliderm-startpoint');
    var lineActive = element.querySelector('.sliderm-line-active');
    var line = element.querySelector('.sliderm-line');
    var scale = element.querySelector('.sliderm-scale');
    var text = element.querySelector('.sliderm-hint-text');
    var starttext = element.querySelector('.sliderm-starthint-text');
    var inputs = element.querySelector('.inputs');
    var interval = element.querySelector('.interval');
    var tickHint = element.getElementsByClassName('tick-hint')[0];
    var tickScale = element.getElementsByClassName('tick-scale')[0];
    var tickInterval = element.getElementsByClassName('tick-interval')[0];
    var tickVertical = element.getElementsByClassName('tick-vertical')[0];
    var slidermValue = element.querySelector('.sliderm-value');
    var slidermStart = element.querySelector('.sliderm-start');
    var slidermMin = element.querySelector('.sliderm-min');
    var slidermMax = element.querySelector('.sliderm-max');
    var slidermStep = element.querySelector('.sliderm-step');
    var slidermIntervals = element.querySelector('.sliderm-intervals');
    var value;
    var min;
    var max;
    var step;
    var intervals;
    var start;

    var getInputs = function() {        
        value = slidermValue.value;
        start = slidermStart.value;
        min = slidermMin.value;
        max = slidermMax.value;
        step = slidermStep.value;
        intervals = slidermIntervals.value;
    };
    
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
    };

    createScale();

    var drawHint = function(h, ha, p, text, value) {
        text.innerHTML = slidermValue.value = '' + step * Math.round(value / step);
        
        if (slbody.classList.contains('vertical')) {
            ha.style.top = (h.clientHeight/2 - ha.clientHeight/2) + "px";
            ha.style.left = (h.clientWidth - ha.clientHeight/2) + "px";
            h.style.top = -h.clientWidth/2 - Math.sqrt(ha.clientHeight*ha.clientHeight/2) - p.clientWidth/2 - 3 + "px";
            h.style.left = p.clientHeight/2 - h.clientWidth/2 + "px";
        } else {
            ha.style.top = (h.clientHeight - ha.clientHeight/2) + "px";
            ha.style.left = (h.clientWidth/2 - ha.clientHeight/2) + "px";
            h.style.top = - h.clientHeight - Math.sqrt(ha.clientHeight*ha.clientHeight/2) - 3 + "px";
            h.style.left = p.clientWidth/2 - h.clientWidth/2 + "px";
        }
    };

    var draw = function() {
        
        if (tickHint.classList.contains('active')) {
            hint.style.visibility = "visible";
            starthint.style.visibility = "visible";
        } else {
            hint.style.visibility = "hidden";
            starthint.style.visibility = "hidden";
        }

        if (tickScale.classList.contains('active')) {
            scale.style.visibility = "visible";
        } else {
            scale.style.visibility = "hidden";
        }

        if (tickInterval.classList.contains('active')) {
            startpoint.style.visibility = "visible";
            if (tickHint.classList.contains('active')) starthint.style.visibility = "visible";
            interval.style.display = "inherit";
            var leftpoint = line.clientWidth*(start-min)/(max-min) - startpoint.clientWidth/2;
            var rightpoint = line.clientWidth*(value-min)/(max-min) - point.clientWidth/2;
            lineActive.style.left = leftpoint + startpoint.clientWidth/2 + "px";
            lineActive.style.width = rightpoint - leftpoint + "px";
            startpoint.style.left = leftpoint + "px";
            point.style.left = rightpoint + "px";
        } else {
            startpoint.style.visibility = "hidden";
            starthint.style.visibility = "hidden";
            interval.style.display = "none";
            lineActive.style.left = 0 + "px";
            lineActive.style.width = line.clientWidth*(value-min)/(max-min) + "px";
            point.style.left = line.clientWidth*(value-min)/(max-min) - point.clientWidth/2 + "px";
        }

        if (tickVertical.classList.contains('active')) {
            slbody.classList.add('vertical');
        } else {
            slbody.classList.remove('vertical');
        }
        
        drawHint(hint, hintArrow, point, text, value);
        drawHint(starthint, starthintArrow, startpoint, starttext, start);  
    };

    var checkRange = function() {
        if (+value > +max) value = max;
        if (+value < +min) value = min;
        if (+start < +min) start = min;
    };

    slbody.onmousedown = function(e) {

        var lineCoords = getCoords(line);        
        var shiftX;
        if (slbody.classList.contains('vertical')) shiftX = line.clientWidth + lineCoords.top - e.pageY;
        else shiftX = e.pageX - lineCoords.left;
        var pointCoords;
        var startpointCoords;
        var elementCoords = getCoords(element);

        if (tickInterval.classList.contains('active') && e.buttons==1) {
            
            start = step * Math.round((+min + (shiftX / line.clientWidth) * (max-min)) / step);

            if (+start >= +value) start = value;
            checkRange();
            draw();

            startpointCoords = getCoords(startpoint);
            if (slbody.classList.contains('vertical')) shiftX = e.pageY - startpointCoords.top;
            else shiftX = e.pageX - startpointCoords.left;
            

            document.onmousemove = function(e) {
                var newLeft;
                if (slbody.classList.contains('vertical')) newLeft = elementCoords.top + line.clientWidth - e.pageY;
                else newLeft = e.pageX - shiftX - elementCoords.left;
                if (newLeft < -startpoint.clientWidth/2) newLeft = -startpoint.clientWidth/2;

                start = step * Math.round((+min + (newLeft + startpoint.clientWidth/2) * (max-min) / line.clientWidth) / step);
                
                if (+start >= +value) start = value;
                checkRange();
                draw();
            };
        } else {
            
            value = step * Math.round((+min + (shiftX / line.clientWidth) * (max-min)) / step);

            if (+value <= +start && tickInterval.classList.contains('active')) value = start;
            checkRange();
            draw();

            pointCoords = getCoords(point);
            if (slbody.classList.contains('vertical')) shiftX = e.pageY - pointCoords.top;
            else shiftX = e.pageX - pointCoords.left;
            

            document.onmousemove = function(e) {
                var newLeft;
                if (slbody.classList.contains('vertical')) newLeft = elementCoords.top + line.clientWidth - e.pageY;
                else newLeft = e.pageX - shiftX - elementCoords.left;
                var rightEdge = line.clientWidth - point.clientWidth/2;
                if (newLeft > rightEdge) newLeft = rightEdge;

                value = step * Math.round((+min + (newLeft + point.clientWidth/2) * (max-min) / line.clientWidth) / step);
                
                if (+value <= +start && tickInterval.classList.contains('active')) value = start;
                checkRange();
                draw();
            };
        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };

        return false; // disable selection start (cursor change)
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    slbody.ondragstart = function() {
        return false;
    };

    inputs.addEventListener('change', function() {
        getInputs();
        draw();
        createScale();
    });

    inputs.addEventListener('click', function() {        
        draw();
    });

    slbody.oncontextmenu = function() {
        return false;        
    };

    setTimeout(function(){
        draw();
    }, 1000);
});
var classSliderm2 = 'sliderm2';

var Line = function(min, max) {
    this.min = min;
    this.max = max;
    this.range = max - min;
};

var DrawLine = function(div, pointHeight, lineHeight, tickVertical, slidermVerticalSize) {
    Sliderm2ClassRemove(div, 'sliderm2line');
    var lineDiv = document.createElement("div");
    lineDiv.className = "sliderm2line";
    lineDiv.style.height = lineHeight + 'px';
    lineDiv.style.width = '100%';
    lineDiv.style.borderRadius = lineHeight / 2 + 'px';
    var sliderm2body = div.getElementsByClassName('sliderm2body')[0];
    sliderm2body.appendChild(lineDiv);    
    sliderm2body.style.position = 'relative';
    sliderm2body.style.display = 'block';
    sliderm2body.style.margin = '0px auto';
    sliderm2body.style.userSelect = 'none';
    sliderm2body.style.height = pointHeight/2 + lineHeight/2 + 20 + 'px';
    if (tickVertical.classList.contains('active')) {
        sliderm2body.style.width = slidermVerticalSize+'px';
        sliderm2body.style.transform = 'rotate(-90deg) translateX('+ -slidermVerticalSize/2+'px)';
        sliderm2body.style.marginBottom = slidermVerticalSize+'px';
    } else {
        sliderm2body.style.width = '100%';
        sliderm2body.style.transform = 'rotate(0deg)';
        sliderm2body.style.marginBottom = '0px';
    }
    return lineDiv;
};

var Range = function(value1, value2, line) {
    this.value1 = value1;
    this.value2 = value2;
    this.point1 = new Point(value1, line);
    this.point2 = new Point(value2, line);
};

var DrawRange = function(div, range) {
    Sliderm2ClassRemove(div, 'sliderm2range');
    var rangeDiv = document.createElement("div");
    rangeDiv.className = "sliderm2range";
    rangeDiv.style.height = 'inherit';
    rangeDiv.style.position = 'absolute';
    rangeDiv.style.top = '0';
    rangeDiv.style.left = range.point1.value + '%';
    rangeDiv.style.width = range.point2.value - range.point1.value + '%';
    rangeDiv.style.borderRadius = 'inherit';
    div.appendChild(rangeDiv);
    return rangeDiv;
};

var Point = function(value, line) {
    this.inValue = value;
    this.value = (value - line.min) / line.range * 100;
};

var DrawPoints = function(div, points, pointHeight, tickHint, tickVertical) {
    Sliderm2ClassRemove(div, 'sliderm2point');
    var pointDivs = points.map(function(point) {
        var pointDiv = document.createElement("div");
        pointDiv.className = "sliderm2point";
        pointDiv.style.position = 'absolute';
        pointDiv.style.height = pointDiv.style.width = pointHeight + 'px';
        pointDiv.style.borderRadius = '50%';
        pointDiv.style.top = div.offsetHeight/2 - pointHeight/2 + 'px';
        pointDiv.style.left = 'calc(' + point.value + '% - '+ pointHeight/2 +'px)';
        div.appendChild(pointDiv);
        if (tickHint.classList.contains('active')) point.drawHint = new DrawHint(pointDiv, point, pointHeight, tickVertical);
        return pointDiv;
    });
    return pointDivs;
};

var DrawHint = function(div, point, pointHeight, tickVertical) {
    Sliderm2ClassRemove(div, 'sliderm2hint');
    var hintDiv = document.createElement("div");
    hintDiv.className = "sliderm2hint";
    hintDiv.style.position = 'absolute';
    hintDiv.style.display = 'table-cell';
    hintDiv.style.verticalAlign = 'middle';
    hintDiv.style.width = 'auto';
    hintDiv.style.padding = '2px 8px';
    hintDiv.style.borderRadius = '4px';
    hintDiv.style.textAlign = 'center';
    hintDiv.style.height = pointHeight + 'px';
    hintDiv.style.fontSize = pointHeight*0.9;
    hintDiv.innerHTML = Math.round(point.inValue * 100) / 100;
    div.appendChild(hintDiv);
    
    var arrowDiv = document.createElement("div");
    arrowDiv.className = "sliderm2arrow";    
    arrowDiv.style.position = 'absolute';
    arrowDiv.style.content = '';
    arrowDiv.style.transform = 'rotate(-45deg)';
    arrowDiv.style.zIndex = '-1';
    arrowDiv.style.height = pointHeight/3 + 'px';
    arrowDiv.style.width = pointHeight/3 + 'px';
    hintDiv.appendChild(arrowDiv);

    if (tickVertical.classList.contains('active')) {
        hintDiv.style.transform = 'rotate(90deg) translateX('+ 0+'px)';
        hintDiv.style.top = - pointHeight - hintDiv.offsetWidth/2 + 'px';
        hintDiv.style.left = pointHeight/2 - hintDiv.offsetWidth/2 + 'px';
        arrowDiv.style.top = hintDiv.offsetHeight/2 - arrowDiv.offsetHeight/2 + 'px';
        arrowDiv.style.left = hintDiv.offsetWidth - arrowDiv.offsetWidth/2 + 'px';
    } else {
        hintDiv.style.transform = 'rotate(0deg)';
        hintDiv.style.top = - pointHeight*3/2 + 'px';
        hintDiv.style.left = pointHeight/2 - hintDiv.offsetWidth/2 + 'px';
        arrowDiv.style.top = hintDiv.offsetHeight - arrowDiv.offsetHeight/2 + 'px';
        arrowDiv.style.left = hintDiv.offsetWidth/2 - arrowDiv.offsetWidth/2 + 'px';
    }
};

var Sliderm2ClassRemove = function(div, removingClass) {
    var elem = div.getElementsByClassName(removingClass)[0];
    while (elem) {
        elem.remove();
        elem = div.getElementsByClassName(removingClass)[0];
    }
};

var createScale = function(div, line, intervals, pointHeight, lineHeight, tickVertical) {
    Sliderm2ClassRemove(div, 'sliderm2scale');
    var scaleDiv = document.createElement("div");
    scaleDiv.className = "sliderm2scale";
    scaleDiv.style.position = 'absolute';
    scaleDiv.style.display = 'flex';
    scaleDiv.style.left = -pointHeight/2 + 'px';
    scaleDiv.style.fontSize = pointHeight * 3 / 5 + 'px';
    scaleDiv.style.justifyContent = 'space-between';
    scaleDiv.style.top = pointHeight/2 + lineHeight/2 + 5 + 'px';
    div.appendChild(scaleDiv);
    scaleDiv.style.width = +div.offsetWidth + +pointHeight + 'px';
    var digit;
    for(var i = 0; i <= intervals; i++) {
        digit = document.createElement('div');
        digit.innerHTML = Math.round( + line.min + line.range * i / intervals);
        if (tickVertical.classList.contains('active'))
        digit.style.transform = 'rotate(90deg)';
        // digit.style.alignSelf = 'flex-start';
        scaleDiv.appendChild(digit);
    }
    scaleDiv.style.height = digit.offsetWidth + 'px';
};

//Controller
var elems2 = document.getElementsByClassName(classSliderm2);
[].forEach.call(elems2, function(element) {
    var sliderm2body = element.querySelector('.sliderm2body');
    var tickHint = element.getElementsByClassName('tick-hint')[0];
    var tickScale = element.getElementsByClassName('tick-scale')[0];
    var tickInterval = element.getElementsByClassName('tick-interval')[0];
    var tickVertical = element.getElementsByClassName('tick-vertical')[0];
    var slidermVerticalSize = element.querySelector('.sliderm-vertical-size');
    var slidermValue2 = element.querySelector('.sliderm-value2');
    var slidermValue1 = element.querySelector('.sliderm-value1');
    var slidermMin = element.querySelector('.sliderm-min');
    var slidermMax = element.querySelector('.sliderm-max');
    var slidermStep = element.querySelector('.sliderm-step');
    var slidermIntervals = element.querySelector('.sliderm-intervals');

    var pointHeight = element.getAttribute('pointSize');
    var lineHeight = element.getAttribute('lineHeight');
    var step = element.getAttribute('step');
    var intervals = element.getAttribute('intervals');

    var line = new Line(element.getAttribute('min'), element.getAttribute('max'));
    var drawLine = new DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize.value);

    var range = new Range(element.getAttribute('value1'), element.getAttribute('value2'), line);
    var drawRange = new DrawRange(drawLine, range);
    

    var drawPoints = new DrawPoints(drawLine, [range.point1, range.point2], pointHeight, tickHint, tickVertical);

    var getInputs = function() {
        line = new Line(slidermMin.value, slidermMax.value);
        range = new Range(slidermValue1.value, slidermValue2.value, line);
        step = slidermStep.value;
        intervals = slidermIntervals.value;
    };

    var setInputs = function() {
        if (tickInterval.classList.contains('active')) 
            slidermValue1.value = Math.round(range.value1 * 100) / 100;
        slidermValue2.value = Math.round(range.value2 * 100) / 100;
        slidermMin.value = line.min;
        slidermMax.value = line.max;
        slidermStep.value = step;
        slidermIntervals.value = intervals;
    };
    
    var inputs = element.querySelector('.inputs');

    inputs.addEventListener('change', function() {
        getInputs();
        draw();
    });

    inputs.addEventListener('click', function() {
        if (tickInterval.classList.contains('active')) 
            range.value1 = +slidermValue1.value < +range.value2 ? slidermValue1.value : range.value2;
        draw();
    });

    sliderm2body.oncontextmenu = function() {
        return false;        
    };

    sliderm2body.ondragstart = function() {
        return false;
    };

    var draw = function() {
        var points = checkRange();
        setInputs();
        drawLine = new DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize.value);
        drawRange = new DrawRange(drawLine, range);        
        drawPoints = new DrawPoints(drawLine, points, pointHeight, tickHint, tickVertical);
        if (tickScale.classList.contains('active')) createScale(sliderm2body, line, intervals, pointHeight, lineHeight, tickVertical);
        else Sliderm2ClassRemove(sliderm2body, 'sliderm2scale');
    };

    var checkRange = function() {
        if (+range.value2 > +line.max) range.value2 = line.max;
        if (+range.value2 < +line.min) range.value2 = line.min;
        if (+range.value1 < +line.min) range.value1 = line.min;
        var points = [];
        if (tickInterval.classList.contains('active')) {
            range = new Range(range.value1, range.value2, line);
            points = [range.point1, range.point2];
        } else {            
            range = new Range(line.min, range.value2, line);
            points = [range.point2];
        }
        return points;
    };

    sliderm2body.addEventListener('mousedown', function(e) {          
        if (tickInterval.classList.contains('active') && 
                getProcent(e) < (range.value2 - line.max * pointHeight/drawLine.clientWidth/2)) {
            range.value1 = getProcent(e);
            if (+range.value1 >= +range.value2) range.value1 = range.value2;
            draw();
            document.onmousemove = function(e) {
                range.value1 = getProcent(e);                
                if (+range.value1 >= +range.value2) range.value1 = range.value2;
                draw();
            };
        } else {            
            range.value2 = getProcent(e);
            if (+range.value2 <= +range.value1 && tickInterval.classList.contains('active')) 
                range.value2 = range.value1;
            draw();
            document.onmousemove = function(e) {
                range.value2 = getProcent(e);                
                if (+range.value2 <= +range.value1 && tickInterval.classList.contains('active')) 
                    range.value2 = range.value1;
                draw();
            };
        }   
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };
        return false; // disable selection start (cursor change)
    });

    function getProcent(e) {
        var lineCoords = getCoords(drawLine);
        if (tickVertical.classList.contains('active'))
            return step * Math.round(( + line.min + (lineCoords.top + drawLine.clientWidth - e.pageY) / drawLine.clientWidth * line.range) / step);
        else
            return step * Math.round(( + line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);
    }

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    draw();

    setTimeout(function(){
        draw();
    }, 1000);
});


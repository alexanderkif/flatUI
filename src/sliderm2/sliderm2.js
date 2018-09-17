var classSliderm2 = 'sliderm2';
var sliderm2LineColor = 'lightgrey';
var sliderm2RangeColor = '#ffbb00';
var sliderm2TextColor = '#ff0000';
var sliderm2Height = 6;
var pointHeight = 20;


var Line = function(min, max) {
    this.min = min;
    this.max = max;
    this.range = max - min;
};

var DrawLine = function(div, line) {
    Sliderm2ClassRemove(div, 'sliderm2line');
    var lineDiv = document.createElement("div");
    lineDiv.className = "sliderm2line";
    lineDiv.style.height = sliderm2Height + 'px';
    lineDiv.style.width = '100%';
    lineDiv.style.backgroundColor = sliderm2LineColor;
    lineDiv.style.borderRadius = sliderm2Height / 2 + 'px';
    var sliderm2body = div.getElementsByClassName('sliderm2body')[0];
    sliderm2body.appendChild(lineDiv);
    sliderm2body.style.height = pointHeight/2 + lineDiv.clientHeight/2 + 20 + 'px';
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
    rangeDiv.style.backgroundColor = sliderm2RangeColor;
    rangeDiv.style.borderRadius = 'inherit';
    div.appendChild(rangeDiv);
    return rangeDiv;
};

var Point = function(value, line) {
    this.value = (value - line.min) / line.range * 100;
};

var DrawPoints = function(div, points) {
    Sliderm2ClassRemove(div, 'sliderm2point');
    var pointDivs = points.map(function(point) {
        var pointDiv = document.createElement("div");
        pointDiv.className = "sliderm2point";
        pointDiv.style.position = 'absolute';
        pointDiv.style.height = pointDiv.style.width = pointHeight + 'px';
        pointDiv.style.borderRadius = '50%';
        pointDiv.style.top = sliderm2Height/2 - pointHeight/2 + 'px';
        pointDiv.style.left = 'calc(' + point.value + '% - '+ pointHeight/2 +'px)';
        pointDiv.style.backgroundColor = sliderm2RangeColor;
        div.appendChild(pointDiv);
        return pointDiv;
    });
    return pointDivs;
};

var Sliderm2ClassRemove = function(div, removingClass) {
    var elem = div.getElementsByClassName(removingClass)[0];
    while (elem) {
        elem.remove();
        elem = div.getElementsByClassName(removingClass)[0];
    }
};

var createScale = function(div, line, drawLine, intervals) {
    Sliderm2ClassRemove(div, 'sliderm2scale')
    var scaleDiv = document.createElement("div");
    scaleDiv.className = "sliderm2scale";
    scaleDiv.style.top = pointHeight/2 + 5 + 'px';
    div.appendChild(scaleDiv);
    scaleDiv.style.width = '100%';
    for(var i = 0; i <= intervals; i++) {
        var digit = document.createElement('div');
        digit.innerHTML = Math.round( + line.min + line.range * i / intervals);
        scaleDiv.appendChild(digit);
    }
};

//Controller
var elems2 = document.getElementsByClassName(classSliderm2);
[].forEach.call(elems2, function(element) {
    var sliderm2body = element.querySelector('.sliderm2body');
    var tickHint = element.getElementsByClassName('tick-hint')[0];
    var tickScale = element.getElementsByClassName('tick-scale')[0];
    var tickInterval = element.getElementsByClassName('tick-interval')[0];
    var tickVertical = element.getElementsByClassName('tick-vertical')[0];
    var slidermValue2 = element.querySelector('.sliderm-value');
    var slidermValue1 = element.querySelector('.sliderm-start');
    var slidermMin = element.querySelector('.sliderm-min');
    var slidermMax = element.querySelector('.sliderm-max');
    var slidermStep = element.querySelector('.sliderm-step');
    var slidermIntervals = element.querySelector('.sliderm-intervals');

    var line = new Line(element.getAttribute('min'), element.getAttribute('max'));
    var drawLine = new DrawLine(element, line);

    var range = new Range(element.getAttribute('value1'), element.getAttribute('value2'), line);
    var drawRange = new DrawRange(drawLine, range);
    
    var step = element.getAttribute('step');
    var intervals = element.getAttribute('intervals');

    var drawPoints = new DrawPoints(drawLine, [range.point1, range.point2]);

    var getInputs = function() {
        line = new Line(slidermMin.value, slidermMax.value);
        range = new Range(slidermValue1.value, slidermValue2.value, line);
        step = slidermStep.value;
        intervals = slidermIntervals.value;
    };

    var setInputs = function() {
        if (tickInterval.classList.contains('active')) slidermValue1.value = range.value1;
        slidermValue2.value = range.value2;
        slidermMin.value = line.min;
        slidermMax.value = line.max;
        slidermStep.value = step;
        slidermIntervals.value = intervals;
    }

    var inputs = element.querySelector('.inputs');

    inputs.addEventListener('change', function() {
        getInputs();
        draw();
    });

    inputs.addEventListener('click', function() {
        if (tickInterval.classList.contains('active')) range.value1 = slidermValue1.value;
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
        drawLine = new DrawLine(element, line);
        drawRange = new DrawRange(drawLine, range);        
        drawPoints = new DrawPoints(drawLine, points);
        if (tickScale.classList.contains('active')) createScale(sliderm2body, line, drawLine, intervals);
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
        var lineCoords = getCoords(drawLine);

        if (tickInterval.classList.contains('active') && e.buttons==1) {
            range.value1 = step * Math.round(( + line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);
            if (+range.value1 >= +range.value2) range.value1 = range.value2;
            draw();
            document.onmousemove = function(e) {
                range.value1 = step * Math.round(( + line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);                
                if (+range.value1 >= +range.value2) range.value1 = range.value2;
                draw();
            };
        } else {            
            range.value2 = step * Math.round(( + line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);
            if (+range.value2 <= +range.value1 && tickInterval.classList.contains('active')) range.value2 = range.value1;
            draw();
            document.onmousemove = function(e) {
                range.value2 = step * Math.round(( + line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);                
                if (+range.value2 <= +range.value1 && tickInterval.classList.contains('active')) range.value2 = range.value1;
                draw();
            };
        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };

        return false; // disable selection start (cursor change)
    });

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    draw();
});


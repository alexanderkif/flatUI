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
        pointDiv.style.left = 'calc(' + point.value + '% - ' +'px)';
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

    // var min = element.getAttribute('min');
    // var max = element.getAttribute('max');
    var line = new Line(element.getAttribute('min'), element.getAttribute('max'));
    var drawLine = new DrawLine(element, line);

    var value1 = element.getAttribute('value1');
    var value2 = element.getAttribute('value2');
    var range = new Range(value1, value2, line);
    var drawRange = new DrawRange(drawLine, range);
    
    var step = element.getAttribute('step');

    var drawPoints = new DrawPoints(drawLine, [range.point1, range.point2]);

    var getInputs = function() {
        line = new Line(slidermMin.value, slidermMax.value);
        range = new Range(slidermValue1.value, slidermValue2.value, line);
        step = slidermStep.value;
        // intervals = slidermIntervals.value;
    };

    var inputs = element.querySelector('.inputs');

    inputs.addEventListener('change', function() {
        getInputs();
        draw();
    });

    var draw = function() {
        checkRange();
        var points = [range.point1, range.point2];
        if (tickInterval.classList.contains('active')) {
            range = new Range(value1, value2, line);
        } else {
            range = new Range(line.min, value2, line);
            points = [range.point2];
        }
        drawLine = new DrawLine(element, line);
        drawRange = new DrawRange(drawLine, range);        
        drawPoints = new DrawPoints(drawLine, points);
    };

    var checkRange = function() {
        if (+value2 > +line.max) value2 = line.max;
        if (+value2 < +line.min) value2 = line.min;
        if (+value1 < +line.min) value1 = line.min;
    };

    sliderm2body.onmousedown = function(e) {
        var lineCoords = getCoords(drawLine);        
        var shiftX;
        if (sliderm2body.classList.contains('vertical')) shiftX = drawLine.clientWidth + lineCoords.top - e.pageY;
        else shiftX = e.pageX - lineCoords.left;
        var elementCoords = getCoords(element);

        if (tickInterval.classList.contains('active') && e.buttons==1) {
            
            value1 = step * Math.round((+line.min + (shiftX / drawLine.clientWidth) * line.range) / step);

            if (+value1 >= +value2) value1 = value2;
            draw();

            document.onmousemove = function(e) {
                var newLeft;
                if (sliderm2body.classList.contains('vertical')) newLeft = elementCoords.top + drawLine.clientWidth - e.pageY;
                else newLeft = e.pageX - lineCoords.left - pointHeight/2;
                if (newLeft < - pointHeight/2) newLeft = - pointHeight/2;

                value1 = step * Math.round((+line.min + (newLeft + pointHeight/2) * line.range / drawLine.clientWidth) / step);
                
                if (+value1 >= +value2) value1 = value2;
                draw();
            };
        } else {
            value2 = step * Math.round((+line.min + (shiftX / drawLine.clientWidth) * line.range) / step);

            if (+value2 <= +value1 && tickInterval.classList.contains('active')) value2 = value1;
            draw();

            document.onmousemove = function(e) {
                var newLeft;
                if (sliderm2body.classList.contains('vertical')) newLeft = elementCoords.top + drawLine.clientWidth - e.pageY;
                else newLeft = e.pageX - lineCoords.left - pointHeight/2;
                var rightEdge = drawLine.clientWidth - pointHeight/2;
                if (newLeft > rightEdge) newLeft = rightEdge;

                value2 = step * Math.round((+line.min + (newLeft + pointHeight/2) * line.range / drawLine.clientWidth) / step);
                
                if (+value2 <= +value1 && tickInterval.classList.contains('active')) value2 = value1;
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
});


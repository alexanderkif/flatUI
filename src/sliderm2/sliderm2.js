var classSliderm2 = 'sliderm2';

var Sliderm2Line = function(min, max) {
    this.min = min;
    this.max = max;
    this.range = max - min;
};

var Sliderm2DrawLine = function(div, pointHeight, lineHeight, tickVertical, slidermVerticalSize, colorLine) {
    Sliderm2ClassRemove(div, 'sliderm2line');
    var lineDiv = document.createElement("div");
    lineDiv.className = "sliderm2line";
    lineDiv.style.height = lineHeight + 'px';
    lineDiv.style.width = '100%';
    lineDiv.style.borderRadius = lineHeight / 2 + 'px';
    lineDiv.style.backgroundColor = colorLine;
    var sliderm2body = div.getElementsByClassName('sliderm2body')[0];
    sliderm2body.appendChild(lineDiv);    
    sliderm2body.style.position = 'relative';
    sliderm2body.style.display = 'block';
    sliderm2body.style.margin = '0px auto';
    sliderm2body.style.userSelect = 'none';
    sliderm2body.style.height = pointHeight/2 + lineHeight/2 + 5 + 'px';
    sliderm2body.style.alignItems = 'center';
    if (tickVertical) {
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

var Sliderm2Range = function(value1, value2, line) {
    this.value1 = value1;
    this.value2 = value2;
    this.point1 = new Sliderm2Point(value1, line);
    this.point2 = new Sliderm2Point(value2, line);
};

var Sliderm2DrawRange = function(div, range, colorPoint) {
    Sliderm2ClassRemove(div, 'sliderm2range');
    var rangeDiv = document.createElement("div");
    rangeDiv.className = "sliderm2range";
    rangeDiv.style.height = 'inherit';
    rangeDiv.style.position = 'absolute';
    rangeDiv.style.top = '0';
    rangeDiv.style.left = range.point1.value + '%';
    rangeDiv.style.width = range.point2.value - range.point1.value + '%';
    rangeDiv.style.borderRadius = 'inherit';
    rangeDiv.style.backgroundColor = colorPoint;
    div.appendChild(rangeDiv);
    return rangeDiv;
};

var Sliderm2Point = function(value, line) {
    this.inValue = value;
    this.value = (value - line.min) / line.range * 100;
};

var Sliderm2DrawPoints = function(div, points, pointHeight, tickHint, tickVertical, colorPoint, colorText) {
    Sliderm2ClassRemove(div, 'sliderm2point');
    var pointDivs = points.map(function(point) {
        var pointDiv = document.createElement("div");
        pointDiv.className = "sliderm2point";
        pointDiv.style.position = 'absolute';
        pointDiv.style.height = pointDiv.style.width = pointHeight + 'px';
        pointDiv.style.borderRadius = '50%';
        pointDiv.style.top = div.offsetHeight/2 - pointHeight/2 + 'px';
        pointDiv.style.left = 'calc(' + point.value + '% - '+ pointHeight/2 +'px)';
        pointDiv.style.backgroundColor = colorPoint;
        div.appendChild(pointDiv);
        if (tickHint) 
            point.drawHint = new Sliderm2DrawHint(pointDiv, point, pointHeight, tickVertical, colorText);
        return pointDiv;
    });
    return pointDivs;
};

var Sliderm2DrawHint = function(div, point, pointHeight, tickVertical, colorText) {
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
    hintDiv.style.backgroundColor = 'inherit';
    hintDiv.style.color = colorText;
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
    arrowDiv.style.backgroundColor = 'inherit';
    hintDiv.appendChild(arrowDiv);

    if (tickVertical) {
        hintDiv.style.transform = 'rotate(90deg) translateX('+ 0+'px)';
        hintDiv.style.top = - pointHeight - hintDiv.offsetWidth/2 + 'px';
        hintDiv.style.left = pointHeight/2 - hintDiv.offsetWidth/2 + 'px';
        arrowDiv.style.top = hintDiv.offsetHeight/2 - arrowDiv.offsetHeight/2 + 'px';
        arrowDiv.style.left = hintDiv.offsetWidth - arrowDiv.offsetWidth/2 - 1 + 'px';
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

var Sliderm2createScale = function(div, line, intervals, pointHeight, lineHeight, tickVertical, colorScale) {
    Sliderm2ClassRemove(div, 'sliderm2scale');
    var scaleDiv = document.createElement("div");
    scaleDiv.className = "sliderm2scale";
    scaleDiv.style.position = 'absolute';
    scaleDiv.style.display = 'flex';
    scaleDiv.style.left = -pointHeight/2 + 'px';
    scaleDiv.style.fontSize = pointHeight * 3 / 5 + 'px';
    scaleDiv.style.justifyContent = 'space-between';
    scaleDiv.style.top = pointHeight/2 + lineHeight/2 + 5 + 'px';
    scaleDiv.style.color = colorScale;
    div.appendChild(scaleDiv);
    scaleDiv.style.width = 'calc(100% + '+ pointHeight +'px)';
    var digit;
    for(var i = 0; i <= intervals; i++) {
        digit = document.createElement('div');
        digit.innerHTML = Math.round( + line.min + line.range * i / intervals);
        if (tickVertical)
        digit.style.transform = 'rotate(90deg)';
        scaleDiv.appendChild(digit);
    }
    div.style.height = digit.offsetHeight + pointHeight/2 + lineHeight/2 + 5 + 'px';
};

//Controller
var elems2 = document.getElementsByClassName(classSliderm2);
[].forEach.call(elems2, function(element) {
    var sliderm2body = element.querySelector('.sliderm2body');
    var tickHint = element.getAttribute('data-hint')=='active';
    var tickScale = element.getAttribute('data-scale')=='active';
    var tickInterval = element.getAttribute('data-interval')=='active';
    var tickVertical = element.getAttribute('data-vertical')=='active';
    var slidermVerticalSize = element.getAttribute('data-verticalSize');
    var slidermValue2 = element.getAttribute('data-value2');
    var slidermValue1 = element.getAttribute('data-value1');
    var slidermMin = element.getAttribute('data-min');
    var slidermMax = element.getAttribute('data-max');

    var pointHeight = element.getAttribute('data-pointSize');
    var lineHeight = element.getAttribute('data-lineHeight');
    var step = element.getAttribute('data-step');
    var intervals = element.getAttribute('data-intervals');
    var colorLine = element.getAttribute('data-colorLine');
    var colorPoint = element.getAttribute('data-colorPoint');
    var colorScale = element.getAttribute('data-colorScale');
    var colorText = element.getAttribute('data-colorText');

    var inputTickHint = element.parentElement.parentElement.getElementsByClassName('tick-hint')[0];
    var inputTickScale = element.parentElement.parentElement.getElementsByClassName('tick-scale')[0];
    var inputTickInterval = element.parentElement.parentElement.getElementsByClassName('tick-interval')[0];
    var inputTickVertical = element.parentElement.parentElement.getElementsByClassName('tick-vertical')[0];
    var inputSlidermVerticalSize = element.parentElement.parentElement.getElementsByClassName('sliderm-vertical-size')[0];
    var inputSlidermValue2 = element.parentElement.parentElement.getElementsByClassName('sliderm-value2')[0];
    var inputSlidermValue1 = element.parentElement.parentElement.getElementsByClassName('sliderm-value1')[0];
    var inputSlidermMin = element.parentElement.parentElement.getElementsByClassName('sliderm-min')[0];
    var inputSlidermMax = element.parentElement.parentElement.getElementsByClassName('sliderm-max')[0];
    var inputSlidermStep = element.parentElement.parentElement.getElementsByClassName('sliderm-step')[0];
    var inputSlidermIntervals = element.parentElement.parentElement.getElementsByClassName('sliderm-intervals')[0];
    var inputSlidermResult = element.parentElement.parentElement.getElementsByClassName('result')[0];
    
    var line = new Sliderm2Line(slidermMin, slidermMax);
    var range = new Sliderm2Range(slidermValue1, slidermValue2, line);
    
    var inputs = element.parentElement.parentElement.querySelector('.inputs');

    if (inputs) {

        var setResult = function() {
            inputSlidermResult.value = `<div class="sliderm2" data-min="${slidermMin}" data-max="${slidermMax}" data-value1="${inputSlidermValue1.value}" data-value2="${inputSlidermValue2.value}" data-step="${step}" data-intervals="${intervals}" data-hint="${tickHint?"active":""}" data-scale="${tickScale?"active":""}" data-interval="${tickInterval?"active":""}" data-vertical="${tickVertical?"active":""}" data-verticalSize="${slidermVerticalSize}" data-lineHeight="15" data-pointSize="30" data-colorLine="#e6e6e6" data-colorPoint="#e75735" data-colorScale="lightgrey" data-colorText="white"></div>`;
        };

        var getInputs = function() {
            tickHint = inputTickHint.classList.contains('active');
            tickScale = inputTickScale.classList.contains('active');
            tickInterval = inputTickInterval.classList.contains('active');
            tickVertical = inputTickVertical.classList.contains('active');
            slidermVerticalSize = inputSlidermVerticalSize.value || 250;
            slidermValue2 = inputSlidermValue2.value;
            slidermValue1 = inputSlidermValue1.value;
            slidermMin = inputSlidermMin.value;
            slidermMax = inputSlidermMax.value;
            step = inputSlidermStep.value;
            intervals = inputSlidermIntervals.value;
        
            line = new Sliderm2Line(slidermMin, slidermMax);
            range = new Sliderm2Range(slidermValue1, slidermValue2, line);
        };
    
        var setInputs = function() {
            if (tickInterval) 
                inputSlidermValue1.value = Math.round(range.value1 * 100) / 100;
            inputSlidermValue2.value = Math.round(range.value2 * 100) / 100;
            inputSlidermMin.value = line.min;
            inputSlidermMax.value = line.max;
            inputSlidermStep.value = step;
            inputSlidermIntervals.value = intervals;
            inputSlidermVerticalSize.value = slidermVerticalSize;
            if (tickHint) inputTickHint.classList.add('active');
            if (tickScale) inputTickScale.classList.add('active');
            if (tickInterval) inputTickInterval.classList.add('active');
            if (tickVertical) inputTickVertical.classList.add('active');
            setResult();
        };

        inputs.addEventListener('change', function() {
            getInputs();
            draw();
        });

        inputs.addEventListener('click', function() {
            getInputs();
            if (tickInterval) 
                range.value1 = range.value1 < +range.value2 ? range.value1 : range.value2;
            draw();
        });
    }

    sliderm2body.oncontextmenu = function() {
        return false;        
    };

    sliderm2body.ondragstart = function() {
        return false;
    };

    var draw = function() {
        var points = checkRange();
        if(inputs) setInputs();
        drawLine = new Sliderm2DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize, colorLine);
        drawRange = new Sliderm2DrawRange(drawLine, range, colorPoint);        
        drawPoints = new Sliderm2DrawPoints(drawLine, points, pointHeight, tickHint, tickVertical, colorPoint, colorText);
        if (tickScale) 
            Sliderm2createScale(sliderm2body, line, intervals, pointHeight, lineHeight, tickVertical, colorScale);
        else Sliderm2ClassRemove(sliderm2body, 'sliderm2scale');
    };

    var checkRange = function() {
        if (+range.value2 > +line.max) range.value2 = line.max;
        if (+range.value2 < +line.min) range.value2 = line.min;
        if (+range.value1 < +line.min) range.value1 = line.min;
        var points = [];
        if (tickInterval) {
            range = new Sliderm2Range(range.value1, range.value2, line);
            points = [range.point1, range.point2];
        } else {            
            range = new Sliderm2Range(line.min, range.value2, line);
            points = [range.point2];
        }
        return points;
    };

    sliderm2body.addEventListener('mousedown', function(e) {
        drawLine = e.currentTarget.firstChild;
        if (tickInterval && 
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
            if (+range.value2 <= +range.value1 && tickInterval) 
                range.value2 = range.value1;
            draw();
            document.onmousemove = function(e) {
                range.value2 = getProcent(e);                
                if (+range.value2 <= +range.value1 && tickInterval) 
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
        if (tickVertical)
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


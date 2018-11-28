var classSliderm2 = 'sliderm2';

var Sliderm2Line = function(min, max) {
    this.min = min;
    this.max = max;
    this.range = max - min;
};

var Sliderm2DrawLine = function(div, pointSize, lineHeight, tickVertical, slidermLength, colorLine) {
    Sliderm2ClassRemove(div, 'sliderm2line');
    var lineDiv = document.createElement("div");
    lineDiv.className = "sliderm2line";
    lineDiv.style.height = lineHeight + 'px';
    lineDiv.style.width = '100%';
    lineDiv.style.borderRadius = lineHeight / 2 + 'px';
    lineDiv.style.backgroundColor = colorLine;
    var sliderm2body = div.getElementsByClassName('sliderm2__body')[0];
    sliderm2body.appendChild(lineDiv);    
    sliderm2body.style.position = 'relative';
    sliderm2body.style.display = 'block';
    sliderm2body.style.userSelect = 'none';
    sliderm2body.style.height = pointSize/2 + lineHeight/2 + 5 + 'px';
    sliderm2body.style.alignItems = 'center';
    sliderm2body.parentElement.style.width = slidermLength;
    sliderm2body.parentElement.style.height = lineHeight;
    if (tickVertical) {
        sliderm2body.style.width = slidermLength+'px';
        sliderm2body.parentElement.style.transform = 'rotate(-90deg) translateX('+ -slidermLength/2+'px)';
    } else {
        sliderm2body.style.width = '100%';
        sliderm2body.parentElement.style.transform = 'rotate(0deg)';
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

var Sliderm2DrawPoints = function(div, points, pointSize, tickHint, tickVertical, colorPoint, colorText) {
    Sliderm2ClassRemove(div, 'sliderm2point');
    var pointDivs = points.map(function(point) {
        var pointDiv = document.createElement("div");
        pointDiv.className = "sliderm2point";
        pointDiv.style.position = 'absolute';
        pointDiv.style.height = pointDiv.style.width = pointSize + 'px';
        pointDiv.style.borderRadius = '50%';
        pointDiv.style.top = div.offsetHeight/2 - pointSize/2 + 'px';
        pointDiv.style.left = 'calc(' + point.value + '% - '+ pointSize/2 +'px)';
        pointDiv.style.backgroundColor = colorPoint;
        div.appendChild(pointDiv);
        if (tickHint) 
            pointDiv.drawHint = new Sliderm2DrawHint(pointDiv, point, pointSize, tickVertical, colorText);
        return pointDiv;
    });
    return pointDivs;
};

var Sliderm2DrawHint = function(div, point, pointSize, tickVertical, colorText) {
    Sliderm2ClassRemove(div, 'sliderm2hint');
    var hintDiv = document.createElement("div");
    hintDiv.className = "sliderm2hint";
    hintDiv.style.position = 'absolute';
    hintDiv.style.display = 'flex';
    hintDiv.style.alignItems = 'center';
    hintDiv.style.width = 'auto';
    hintDiv.style.padding = '2px 8px';
    hintDiv.style.borderRadius = '4px';
    hintDiv.style.height = pointSize + 'px';
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
    arrowDiv.style.height = pointSize/3 + 'px';
    arrowDiv.style.width = pointSize/3 + 'px';
    arrowDiv.style.backgroundColor = 'inherit';
    hintDiv.appendChild(arrowDiv);

    if (tickVertical) {
        hintDiv.style.transform = 'rotate(90deg) translateX('+ 0+'px)';
        hintDiv.style.top = - pointSize - hintDiv.offsetWidth/2 + 'px';
        hintDiv.style.left = pointSize/2 - hintDiv.offsetWidth/2 + 'px';
        arrowDiv.style.top = hintDiv.offsetHeight/2 - arrowDiv.offsetHeight/2 + 'px';
        arrowDiv.style.left = hintDiv.offsetWidth - arrowDiv.offsetWidth/2 - 1 + 'px';
    } else {
        hintDiv.style.transform = 'rotate(0deg)';
        hintDiv.style.top = - pointSize*3/2 + 'px';
        hintDiv.style.left = pointSize/2 - hintDiv.offsetWidth/2 + 'px';
        arrowDiv.style.top = hintDiv.offsetHeight - arrowDiv.offsetHeight/2 + 'px';
        arrowDiv.style.left = hintDiv.offsetWidth/2 - arrowDiv.offsetWidth/2 + 'px';
    }
    return hintDiv;
};

var Sliderm2ClassRemove = function(div, removingClass) {
    var elem = div.getElementsByClassName(removingClass)[0];
    while (elem) {
        elem.remove();
        elem = div.getElementsByClassName(removingClass)[0];
    }
};

var Sliderm2createScale = function(div, line, intervals, pointSize, lineHeight, tickVertical, colorScale) {
    Sliderm2ClassRemove(div, 'sliderm2__scale');
    var scaleDiv = document.createElement("div");
    scaleDiv.className = "sliderm2__scale";
    scaleDiv.style.position = 'absolute';
    scaleDiv.style.display = 'flex';
    // scaleDiv.style.left = -pointSize/2 + 'px';
    scaleDiv.style.fontSize = pointSize * 3 / 6 + 'px';
    scaleDiv.style.justifyContent = 'space-between';
    scaleDiv.style.top = pointSize/2 + lineHeight/2 + 5 + 'px';
    scaleDiv.style.color = colorScale;
    div.appendChild(scaleDiv);
    scaleDiv.style.width = 'calc(100% + '+ pointSize/2 +'px)';
    var digit;
    for(var i = 0; i <= intervals; i++) {
        digit = document.createElement('div');
        digit.innerHTML = Math.round( + line.min + line.range * i / intervals);
        if (tickVertical)
        digit.style.transform = 'rotate(90deg)';
        scaleDiv.appendChild(digit);
    }
    div.style.height = digit.offsetHeight + pointSize/2 + lineHeight/2 + 5 + 'px';
    return scaleDiv;
};

var chooseColor2color = function (div) {
    if (div) {
        var sliders = div.getElementsByClassName('sliderm2');
        var red = sliders[0].getAttribute('data-value2');
        var green = sliders[1].getAttribute('data-value2');
        var blue = sliders[2].getAttribute('data-value2');
        var opacity = sliders[3].getAttribute('data-value2')/255;
        //red, green, blue, opacity
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }
    return "gray";
};

//Controller
var elems2 = document.getElementsByClassName(classSliderm2);
[].forEach.call(elems2, function(element) {
    var sliderm2body = document.createElement("div");
    sliderm2body.className = "sliderm2__body";
    element.appendChild(sliderm2body); 

    var sliderm2pageContent = element.parentElement.parentElement;
    var inputTickHint = sliderm2pageContent.getElementsByClassName('tick-hint')[0];
    var inputTickScale = sliderm2pageContent.getElementsByClassName('tick-scale')[0];
    var inputTickInterval = sliderm2pageContent.getElementsByClassName('tick-interval')[0];
    var inputTickVertical = sliderm2pageContent.getElementsByClassName('tick-vertical')[0];
    var inputSlidermLength = sliderm2pageContent.getElementsByClassName('sliderm-length')[0];
    var inputSlidermValue2 = sliderm2pageContent.getElementsByClassName('sliderm-value2')[0];
    var inputSlidermValue1 = sliderm2pageContent.getElementsByClassName('sliderm-value1')[0];
    var inputSlidermMin = sliderm2pageContent.getElementsByClassName('sliderm-min')[0];
    var inputSlidermMax = sliderm2pageContent.getElementsByClassName('sliderm-max')[0];
    var inputSlidermStep = sliderm2pageContent.getElementsByClassName('sliderm-step')[0];
    var inputSlidermIntervals = sliderm2pageContent.getElementsByClassName('sliderm-intervals')[0];
    var inputSlidermResult = sliderm2pageContent.getElementsByClassName('sliderm2page__result')[0];
    
    var line = new Sliderm2Line(element.dataset.min, element.dataset.max);
    var range = new Sliderm2Range(element.dataset.value1, element.dataset.value2, line);   

    var drawLine;
    var drawRange;
    var drawPoints;
    var drawScale;

    var chooseColorLine;
    var chooseColorPoint;
    var chooseColorScale; 
    var chooseColorText; 
    
    var inputs = element.parentElement.parentElement.querySelector('.sliderm2page__inputs');

    if (inputs) {

        if (inputs.getElementsByClassName('chooseColor__item').length==4) {
            chooseColorLine = inputs.getElementsByClassName('chooseColor__item')[0];
            chooseColorPoint = inputs.getElementsByClassName('chooseColor__item')[1];
            chooseColorScale = inputs.getElementsByClassName('chooseColor__item')[2];
            chooseColorText = inputs.getElementsByClassName('chooseColor__item')[3];
        }

        var getInputs = function() {
            element.dataset.hint = inputTickHint.classList.contains('true')?'true':'';
            element.dataset.scale = inputTickScale.classList.contains('true')?'true':'';
            element.dataset.interval = inputTickInterval.classList.contains('true')?'true':'';
            element.dataset.vertical = inputTickVertical.classList.contains('true')?'true':'';
            element.dataset.length = inputSlidermLength.value || "100%";
            element.dataset.value2 = inputSlidermValue2.value;
            if (inputSlidermValue1.value) element.dataset.value1 = inputSlidermValue1.value;
            element.dataset.min = inputSlidermMin.value;
            element.dataset.max = inputSlidermMax.value;
            element.dataset.step = inputSlidermStep.value;
            element.dataset.intervals = inputSlidermIntervals.value;
        
            line = new Sliderm2Line(element.dataset.min, element.dataset.max);
            range = new Sliderm2Range(element.dataset.value1, element.dataset.value2, line);
        };
    
        var setInputs = function() {
            if (element.dataset.interval) 
                inputSlidermValue1.value = Math.round(range.value1 * 100) / 100;
            inputSlidermValue2.value = Math.round(range.value2 * 100) / 100;
            inputSlidermMin.value = line.min;
            inputSlidermMax.value = line.max;
            inputSlidermStep.value = element.dataset.step;
            inputSlidermIntervals.value = element.dataset.intervals;
            inputSlidermLength.value = element.dataset.length;
            if (element.dataset.hint) inputTickHint.classList.add('true');
            if (element.dataset.scale) inputTickScale.classList.add('true');
            if (element.dataset.interval) inputTickInterval.classList.add('true');
            if (element.dataset.vertical) inputTickVertical.classList.add('true');
        };

        inputs.addEventListener('change', function() {
            getInputs();
            draw();
        });

        inputs.addEventListener('click', function() {
            getInputs();
            if (element.dataset.interval) 
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

    if (chooseColorLine) {
        chooseColorLine.parentElement.addEventListener('mousedown', function() {
            setResult();
        });
        chooseColorLine.parentElement.addEventListener('mousemove', function() {
            setResult();
        });
    }

    var setColors = function() {
        drawLine.style.backgroundColor = chooseColor2color(chooseColorLine);
        drawRange.style.backgroundColor = chooseColor2color(chooseColorPoint);
        drawPoints[0].style.backgroundColor = chooseColor2color(chooseColorPoint);
        if (drawPoints[1]) drawPoints[1].style.backgroundColor = chooseColor2color(chooseColorPoint);
        if (element.dataset.hint) {
            drawPoints[0].drawHint.style.backgroundColor = chooseColor2color(chooseColorPoint);
            drawPoints[0].drawHint.style.color = chooseColor2color(chooseColorText);
        }
        if (element.dataset.hint && drawPoints[1]) {
            drawPoints[1].drawHint.style.backgroundColor = chooseColor2color(chooseColorPoint);
            drawPoints[1].drawHint.style.color = chooseColor2color(chooseColorText);
        }
        if (element.dataset.scale) drawScale.style.color = chooseColor2color(chooseColorScale);
    };

    var setResult = function() {
        element.dataset.colorLine = chooseColor2color(chooseColorLine);
        element.dataset.colorPoint = chooseColor2color(chooseColorPoint);
        element.dataset.colorScale = chooseColor2color(chooseColorScale);
        element.dataset.colorText = chooseColor2color(chooseColorText);
        setColors();
        inputSlidermResult.value = `<div class="sliderm2" data-min="${element.dataset.min}" data-max="${element.dataset.max}" data-value1="${range.value1}" data-value2="${range.value2}" data-step="${element.dataset.step}" data-intervals="${element.dataset.intervals}" data-hint="${element.dataset.hint}" data-scale="${element.dataset.scale}" data-interval="${element.dataset.interval}" data-vertical="${element.dataset.vertical}" data-length="${element.dataset.length}" data-line-height="15" data-pointSize="30" data-color-line="${chooseColor2color(chooseColorLine)}" data-color-point="${chooseColor2color(chooseColorPoint)}" data-color-scale="${chooseColor2color(chooseColorScale)}" data-color-text="${chooseColor2color(chooseColorText)}"></div><script src="sliderm2.js"></script>`;
        
    };

    var draw = function() {
        var points = checkRange();
        if(inputs) setInputs();        
        element.dataset.value2 = range.value2;
        if (element.dataset.interval) element.dataset.value1 = range.value1;
        drawLine = new Sliderm2DrawLine(element, element.dataset.pointSize, element.dataset.lineHeight, element.dataset.vertical, element.dataset.length, element.dataset.colorLine);
        drawRange = new Sliderm2DrawRange(drawLine, range, element.dataset.colorPoint);        
        drawPoints = new Sliderm2DrawPoints(drawLine, points, element.dataset.pointSize, element.dataset.hint, element.dataset.vertical, element.dataset.colorPoint, element.dataset.colorText);
        if (element.dataset.scale) 
            drawScale = new Sliderm2createScale(sliderm2body, line, element.dataset.intervals, element.dataset.pointSize, element.dataset.lineHeight, element.dataset.vertical, element.dataset.colorScale);
        else Sliderm2ClassRemove(sliderm2body, 'sliderm2__scale');
        if (chooseColorLine) setResult();
    };

    var checkRange = function() {
        if (+range.value2 > +line.max) range.value2 = line.max;
        if (+range.value2 < +line.min) range.value2 = line.min;
        if (+range.value1 < +line.min) range.value1 = line.min;
        var points = [];
        if (element.dataset.interval) {
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
        if (element.dataset.interval && 
                getProcent(e) < (range.value2 - line.max * element.dataset.pointSize/drawLine.clientWidth/2)) {
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
            if (+range.value2 <= +range.value1 && element.dataset.interval) 
                range.value2 = range.value1;
            draw();
            document.onmousemove = function(e) {
                range.value2 = getProcent(e);                
                if (+range.value2 <= +range.value1 && element.dataset.interval) 
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
        if (element.dataset.vertical)
            return element.dataset.step * Math.round(( + line.min + (lineCoords.top + drawLine.clientWidth - e.pageY) / drawLine.clientWidth * line.range) / element.dataset.step);
        else
            return element.dataset.step * Math.round(( + line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / element.dataset.step);
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


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
    var sliderm2body = div.getElementsByClassName('sliderm2__body')[0];
    sliderm2body.appendChild(lineDiv);    
    sliderm2body.style.position = 'relative';
    sliderm2body.style.display = 'block';
    // sliderm2body.style.margin = '0px auto';
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
            pointDiv.drawHint = new Sliderm2DrawHint(pointDiv, point, pointHeight, tickVertical, colorText);
        return pointDiv;
    });
    return pointDivs;
};

var Sliderm2DrawHint = function(div, point, pointHeight, tickVertical, colorText) {
    Sliderm2ClassRemove(div, 'sliderm2hint');
    var hintDiv = document.createElement("div");
    hintDiv.className = "sliderm2hint";
    hintDiv.style.position = 'absolute';
    hintDiv.style.display = 'flex';
    hintDiv.style.alignItems = 'center';
    hintDiv.style.width = 'auto';
    hintDiv.style.padding = '2px 8px';
    hintDiv.style.borderRadius = '4px';
    hintDiv.style.height = pointHeight + 'px';
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
    return hintDiv;
};

var Sliderm2ClassRemove = function(div, removingClass) {
    var elem = div.getElementsByClassName(removingClass)[0];
    while (elem) {
        elem.remove();
        elem = div.getElementsByClassName(removingClass)[0];
    }
};

var Sliderm2createScale = function(div, line, intervals, pointHeight, lineHeight, tickVertical, colorScale) {
    Sliderm2ClassRemove(div, 'sliderm2__scale');
    var scaleDiv = document.createElement("div");
    scaleDiv.className = "sliderm2__scale";
    scaleDiv.style.position = 'absolute';
    scaleDiv.style.display = 'flex';
    // scaleDiv.style.left = -pointHeight/2 + 'px';
    scaleDiv.style.fontSize = pointHeight * 3 / 6 + 'px';
    scaleDiv.style.justifyContent = 'space-between';
    scaleDiv.style.top = pointHeight/2 + lineHeight/2 + 5 + 'px';
    scaleDiv.style.color = colorScale;
    div.appendChild(scaleDiv);
    scaleDiv.style.width = 'calc(100% + '+ pointHeight/2 +'px)';
    var digit;
    for(var i = 0; i <= intervals; i++) {
        digit = document.createElement('div');
        digit.innerHTML = Math.round( + line.min + line.range * i / intervals);
        if (tickVertical)
        digit.style.transform = 'rotate(90deg)';
        scaleDiv.appendChild(digit);
    }
    div.style.height = digit.offsetHeight + pointHeight/2 + lineHeight/2 + 5 + 'px';
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
    var tickHint = element.getAttribute('data-hint')=='tick_active';
    var tickScale = element.getAttribute('data-scale')=='tick_active';
    var tickInterval = element.getAttribute('data-interval')=='tick_active';
    var tickVertical = element.getAttribute('data-vertical')=='tick_active';
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

    var getSliderm2Attributes = function () {
        tickHint = element.getAttribute('data-hint')=='tick_active';
        tickScale = element.getAttribute('data-scale')=='tick_active';
        tickInterval = element.getAttribute('data-interval')=='tick_active';
        tickVertical = element.getAttribute('data-vertical')=='tick_active';
        slidermVerticalSize = element.getAttribute('data-verticalSize');
        slidermValue2 = element.getAttribute('data-value2');
        slidermValue1 = element.getAttribute('data-value1');
        slidermMin = element.getAttribute('data-min');
        slidermMax = element.getAttribute('data-max');
        pointHeight = element.getAttribute('data-pointSize');
        lineHeight = element.getAttribute('data-lineHeight');
        step = element.getAttribute('data-step');
        intervals = element.getAttribute('data-intervals');
        colorLine = element.getAttribute('data-colorLine');
        colorPoint = element.getAttribute('data-colorPoint');
        colorScale = element.getAttribute('data-colorScale');
        colorText = element.getAttribute('data-colorText');
    };

    var sliderm2pageContent = element.parentElement.parentElement;
    var inputTickHint = sliderm2pageContent.getElementsByClassName('tick-hint')[0];
    var inputTickScale = sliderm2pageContent.getElementsByClassName('tick-scale')[0];
    var inputTickInterval = sliderm2pageContent.getElementsByClassName('tick-interval')[0];
    var inputTickVertical = sliderm2pageContent.getElementsByClassName('tick-vertical')[0];
    var inputSlidermVerticalSize = sliderm2pageContent.getElementsByClassName('sliderm-vertical-size')[0];
    var inputSlidermValue2 = sliderm2pageContent.getElementsByClassName('sliderm-value2')[0];
    var inputSlidermValue1 = sliderm2pageContent.getElementsByClassName('sliderm-value1')[0];
    var inputSlidermMin = sliderm2pageContent.getElementsByClassName('sliderm-min')[0];
    var inputSlidermMax = sliderm2pageContent.getElementsByClassName('sliderm-max')[0];
    var inputSlidermStep = sliderm2pageContent.getElementsByClassName('sliderm-step')[0];
    var inputSlidermIntervals = sliderm2pageContent.getElementsByClassName('sliderm-intervals')[0];
    var inputSlidermResult = sliderm2pageContent.getElementsByClassName('sliderm2page__result')[0];
    
    var line = new Sliderm2Line(slidermMin, slidermMax);
    var range = new Sliderm2Range(slidermValue1, slidermValue2, line);   

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
            tickHint = inputTickHint.classList.contains('tick_active');
            tickScale = inputTickScale.classList.contains('tick_active');
            tickInterval = inputTickInterval.classList.contains('tick_active');
            tickVertical = inputTickVertical.classList.contains('tick_active');
            slidermVerticalSize = inputSlidermVerticalSize.value || 250;
            slidermValue2 = inputSlidermValue2.value;
            if (inputSlidermValue1.value) slidermValue1 = inputSlidermValue1.value;
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
            if (tickHint) inputTickHint.classList.add('tick_active');
            if (tickScale) inputTickScale.classList.add('tick_active');
            if (tickInterval) inputTickInterval.classList.add('tick_active');
            if (tickVertical) inputTickVertical.classList.add('tick_active');
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

    function setDivSliderm2() {
        if (tickHint) element.setAttribute('data-hint', 'tick_active');
        else element.setAttribute('data-hint', '');
        if (tickScale) element.setAttribute('data-scale', 'tick_active');
        else element.setAttribute('data-scale', '');
        if (tickInterval) element.setAttribute('data-interval', 'tick_active');
        else element.setAttribute('data-interval', '');
        if (tickVertical) element.setAttribute('data-vertical', 'tick_active');
        else element.setAttribute('data-vertical', '');
        element.setAttribute('data-verticalSize', slidermVerticalSize);
        element.setAttribute('data-value2', range.value2);
        if (slidermValue1) element.setAttribute('data-value1', range.value1);
        element.setAttribute('data-min', line.min);
        element.setAttribute('data-max', line.max);
        element.setAttribute('data-pointSize', pointHeight);
        element.setAttribute('data-lineHeight', lineHeight);
        element.setAttribute('data-step', step);
        element.setAttribute('data-intervals', intervals);
        
        getSliderm2Attributes();
    }

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
        if (tickHint) {
            drawPoints[0].drawHint.style.backgroundColor = chooseColor2color(chooseColorPoint);
            drawPoints[0].drawHint.style.color = chooseColor2color(chooseColorText);
        }
        if (tickHint && drawPoints[1]) {
            drawPoints[1].drawHint.style.backgroundColor = chooseColor2color(chooseColorPoint);
            drawPoints[1].drawHint.style.color = chooseColor2color(chooseColorText);
        }
        if (tickScale) drawScale.style.color = chooseColor2color(chooseColorScale);
    };

    var setResult = function() {        
        element.setAttribute('data-colorLine', chooseColor2color(chooseColorLine));
        element.setAttribute('data-colorPoint', chooseColor2color(chooseColorPoint));
        element.setAttribute('data-colorScale', chooseColor2color(chooseColorScale));
        element.setAttribute('data-colorText', chooseColor2color(chooseColorText));
        setColors();
        inputSlidermResult.value = `<div class="sliderm2" data-min="${slidermMin}" data-max="${slidermMax}" data-value1="${range.value1}" data-value2="${range.value2}" data-step="${step}" data-intervals="${intervals}" data-hint="${tickHint?"tick_active":""}" data-scale="${tickScale?"tick_active":""}" data-interval="${tickInterval?"tick_active":""}" data-vertical="${tickVertical?"tick_active":""}" data-verticalSize="${slidermVerticalSize}" data-lineHeight="15" data-pointSize="30" data-colorLine="${chooseColor2color(chooseColorLine)}" data-colorPoint="${chooseColor2color(chooseColorPoint)}" data-colorScale="${chooseColor2color(chooseColorScale)}" data-colorText="${chooseColor2color(chooseColorText)}"></div><script src="sliderm2.js"></script>`;
        
    };

    var draw = function() {
        var points = checkRange();
        if(inputs) setInputs();
        setDivSliderm2();
        drawLine = new Sliderm2DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize, colorLine);
        drawRange = new Sliderm2DrawRange(drawLine, range, colorPoint);        
        drawPoints = new Sliderm2DrawPoints(drawLine, points, pointHeight, tickHint, tickVertical, colorPoint, colorText);
        if (tickScale) 
            drawScale = new Sliderm2createScale(sliderm2body, line, intervals, pointHeight, lineHeight, tickVertical, colorScale);
        else Sliderm2ClassRemove(sliderm2body, 'sliderm2__scale');
        if (chooseColorLine) setResult();
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


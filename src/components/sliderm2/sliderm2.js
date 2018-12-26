import { bind } from 'decko';
// export default Sliderm2Line;
// export default Sliderm2Range;
// export default Sliderm2Point;

class Sliderm2Line {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.range = max - min;
    }    

    drawLine(div, dataset) {
        var lineDiv = document.createElement("div");
        lineDiv.className = "sliderm2__line";
        lineDiv.style.height = `${dataset.lineHeight}px`;
        lineDiv.style.width = '100%';
        lineDiv.style.borderRadius = `${dataset.lineHeight / 2}px`;
        lineDiv.style.backgroundColor = dataset.colorLine;
        var sliderm2body = $('.sliderm2__body', div)[0];
        sliderm2body.appendChild(lineDiv);    
        sliderm2body.style.position = 'relative';
        sliderm2body.style.display = 'block';
        sliderm2body.style.userSelect = 'none';
        sliderm2body.parentElement.style.width = dataset.length;
        sliderm2body.style.height = `${dataset.pointSize/2 + dataset.lineHeight/2 + 5} px`;
        sliderm2body.style.alignItems = 'center';
        if (dataset.vertical) {
            sliderm2body.style.width = `${dataset.length} px`;
            sliderm2body.style.transform = `rotate(-90deg) translateX(${-dataset.length/2}px)`;
            sliderm2body.parentElement.style.height = dataset.length;
        } else {
            sliderm2body.parentElement.style.height = dataset.lineHeight;
            sliderm2body.style.width = '100%';
            sliderm2body.style.transform = 'rotate(0deg)';
        }
        this.min = dataset.min;
        this.max = dataset.max;
        this.range = dataset.max - dataset.min;
        return lineDiv;
    };

    createScale(div, line, dataset) {
        var scaleDiv = document.createElement("div");
        scaleDiv.className = "sliderm2__scale";
        scaleDiv.style.position = 'absolute';
        scaleDiv.style.display = 'flex';
        scaleDiv.style.fontSize = `${dataset.pointSize * 3 / 6}px`;
        scaleDiv.style.justifyContent = 'space-between';
        scaleDiv.style.top = `${dataset.pointSize/2 + dataset.lineHeight/2 + 5}px`;
        scaleDiv.style.color = dataset.colorScale;
        div.appendChild(scaleDiv);
        scaleDiv.style.width = `calc(100% + ${+dataset.pointSize/2}px)`;
        var digit;
        for(var i = 0; i <= dataset.intervals; i++) {
            digit = document.createElement('div');
            digit.innerHTML = Math.round( + line.min + line.range * i / dataset.intervals);
            if (dataset.vertical)
            digit.style.transform = 'rotate(90deg)';
            scaleDiv.appendChild(digit);
        }
        div.style.height = `${digit.offsetHeight + dataset.pointSize/2 + dataset.lineHeight/2 + 5}px`;
        if (dataset.vertical) {
            div.parentElement.style.height = scaleDiv.offsetWidth;
        }
        return scaleDiv;
    };
};

class Sliderm2Range {
    constructor(value1, value2, line) {
        this.value1 = value1;
        this.value2 = value2;
        this.point1 = new Sliderm2Point(value1, line);
        this.point2 = new Sliderm2Point(value2, line);
    }

    drawRange (div, range, dataset) {
        this.value1 = dataset.value1;
        this.value2 = dataset.value2;
        var rangeDiv = document.createElement("div");
        rangeDiv.className = "sliderm2__range";
        rangeDiv.style.height = 'inherit';
        rangeDiv.style.position = 'absolute';
        rangeDiv.style.top = '0';
        rangeDiv.style.left = `${range.point1.value}%`;
        rangeDiv.style.width = `${range.point2.value - range.point1.value}%`;
        rangeDiv.style.borderRadius = 'inherit';
        rangeDiv.style.backgroundColor = dataset.colorRange;
        div.appendChild(rangeDiv);
        return rangeDiv;
    };

    drawPoints(div, points, dataset) {
        // this.point1 = new Sliderm2Point(dataset.value1, div);
        // this.point2 = new Sliderm2Point(dataset.value2, div);
        var pointDivs = points.map(function(point) {
            var pointDiv = document.createElement("div");
            pointDiv.className = "sliderm2__point";
            pointDiv.style.position = 'absolute';
            pointDiv.style.height = `${pointDiv.style.width = dataset.pointSize}px`;
            pointDiv.style.borderRadius = '50%';
            pointDiv.style.top = `${div.offsetHeight/2 - dataset.pointSize/2}px`;
            pointDiv.style.left = `calc(${point.value}% - ${dataset.pointSize/2}px)`;
            pointDiv.style.backgroundColor = dataset.colorPoint;
            div.appendChild(pointDiv);
            if (dataset.hint) 
                pointDiv.drawHint = this.drawHint(pointDiv, point, dataset);
            return pointDiv;
        }.bind(this));
        return pointDivs;
    };
    
    drawHint(div, point, dataset) {
        var hintDiv = document.createElement("div");
        hintDiv.className = "sliderm2__hint";
        hintDiv.style.position = 'absolute';
        hintDiv.style.display = 'flex';
        hintDiv.style.alignItems = 'center';
        hintDiv.style.width = 'auto';
        hintDiv.style.padding = '2px 8px';
        hintDiv.style.borderRadius = '4px';
        hintDiv.style.height = `${dataset.pointSize}px`;
        hintDiv.style.backgroundColor = 'inherit';
        hintDiv.style.color = dataset.colorText;
        hintDiv.innerHTML = Math.round(point.inValue * 100) / 100;
        div.appendChild(hintDiv);
        
        var arrowDiv = document.createElement("div");
        arrowDiv.className = "sliderm2__arrow";    
        arrowDiv.style.position = 'absolute';
        arrowDiv.style.content = '';
        arrowDiv.style.transform = 'rotate(-45deg)';
        arrowDiv.style.zIndex = '-1';
        arrowDiv.style.height = `${dataset.pointSize/3}px`;
        arrowDiv.style.width = `${dataset.pointSize/3}px`;
        arrowDiv.style.backgroundColor = 'inherit';
        hintDiv.appendChild(arrowDiv);

        if (dataset.vertical) {
            hintDiv.style.transform = 'rotate(90deg) translateX(0px)';
            hintDiv.style.top = `${-dataset.pointSize - hintDiv.offsetWidth/2}px`;
            hintDiv.style.left = `${dataset.pointSize/2 - hintDiv.offsetWidth/2}px`;
            arrowDiv.style.top = `${hintDiv.offsetHeight/2 - arrowDiv.offsetHeight/2}px`;
            arrowDiv.style.left = `${hintDiv.offsetWidth - arrowDiv.offsetWidth/2 - 1}px`;
        } else {
            hintDiv.style.transform = 'rotate(0deg)';
            hintDiv.style.top = `${- dataset.pointSize*3/2}px`;
            hintDiv.style.left = `${dataset.pointSize/2 - hintDiv.offsetWidth/2}px`;
            arrowDiv.style.top = `${hintDiv.offsetHeight - arrowDiv.offsetHeight/2}px`;
            arrowDiv.style.left = `${hintDiv.offsetWidth/2 - arrowDiv.offsetWidth/2}px`;
        }
        return hintDiv;
    };
};

class Sliderm2Point {
    constructor(value, line) {
        this.inValue = value;
        this.value = (value - line.min) / line.range * 100;
    }
};

class Sliderm2 {
    constructor(element) {
        this.sliderm2div = element;        
        this.sliderm2body = document.createElement("div");
        this.sliderm2body.className = "sliderm2__body";
        this.sliderm2div.appendChild(this.sliderm2body);
        this.line = new Sliderm2Line(element.dataset.min, element.dataset.max);
        this.range = new Sliderm2Range(element.dataset.value1, element.dataset.value2, this.line);    
        this.sliderm2body.oncontextmenu = function() {
            return false;        
        };    
        this.sliderm2body.ondragstart = function() {
            return false;
        };        
        this.sliderm2body.addEventListener('mousedown', this.sliderm2bodyChangeListener);        
        element.addEventListener('click', this.draw);  
        this.draw();
    }
    
    @bind
    draw() {
        var points = this.checkRange();
        this.sliderm2div.dataset.value2 = this.range.value2;
        if (this.sliderm2div.dataset.interval) this.sliderm2div.dataset.value1 = this.range.value1;
        if(this.sliderm2div) {
            this.sliderm2ClassRemove(this.sliderm2div, 'sliderm2__line');
            this.sliderm2ClassRemove(this.sliderm2body, 'sliderm2__scale');
        }
        this.drawLine = this.line.drawLine(this.sliderm2div, this.sliderm2div.dataset);
        this.drawRange = this.range.drawRange(this.drawLine, this.range, this.sliderm2div.dataset);        
        this.drawPoints = this.range.drawPoints(this.drawLine, points, this.sliderm2div.dataset);
        if (this.sliderm2div.dataset.scale) 
            this.drawScale = this.line.createScale(this.sliderm2body, this.line, this.sliderm2div.dataset);
        else this.sliderm2ClassRemove(this.sliderm2body, 'sliderm2__scale');
    };

    @bind
    checkRange() {
        if (+this.range.value2 > +this.line.max) this.range.value2 = this.line.max;
        if (+this.range.value2 < +this.line.min) this.range.value2 = this.line.min;
        if (+this.range.value1 < +this.line.min) this.range.value1 = this.line.min;
        var points = [];
        if (this.sliderm2div.dataset.interval) {
            this.range = new Sliderm2Range(this.range.value1, this.range.value2, this.line);
            points = [this.range.point1, this.range.point2];
        } else {            
            this.range = new Sliderm2Range(this.line.min, this.range.value2, this.line);
            points = [this.range.point2];
        }
        return points;
    };

    @bind
    sliderm2bodyChangeListener(e) {
        document.addEventListener('mouseup', this.cancelMove);
        if (this.sliderm2div.dataset.interval && 
                this.getProcent(e) < (this.range.value2 - this.line.max * this.sliderm2div.dataset.pointSize / this.drawLine.clientWidth / 2)) {
            this.moveValue1(e);
            document.addEventListener('mousemove', this.moveValue1);
        } else {
            this.moveValue2(e);
            document.addEventListener('mousemove', this.moveValue2);
        }
        return false;
    }

    @bind
    cancelMove() {
        document.removeEventListener('mousemove', this.moveValue2);
        document.removeEventListener('mousemove', this.moveValue1);
    }

    @bind
    moveValue1(e) {
        this.range.value1 = this.getProcent(e);
        if (+this.range.value1 >= +this.range.value2) this.range.value1 = this.range.value2;
        this.draw();
    }

    @bind
    moveValue2(e) {
        this.range.value2 = this.getProcent(e);
        if (+this.range.value2 <= +this.range.value1 && this.sliderm2div.dataset.interval) 
            this.range.value2 = this.range.value1;
        this.draw();
    }
    
    @bind
    getProcent(e) {
        var lineCoords = this.getCoords(this.drawLine);
        if (this.sliderm2div.dataset.vertical)
            return this.sliderm2div.dataset.step * Math.round(( + this.line.min + (lineCoords.top + this.drawLine.clientWidth - e.pageY) / this.drawLine.clientWidth * this.line.range) / this.sliderm2div.dataset.step);
        else
            return this.sliderm2div.dataset.step * Math.round(( + this.line.min + (e.pageX - lineCoords.left) / this.drawLine.clientWidth * this.line.range) / this.sliderm2div.dataset.step);
    }

    getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    sliderm2ClassRemove(div, removingClass) {
        var elem = div.getElementsByClassName(removingClass)[0];
        while (elem) {
            elem.remove();
            elem = div.getElementsByClassName(removingClass)[0];
        }
    };
}

$('.sliderm2').each((index,element) => new Sliderm2(element));

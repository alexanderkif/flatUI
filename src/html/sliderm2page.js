import { bind } from 'decko';

class Sliderm2pageContent {
    constructor(element) {
        this.sliderm2pageContentDiv = element;
        this.sliderm2Div = $('.sliderm2', element)[0];
        this.line = $('.sliderm2__line', this.sliderm2Div)[0];
        this.range = $('.sliderm2__range', this.sliderm2Div)[0];
        this.sliderm2pageInputDiv = $('.sliderm2page__inputs', element)[0];
        this.inputTickHintDiv = $('.tick-hint', this.sliderm2pageInputDiv)[0];
        this.inputTickScaleDiv = $('.tick-scale', this.sliderm2pageInputDiv)[0];
        this.inputTickIntervalDiv = $('.tick-interval', this.sliderm2pageInputDiv)[0];	
        this.inputTickVerticalDiv = $('.tick-vertical', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermLengthDiv = $('.sliderm-length', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermValue2Div = $('.sliderm-value2', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermValue1Div = $('.sliderm-value1', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermMinDiv = $('.sliderm-min', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermMaxDiv = $('.sliderm-max', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermStepDiv = $('.sliderm-step', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermIntervalsDiv = $('.sliderm-intervals', this.sliderm2pageInputDiv)[0];	
        this.inputSlidermResultDiv = $('.sliderm2page__result', element)[0];
        this.chooseColorLineDiv = $('.chooseColor__item', this.sliderm2pageInputDiv)[0];	
        this.chooseColorRangeDiv = $('.chooseColor__item', this.sliderm2pageInputDiv)[1];
        this.chooseColorPointDiv = $('.chooseColor__item', this.sliderm2pageInputDiv)[2];	
        this.chooseColorScaleDiv = $('.chooseColor__item', this.sliderm2pageInputDiv)[3];	
        this.chooseColorTextDiv = $('.chooseColor__item', this.sliderm2pageInputDiv)[4];

        this.setInputs();

        this.sliderm2pageInputDiv.addEventListener('change', this.inputsChange);	
        this.sliderm2pageInputDiv.addEventListener('click', this.inputsClick);
        this.sliderm2Div.addEventListener('mousemove', this.sliderm2change);

        $(this.chooseColorLineDiv.parentElement).bind("DOMSubtreeModified", this.setResult);
    }

    @bind
    sliderm2change() {
        this.setInputs();
        this.inputSlidermResultDiv.innerHTML = `${this.sliderm2Div.outerHTML.split('>')[0]}></div>`;
        this.sliderm2Div.dispatchEvent(new Event('click'));		
    }

    @bind
    inputsChange() {
        this.getInputs();
        this.sliderm2Div.dispatchEvent(new Event('click'));	
    }

    @bind
    inputsClick() {
        this.getInputs();
        this.setInputs();	
        if (this.sliderm2Div.dataset.interval) 	
            this.range.value1 = this.range.value1 < +this.range.value2 ? this.range.value1 : this.range.value2;	
        this.sliderm2Div.dispatchEvent(new Event('click'));
    }

    @bind
    setResult() {	
        this.sliderm2Div.dataset.colorLine = this.chooseColor2color(this.chooseColorLineDiv);	
        this.sliderm2Div.dataset.colorRange = this.chooseColor2color(this.chooseColorRangeDiv);	
        this.sliderm2Div.dataset.colorPoint = this.chooseColor2color(this.chooseColorPointDiv);	
        this.sliderm2Div.dataset.colorScale = this.chooseColor2color(this.chooseColorScaleDiv);	
        this.sliderm2Div.dataset.colorText = this.chooseColor2color(this.chooseColorTextDiv);
        this.sliderm2Div.dispatchEvent(new Event('click'));	
        this.inputSlidermResultDiv.innerHTML = `${this.sliderm2Div.outerHTML.split('>')[0]}></div>`;
    };	

    @bind
    chooseColor2color(div) {	   
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
        
    @bind
    getInputs() {	
        this.sliderm2Div.dataset.hint = this.inputTickHintDiv.classList.contains('true')?'true':'';	
        this.sliderm2Div.dataset.scale = this.inputTickScaleDiv.classList.contains('true')?'true':'';	
        this.sliderm2Div.dataset.interval = this.inputTickIntervalDiv.classList.contains('true')?'true':'';	
        this.sliderm2Div.dataset.vertical = this.inputTickVerticalDiv.classList.contains('true')?'true':'';	
        this.sliderm2Div.dataset.length = this.inputSlidermLengthDiv.value || "100%";	
        this.sliderm2Div.dataset.value2 = this.inputSlidermValue2Div.value;	
        if (this.inputSlidermValue1Div.value) this.sliderm2Div.dataset.value1 = this.inputSlidermValue1Div.value;	
        this.sliderm2Div.dataset.min = this.inputSlidermMinDiv.value;	
        this.sliderm2Div.dataset.max = this.inputSlidermMaxDiv.value;	
        this.sliderm2Div.dataset.step = this.inputSlidermStepDiv.value;	
        this.sliderm2Div.dataset.intervals = this.inputSlidermIntervalsDiv.value;
        this.inputSlidermResultDiv.innerHTML = `${this.sliderm2Div.outerHTML.split('>')[0]}></div>`;
    };

    @bind
    setInputs() {
        if (this.sliderm2Div.dataset.interval) 	
            this.inputSlidermValue1Div.value = Math.round(this.sliderm2Div.dataset.value1 * 100) / 100;	
        else this.inputSlidermValue1Div.value = "";
        this.inputSlidermValue2Div.value = Math.round(this.sliderm2Div.dataset.value2 * 100) / 100;	
        this.inputSlidermMinDiv.value = this.sliderm2Div.dataset.min;	
        this.inputSlidermMaxDiv.value = this.sliderm2Div.dataset.max;	
        this.inputSlidermStepDiv.value = this.sliderm2Div.dataset.step;	
        this.inputSlidermIntervalsDiv.value = this.sliderm2Div.dataset.intervals;	
        this.inputSlidermLengthDiv.value = this.sliderm2Div.dataset.length;	
        if (this.sliderm2Div.dataset.hint) $(this.inputTickHintDiv).addClass('true');	
        if (this.sliderm2Div.dataset.scale) $(this.inputTickScaleDiv).addClass('true');	
        if (this.sliderm2Div.dataset.interval) $(this.inputTickIntervalDiv).addClass('true');
        if (this.sliderm2Div.dataset.vertical) $(this.inputTickVerticalDiv).addClass('true');	
    };
}

$('.sliderm2page__content').each((index,element) => new Sliderm2pageContent(element));
var slidermHintWidth = $('.sliderm-hint').width();
var slidermHintHeight = $('.sliderm-hint').height();
var slidermHintArrowSide = $('.sliderm-hint-arrow').height();
var slidermHintArrowKatet = Math.sqrt(slidermHintArrowSide*slidermHintArrowSide/2);

var elems = $('.sliderm-hint-arrow');
[].forEach.call(elems, element => {
    element.style.top = (slidermHintHeight - slidermHintArrowSide/2) + "px";
    element.style.left = (slidermHintWidth/2 - slidermHintArrowSide/2) + "px";
    element.parentElement.style.top = - slidermHintHeight - slidermHintArrowKatet - 5 + "px";
});
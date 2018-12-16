
class Sectors {
    constructor(canvas) {
        var ctx = canvas.getContext('2d');
        var sectors = JSON.parse(canvas.getAttribute("sectors"));
        var r = canvas.getAttribute("r");

        ctx.lineWidth = r*0.33; // толщина линии

        var start = 4.71;

        for (var i=0; i<sectors.length; i++) {
            var key = Object.keys(sectors[i])[0];
            ctx.strokeStyle = key;
            var end = start + sectors[i][key]*2*Math.PI/100;
            ctx.beginPath();
            ctx.arc(r, r, r*0.7, start, end, false);
            ctx.stroke();
            start = end;
        }

        ctx.strokeStyle="#e5e5e5";
        ctx.beginPath();
        ctx.arc(r, r, r*0.7, start, 4.71, false);
        ctx.stroke();
    }
}

$('.sectors').each((index,element) => new Sectors(element));
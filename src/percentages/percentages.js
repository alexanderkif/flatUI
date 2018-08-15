$(document).ready(function(){
    if(document.getElementById('cnvs')) {
        var canvas=document.getElementById('cnvs');
        var ctx = canvas.getContext('2d');
        var p1 = canvas.getAttribute("p1");
        var p2 = canvas.getAttribute("p2");
        var p3 = canvas.getAttribute("p3");
        var r = canvas.getAttribute("r");
        var a1 = 4.71+p1*2*Math.PI/100;
        var a2 = a1+p2*2*Math.PI/100;
        var a3 = a2+p3*2*Math.PI/100;

        ctx.lineWidth = r*0.33; // толщина линии

        ctx.strokeStyle="#747474";
        ctx.beginPath();
        ctx.arc(r, r, r*0.7, 4.71, a1, false);
        ctx.stroke();

        ctx.strokeStyle="#e75735";
        ctx.beginPath();
        ctx.arc(r, r, r*0.7, a1, a2, false);
        ctx.stroke();

        ctx.strokeStyle="#4eb7a8";
        ctx.beginPath();
        ctx.arc(r, r, r*0.7, a2, a3, false);
        ctx.stroke();

        ctx.strokeStyle="#e5e5e5";
        ctx.beginPath();
        ctx.arc(r, r, r*0.7, a3, 4.71, false);
        ctx.stroke();
    }
})
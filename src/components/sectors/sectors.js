
class Sectors {
    constructor(canvas) {
        const ctx = canvas.getContext('2d');
        const sectors = JSON.parse(canvas.getAttribute('sectors'));
        const r = canvas.getAttribute('r');

        ctx.lineWidth = r * 0.33; // толщина линии

        let start = 4.71;

        for (let i = 0; i < sectors.length; i += 1) {
            const key = Object.keys(sectors[i])[0];
            ctx.strokeStyle = key;
            const end = start + sectors[i][key] * 2 * Math.PI / 100;
            ctx.beginPath();
            ctx.arc(r, r, r * 0.7, start, end, false);
            ctx.stroke();
            start = end;
        }

        ctx.strokeStyle = '#e5e5e5';
        ctx.beginPath();
        ctx.arc(r, r, r * 0.7, start, 4.71, false);
        ctx.stroke();
    }
}

$('.sectors').each((index, element) => new Sectors(element));

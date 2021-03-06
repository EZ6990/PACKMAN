class Ghost {

    constructor(color, x, y) {
        this.mul = 1;
        this.ghostColor = color;
        this._position = new Object();
        this._position.x = x;
        this._position.y = y;
        this._i = (this._position.x - 15) / 30;
        this._j = (this._position.y - 15) / 30;

    }
    updatePositions() {
        this._position.x = this._i * 30 + 15;
        this._position.y = this._j * 30 + 15;
    }
    get position() {
        return this._position;
    }
    set position(pos) {
        this._position = pos;
    }
    get i() {
        return this._i;
    }
    get j() {
        return this._j;
    }
    set i(i) {
        this._i = i;
    }
    set j(j) {
        this._j = j;
    }


    draw_ghost(ctx) {
        var mult = this.mul;
        var centerX = this._position.x;
        var centerY = this._position.y;
        centerX -= 15;
        centerY += 15;
        //context.clearRect(this._position.x - 15, this._position.y - 15, this._position.x + 15, this._position.y + 15); //clean board
        ctx.beginPath();
        ctx.fillStyle = this.ghostColor;
        //ctx.moveTo(83, 116);
        ctx.moveTo(centerX, centerY);
        //ctx.lineTo(83, 102);
        ctx.lineTo(centerX, centerY - 14 * mult);
        //ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(centerX, centerY - 22 * mult, centerX + 6 * mult, centerY - 28 * mult, centerX + 14 * mult, centerY - 28 * mult);
        // ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.bezierCurveTo(centerX + 22 * mult, centerY - 28 * mult, centerX + 28 * mult, centerY - 22 * mult, centerX + 28 * mult, centerY - 14 * mult);
        //ctx.lineTo(111, 116);
        ctx.lineTo(centerX + 28 * mult, centerY);
        //ctx.lineTo(106.333, 111.333);
        ctx.lineTo(centerX + 23.333 * mult, centerY + (-5 + 0.333) * mult);
        //ctx.lineTo(101.666, 116);
        ctx.lineTo(centerX + 18.666 * mult, centerY);
        //ctx.lineTo(97, 111.333);
        ctx.lineTo(centerX + 14 * mult, centerY + (-5 + 0.333) * mult);
        //ctx.lineTo(92.333, 116);
        ctx.lineTo(centerX + 9.333 * mult, centerY);
        //ctx.lineTo(87.666, 111.333);
        ctx.lineTo(centerX + 4.666 * mult, centerY + (-5 + 0.333) * mult);
        //ctx.lineTo(83, 116);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.beginPath();
        //ctx.moveTo(91, 96);
        ctx.moveTo(centerX + 8 * mult, centerY - 20 * mult);
        //ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(centerX + 5 * mult, centerY - 20 * mult, centerX + 4 * mult, centerY - 17 * mult, centerX + 4 * mult, centerY - 15 * mult);
        //ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(centerX + 4 * mult, centerY - 13 * mult, centerX + 5 * mult, centerY - 10 * mult, centerX + 8 * mult, centerY - 10 * mult);
        //ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(centerX + 11 * mult, centerY - 10 * mult, centerX + 12 * mult, centerY - 13 * mult, centerX + 12 * mult, centerY - 15 * mult);
        //ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.bezierCurveTo(centerX + 12 * mult, centerY - 17 * mult, centerX + 11 * mult, centerY - 20 * mult, centerX + 8 * mult, centerY - 20 * mult);
        //ctx.moveTo(103, 96);
        ctx.moveTo(centerX + 20 * mult, centerY - 20 * mult);
        //ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(centerX + 17 * mult, centerY - 20 * mult, centerX + 16 * mult, centerY - 17 * mult, centerX + 16 * mult, centerY - 15 * mult);
        //ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(centerX + 16 * mult, centerY - 13 * mult, centerX + 17 * mult, centerY - 10 * mult, centerX + 20 * mult, centerY - 10 * mult);
        // ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(centerX + 23 * mult, centerY - 10 * mult, centerX + 24 * mult, centerY - 13 * mult, centerX + 24 * mult, centerY - 15 * mult);
        //ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.bezierCurveTo(centerX + 24 * mult, centerY - 17 * mult, centerX + 23 * mult, centerY - 20 * mult, centerX + 20 * mult, centerY - 20 * mult);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = this.ghostColor;
        ctx.beginPath();
        //ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.arc(centerX + 18 * mult, centerY - 14 * mult, 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        //ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.arc(centerX + 6 * mult, centerY - 14 * mult, 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

}
function resetGhostPosition(){
    let i=0;
    ghosts.forEach(g => {
        if(i===0) {
            g.i = 1;
            g.j = 1
        }
        else if(i===1) {
            g.i = 1;
            g.j = 20;
        }
        else if(i===2){
            g.i=20;
            g.j=1;
        }
        i++;
        g.updatePositions();
    });

}

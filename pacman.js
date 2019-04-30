class Pacman {
    get j() {
        return this._j;
    }

    set j(value) {
        this._j = value;
    }
    get i() {
        return this._i;
    }

    set i(value) {
        this._i = value;
    }
    // var position = new Object();
    // position.x = 300;
    // position.y = 300;
    // var ghostColor;
    // var mult;

    constructor(x, y, color) {
        this._position = new Object();
        this._position.x = x;
        this._position.y = y;
        this._direction = (Math.random() * 4) | 0 + 1;
        this._pac_color = color;
        this._i=(x-15)/30;
        this._j=(x-15)/30;
    }

    updatePositions(){
        this._position.x=this._i*30+15;
        this._position.y=this._j*30+15;
    }
    get position() {
        console.log(score);
        return this._position;
    }

    set position(pos) {
        this._position.x = pos;

    }

    get direction() {
        return this._direction;
    }

    set direction(dir) {
        this._direction.x = dir;

    }

    draw(ctx) {
        context=ctx;
        context.beginPath();
        context.arc(this._position.x, this._position.y, 15, (0.15 - r) * Math.PI + (this._direction - 1) * Math.PI / 2, (1.85 + r) * Math.PI + (this._direction - 1) * Math.PI / 2); // half circle
        context.lineTo(this._position.x, this._position.y);
        context.fillStyle = this._pac_color; //color
        context.fill();
        context.beginPath();
        context.arc(this._position.x + ((1 - this._direction) * (this._direction % 2) + 1) * (7.5 - (this._direction % 2) * 10), this._position.y - ((this._direction - 4) * ((this._direction + 1) % 2) + 1) * (7.5 - ((this._direction + 1) % 2) * 10), 2.5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color
        context.fill();
    }
}
function generatePacman() {
    var emptyCell = findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 2;
    pacman = new Pacman(emptyCell[0]*30+15, emptyCell[0]*30+15, "yellow");
}
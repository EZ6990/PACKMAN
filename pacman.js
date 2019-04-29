class Pacman {
    // var position = new Object();
    // position.x = 300;
    // position.y = 300;
    // var ghostColor;
    // var mult;

    constructor(x, y, color) {
        this._position = new Object();
        this._position.x = x;
        this._position.y = y;
        this._direction = 1;
        this._pac_color = color;
    }

    get position() {
        console.log(score);
        return this._position;
    }

    set position(pos) {
        this._position.x = pos;

    }

    get direction() {
        console.log(score);
        return this._direction;
    }

    set direction(dir) {
        this._direction.x = dir;

    }

    draw(ctx) {
        context=ctx;
        context.beginPath();
        context.arc(this._position.x, this._position.y, 30, (0.15 - r) * Math.PI + (this._direction - 1) * Math.PI / 2, (1.85 + r) * Math.PI + (this._direction - 1) * Math.PI / 2); // half circle
        context.lineTo(this._position.x, this._position.y);
        context.fillStyle = this._pac_color; //color
        context.fill();
        context.beginPath();
        context.arc(center.x + ((1 - pacman.direction) * (pacman.direction % 2) + 1) * (15 - (pacman.direction % 2) * 10), center.y - ((pacman.direction - 4) * ((pacman.direction + 1) % 2) + 1) * (15 - ((pacman.direction + 1) % 2) * 10), 5, 0, 2 * Math.PI); // circle
        context.fillStyle = "black"; //color
        context.fill();
    }
}
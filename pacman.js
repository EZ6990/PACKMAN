class pacman {
    // var position = new Object();
    // position.x = 300;
    // position.y = 300;
    // var ghostColor;
    // var mult;

    constructor(x, y) {
        this._position = new Object();
        this._position.x = x;
        this._position.y = y;
        this._direction=1;

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
}
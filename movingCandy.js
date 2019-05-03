class MCandy {
    get isEaten() {
        return this._isEaten;
    }

    set isEaten(value) {
        this._isEaten = value;
    }
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

    constructor(x, y) {
        this._position = new Object();
        this._position.x = x;
        this._position.y = y;
        this._i = (x - 15) / 30;
        this._j = (x - 15) / 30;
        this._isEaten=false;
        this._candy=new Image();
        this._candy.src="images/50pts.png";
    }

    updatePositions() {
        this._position.x = this._i * 30 + 15;
        this._position.y = this._j * 30 + 15;
    }

    get position() {
        return this._position;
    }

    set position(pos) {
        this._position.x = pos;

    }


    draw(ctx) {
        this._candy.onload = function() {
            ctx.drawImage(this._candy.src, this._position.x, this._position.y,30,30);
        }
    }


    updatePosition(board,ctx){
        var neighbours= this.getAllNeighbours(board);
        var ans = neighbours[Math.round(Math.random() * neighbours.length - 0.5)];
        this._i=ans[0];
        this._j=ans[1];
        this.updatePositions();
        this.draw(ctx);
    }
    getAllNeighbours(board) {
        var arr = new Array();
        if (this._i - 1 > 1 && board[this._i - 1][this._j] > 0)
            arr.push([this._i - 1, this._j]);
        if (this._j - 1 > 1 && board[this._i][this._j - 1] > 0)
            arr.push([this._i, this._j - 1]);
        if (this._i + 1 < board.length - 1 && board[this._i + 1][this._j] > 0)
            arr.push([this._i + 1, this._j]);
        if (this._j + 1 < board.length - 1 && board[this._i][this._j + 1] > 0)
            arr.push([this._i, this._j + 1]);
        return arr;

    }

}







/*javascript */

var context, pacman, score, pac_color, start_time, time_elapsed, interval, attempts, counterR, then, timeLeft, r,candyInterval,
    sound_obj, ghosts, numOfghosts, xToCenter, yToCenter, timeInterval, food, candyColor, emptyCells,ghostInterval,mouthInterval,mCandy,food_remain;
var board;
function getBoard(){
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}
$(document).ready(function () {
    context = canvas.getContext("2d");
    sound_obj = document.getElementById("targetSound");
    counterR = 0;
    //timeLeft = 10000;
    r = 0;
});

function timeCountDown() {
    let now = Date.now();
    let delta = now - then;
    timeLeft -= delta;
    if (timeLeft <= 0) {
        timeLeft = 0;
        $("#lblTime").text(timeLeft);
        let msg = " You can do better\n your score:";
        if (score <= 150)
            endGame(msg + score);
        else {
            msg="we have a winner!!!!"
            endGame(msg);
        }
    }
    $("#lblTime").text(timeLeft / 1000);
    then = now;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Start1() {
    var count = "";
    for (var i = 0; i < board.length; i++) {
        count += "[ ";
        for (var j = 0; j < board.length; j++) {
            count += board[i][j] + ", ";

        }
        count += "]\n"
    }
    // console.log(count);
    // console.log(board.length);

}
function createGhost() {
    ghosts = new Array();
    for (var i = 0; i < numOfghosts; i++) {//change to input num
        var g;
        if (i === 0) {
            g = new Ghost(getRandomColor(), 45, 45);//change to color of choosing
            ghosts[i] = g;

        }
        else if (i === 1) {
            g = new Ghost(getRandomColor(), 615, 45);//change to color of choosing
            ghosts[i] = g;
        }
        else if (i === 2) {
            g = new Ghost(getRandomColor(), 45, 615);//change to color of choosing
            ghosts[i] = g;
        }
    }
}
function Start() {
    if($("#UserDetails").children().length == 0  ) {
        $("#UserDetails").append("NAME: <label>" + CurrentUser.username + "</label>");
    }

    score = 0;

    var cnt = 270;
    board=getBoard();
    food = UserSettings['NumberOfCoins'];
    food_remain = food;
    emptyCells=null;
    numOfghosts = UserSettings['NumberOfMonsters'];
    start_time = new Date();
    candyColor = [UserSettings['CoinsColors'][0], UserSettings['CoinsColors'][1], UserSettings['CoinsColors'][2]];
    $("#lbAttempts").text(3);
    $("#lblTime").text(UserSettings['GameTime']);
    timeLeft= $("#lblTime").text()*1000;

    createGhost();
    generateCandies(cnt, food);
    generateTimeCandy();
    generatePacman();

    keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.code] = true;
    }, false);
    addEventListener("keyup", function (e) {
        keysDown[e.code] = false;
    }, false);
    sound_obj.addEventListener("canplaythrough", startSound, false);
    let cell=findRandomEmptyCell(board);
    mCandy=new MCandy(cell[0]*30+15,cell[1]*30+15);
    createIntervals();

}

function updateR(){
    r = Math.abs(Math.sin(++counterR)) * 15 / 100;
}
function updateCandy(){
    mCandy.updatePosition(board,context);
    if(mCandy.atPostion(pacman.i,pacman.j)) {
        score += 50;
        window.clearInterval(candyInterval);
    }
}
function startSound() {
    //console.log(sound_obj);
    sound_obj.play();
}

function findRandomEmptyCell(board) {
    if (emptyCells === null || emptyCells.length===0) {
        emptyCells = new Array();
        for (var k = 1; k < board.length - 1; k++) {
            for (var l = 1; l < board[0].length - 1; l++) {
                if (board[k][l] === 1)
                    emptyCells.push([k, l]);
            }
        }
    }
    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
    var ans = emptyCells[Math.round(Math.random() * emptyCells.length - 0.5)];
    var index = emptyCells.indexOf(ans);
    if (typeof index !== 'undefined') {
        emptyCells.remove(index);
    }
    return ans;
}

/**
 * @return {number}
 */
function GetKeyPressed() {
    if (keysDown[UserSettings['MovmentSettings']['Up']]) {
        return 1;
    }
    if (keysDown[UserSettings['MovmentSettings']['Down']]) {
        return 2;
    }
    if (keysDown[UserSettings['MovmentSettings']['Left']]) {
        return 3;
    }
    if (keysDown[UserSettings['MovmentSettings']['Right']]) {
        return 4;
    }
}
function compare(x, y) {
    if (x === y)
        return 0;
    if (x > y)
        return 1;
    return -1;
}

/**unfinished logics of ghosts */
function moveGhosts() {
    var compI;
    var compJ;
    ghosts.forEach(g => {
        compI = compare(g.i, pacman.i);
        compJ = compare(g.j, pacman.j);
        if (compI !== 0) {
            if (g.i - compI > 0 && g.i - compI < 21 && board[g.i - compI][g.j] !== 0)
                g.i -= compI;
            else if (g.j - compJ > 0 && g.j - compJ < 21 && board[g.i][g.j - compJ] !== 0)
                g.j -= compJ;
            else if (g.i + compI > 0 && g.i + compI < 21 && board[g.i + compI][g.j] !== 0)
                g.i += compI;
        } else {
            if (g.j - compJ > 0 && g.j - compJ < 21 && board[g.i][g.j - compJ] !== 0)
                g.j -= compJ;
            else if (g.j + compJ > 0 && g.j + compJ < 21 && board[g.i][g.j + compJ] !== 0)
                g.j += compJ;

        }
        g.updatePositions();
    });
}

function generateTimeCandy(){
    var emptyCell = findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 2.1;
}


function resetPacmanPosition(){
    var emptyCell = findRandomEmptyCell(board);
    while ((emptyCell[0] < 4 && (emptyCell[1] > 17 || emptyCell[1] < 4)) || (emptyCell[0] > 17 && emptyCell[1] < 4))
        emptyCell=findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 2;
    pacman.i=emptyCell[0];
    pacman.j=emptyCell[1];
    pacman.direction=(Math.random() * 4) | 0 + 1;
    pacman.updatePositions();
    keysDown = {};

}

function endGame(msg){
    clearIntervals();
    $("#hGameOver").text(msg);
    $('#gameOver').modal('toggle');
}

function pacmanIsDead() {
    if($("#lbAttempts").text()>1) {
        resetGhostPosition();
        resetPacmanPosition();
        $("#lbAttempts").text(($("#lbAttempts").text() - 1));
        score -= 10;
        clearIntervals();
        window.alert("Try Again");
        createIntervals();
    }

    else {

        endGame("You Lost!");
    }
}

function checkIfDead(){
    for(let i=0;i<ghosts.length;i++) {
        if (ghosts[i].i === pacman.i && ghosts[i].j === pacman.j) {
            return true;
        }
    }

    return false;
}
function drawGhosts() {
    ghosts.forEach(g => g.draw_ghost(context));

}
/**end unfinished logics */
function Draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clean board
    lblScore.value = score;
    // lblTime.value = time_elapsed;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var center = new Object();
            center.x = i * 30 + 15;
            center.y = j * 30 + 15;

            if (board[i][j] === 2) {

                pacman.draw(context);

            } else if (board[i][j] > 1 && board[i][j] < 2) {
                drawCandy(board[i][j] * 10 - 11, center.x, center.y);

            }
            else if( board[i][j] === 2.1){
                drawTimeCandy(i,j);
            }

            else if (board[i][j] === 0) {
                drawWall(center.x,center.y);
            }



        }
    }
    drawGhosts();


}
function drawWall(x,y){
    context.beginPath();
    context.rect(x - 15, y - 15, 30, 30);
    context.fillStyle = "grey"; //color
    context.fill();
}
function drawTimeCandy(i,j){
    let candy =new Image();
    candy.src="images//time.png";
    context.drawImage(candy, i*30, j*30,30,30);
}
function  createIntervals() {
    then = Date.now();
    interval = setInterval(UpdatePosition, 100);
    mouthInterval = setInterval(updateR, 100);
    timeInterval=setInterval(timeCountDown, 1);
    ghostInterval=setInterval(moveGhosts, 200);
    candyInterval=setInterval(updateCandy,100);
}
function  clearIntervals()
{
    window.clearInterval(interval);
    window.clearInterval(mouthInterval);
    window.clearInterval(timeInterval);
    window.clearInterval(ghostInterval);
    window.clearInterval(candyInterval);
}

function UpdatePosition() {
    board[pacman.i][pacman.j] = 1;
    var x = GetKeyPressed();

    if (x === 1) {
        if (pacman.j > 0 && board[pacman.i][pacman.j - 1] !== 0) {
            pacman.j--;

            pacman.direction = 4;
        }
    }
    if (x === 2) {
        if (pacman.j < 21 && board[pacman.i][pacman.j + 1] !== 0) {
            pacman.j++;
            pacman.direction = 2;
        }
    }
    if (x === 3) {
        if (pacman.i > 0 && board[pacman.i - 1][pacman.j] !== 0) {
            pacman.i--;
            pacman.direction = 3;
        }

    }
    if (x === 4) {
        if (pacman.i < 21 && board[pacman.i + 1][pacman.j] !== 0) {
            pacman.i++;
            pacman.direction = 1;
        }
    }

    pacman.updatePositions();
    if (checkIfDead()) {
        pacmanIsDead();
    }
    else {//not dead
        if (board[pacman.i][pacman.j] === 1.1) {
            score += 5;
            food_remain--;
        }
        else if (board[pacman.i][pacman.j] === 1.2) {
            score += 15;
            food_remain--;
        }
        else if (board[pacman.i][pacman.j] === 1.3) {
            score += 25;
            food_remain--;
        }
        else if (board[pacman.i][pacman.j] === 2.1)
        {
            timeLeft+=10000;
        }
        $("#lblScore").text(score);
        board[pacman.i][pacman.j] = 2;
        var currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 20 && time_elapsed <= 10) {
            pac_color = "green";
        }

        Draw();
        if (  food_remain <= 0) {
            endGame("we have a winner!!!!");
        }

    }//not dead
}

/*javascript */

var context, pacman,score, pac_color, start_time, time_elapsed, interval, attempts, counterR, then, timeLeft, r,
    sound_obj, ghosts, numOfghosts,xToCenter,yToCenter;
var board=[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

$(document).ready(function () {
    context = canvas.getContext("2d");
    sound_obj = document.getElementById("targetSound");
    pacman = new Pacman(0, 0, "yellow");
    attempts = 3;
    counterR = 0;
    timeLeft = 60000;
    r = 0;
});

function timeCountDown() {
    var now = Date.now();
    var delta = now - then;
    timeLeft -= delta;
    if (timeLeft <= 0)
        timeLeft = 0;
    lblTime.value = timeLeft / 1000;
    then = now;
}

function createGhost() {
    ghosts = new Array();
    for (var i = 0; i < numOfghosts; i++) {//change to input num
        if (i === 0) {
            var g = new ghost(getRandomColor, xToCenter, yToCenter);//change to color of choosing
            ghosts[i] = g;

        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Start(){
    var count=0;
    for (var i = 1; i < board.length-1; i++) {
        for (var j = 1; j < board.length-1; j++) {
            if(board[i][j]===1)
                count++;

        }
    }
    console.log(board.length);
    console.log(board[0].length);

}
function Start1() {
    $("#UserDetails").append("NAME: <label>" + CurrentUser.username + "</label>");
    board = new Array();
    score = 0;
    lbAttempts.innerText = attempts;
    // pac_color = "yellow";
    var cnt = 100;
    var food_remain = 50;
    var pacman_remain = 1;
    numOfghosts = 1;
    start_time = new Date();


    createGhost();
    for (var i = 0; i < board.length; i++) {
        //board[i] = new Array();
        for (var j = 0; j < 10; j++) {


                var randomNum = Math.random();
                if (randomNum <= 1.0 * food_remain / cnt) {
                    food_remain--;
                    board[i][j] = 1;
                } else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
                    pacman.i = i;
                    pacman.j = j;
                    pacman.direction = (Math.random() * 4) | 0 + 1;
                    pacman_remain--;
                    board[i][j] = 2;
                } else {
                    board[i][j] = 0;
                }
                cnt--;
            }

    }
    while (food_remain > 0) {
        var emptyCell = findRandomEmptyCell(board);
        board[emptyCell[0]][emptyCell[1]] = 1;
        food_remain--;
    }
    keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.code] = true;
    }, false);
    addEventListener("keyup", function (e) {
        keysDown[e.code] = false;
    }, false);
    sound_obj.addEventListener("canplaythrough", startSound, false);
    interval = setInterval(UpdatePosition, 100);
    mouthInterval = setInterval(function () {
        r = Math.abs(Math.sin(++counterR)) * 15 / 100;
    }, 100);
    then = Date.now();
    setInterval(timeCountDown, 1);
    setInterval(moveGhosts, 1);
}


function startSound() {
    console.log(sound_obj);
    sound_obj.play();
}

function findRandomEmptyCell(board) {
    var i = Math.floor((Math.random() * 9) + 1);
    var j = Math.floor((Math.random() * 9) + 1);
    while (board[i][j] !== 0) {
        i = Math.floor((Math.random() * 9) + 1);
        j = Math.floor((Math.random() * 9) + 1);
    }
    return [i, j];
}

/**
 * @return {number}
 */
function GetKeyPressed() {
    if (keysDown['ArrowUp']) {
        return 1;
    }
    if (keysDown['ArrowDown']) {
        return 2;
    }
    if (keysDown['ArrowLeft']) {
        return 3;
    }
    if (keysDown['ArrowRight']) {
        return 4;
    }
}

/**unfinished logics of ghosts */
function moveGhosts() {
    ghosts.forEach(g => {
        if (g.position.y - pacman.j > 0)
            tryToMove();


    });
}

function tryToMove() {

}

function checkIfDead() {
    return false;
}

/**end unfinished logics */
function Draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clean board
    lblScore.value = score;
    // lblTime.value = time_elapsed;
    var specialCandy = Math.random();
    var g = 0;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var center = new Object();
            center.x = i * 60 + 30;
            center.y = j * 60 + 30;
            if ((g = checkForGhost(i, j)) != -1) {
                ghosts[g].draw_ghost(context);

            }
            else {
                if (board[i][j] === 2) {
                    // context.beginPath();
                    // context.arc(center.x, center.y, 30, (0.15 - r) * Math.PI + (pacman.direction - 1) * Math.PI / 2, (1.85 + r) * Math.PI + (pacman.direction - 1) * Math.PI / 2); // half circle
                    // context.lineTo(center.x, center.y);
                    // context.fillStyle = pac_color; //color
                    // context.fill();
                    // context.beginPath();
                    // context.arc(center.x + ((1 - pacman.direction) * (pacman.direction % 2) + 1) * (15 - (pacman.direction % 2) * 10), center.y - ((pacman.direction - 4) * ((pacman.direction + 1) % 2) + 1) * (15 - ((pacman.direction + 1) % 2) * 10), 5, 0, 2 * Math.PI); // circle
                    // context.fillStyle = "black"; //color
                    // context.fill();

                } else if (board[i][j] === 1) {

                    context.beginPath();
                    context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                }

                else if (board[i][j] === 4) {
                    context.beginPath();
                    context.rect(center.x - 30, center.y - 30, 60, 60);
                    context.fillStyle = "grey"; //color
                    context.fill();
                }
                else if (board[i][j] === 5) {
                    context.beginPath();
                    context.arc(center.x, center.y, 25, 0, 2 * Math.PI); // circle
                    context.fillStyle = "green"; //color
                    context.fill();
                }
            }


        }
    }
    var RandX = Math.floor((Math.random() * 9) + 1);
    var RandY = Math.floor((Math.random() * 9) + 1);
    if (board[RandX][RandY] == 0) {
        var specialCandy = Math.random();
        if (specialCandy < 0.05) {
            center.x = RandX * 60 + 30;
            center.y = RandY * 60 + 30;
            context.beginPath();
            context.arc(center.x, center.y, 25, 0, 2 * Math.PI); // circle
            context.fillStyle = "green"; //color
            context.fill();
            board[RandX][RandY] = 5;
        }
    }
}

function checkForGhost(x, y) {

    for (var i = 0; i < ghosts.length; i++) {
        if (ghosts[i].locatedIn(x * 60 + 30, y * 60 + 30)) {
            return i;
        }
    }

    return -1;
}

function UpdatePosition() {
    board[pacman.i][pacman.j] = 0;
    var x = GetKeyPressed();

    if (x === 1) {
        if (pacman.j > 0 && board[pacman.i][pacman.j - 1] !== 4) {
            pacman.j--;
            pacman.direction = 4;
        }
    }
    if (x === 2) {
        if (pacman.j < 9 && board[pacman.i][pacman.j + 1] !== 4) {
            pacman.j++;
            pacman.direction = 2;
        }
    }
    if (x === 3) {
        if (pacman.i > 0 && board[pacman.i - 1][pacman.j] !== 4) {
            pacman.i--;
            pacman.direction = 3;
        }

    }
    if (x === 4) {
        if (pacman.i < 9 && board[pacman.i + 1][pacman.j] !== 4) {
            pacman.i++;
            pacman.direction = 1;
        }
    }
    if (checkIfDead()) {
    }
    else {//not dead
        if (board[pacman.i][pacman.j] === 1) {
            score++;
        }
        if (board[pacman.i][pacman.j] === 5) {
            score += 5;
        }


        board[pacman.i][pacman.j] = 2;
        var currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 20 && time_elapsed <= 10) {
            pac_color = "green";
        }
        if (score >= 50) {
            window.clearInterval(interval);
            window.alert("Game completed");
        } else {
            Draw();
        }
    }//not dead
}

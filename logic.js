/*javascript */

var context, pacman, score, pac_color, start_time, time_elapsed, interval, attempts, counterR, then, timeLeft, r,
    sound_obj, ghosts, numOfghosts, xToCenter, yToCenter, food, candyColor, empyCells;
var board = [
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

$(document).ready(function () {
    context = canvas.getContext("2d");
    sound_obj = document.getElementById("targetSound");
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
    $("#UserDetails").append("NAME: <label>" + CurrentUser.username + "</label>");

    score = 0;
    lbAttempts.innerText = attempts;
    // pac_color = "yellow";
    var cnt = 350;
    food = 60;
    var food_remain = food;
    numOfghosts = 2;
    start_time = new Date();
    candyColor = ["black", "green", "red"];

    createGhost();
    generateCandies(cnt, food_remain);
    generatePacman();


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
    setInterval(moveGhosts, 100);
}


function startSound() {
    //console.log(sound_obj);
    sound_obj.play();
}

function findRandomEmptyCell(board) {
    if (typeof empyCells === 'undefined') {
        empyCells = new Array();
        for (var k = 1; k < board.length - 1; k++) {
            for (var l = 1; l < board[0].length - 1; l++) {
                if (board[k][l] === 1)
                    empyCells.push([k, l]);
            }
        }
    }
    var ans = empyCells[Math.round(Math.random() * empyCells.length - 0.5)];
    var index = empyCells.indexOf(ans);
    if (typeof index !== 'undefined') {
        empyCells.splice(index, 1);
    }
    return ans;

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



function pacmanIsdead() {


}

function checkIfDead() {
    ghosts.forEach(g => {
        if (g.position.x === pacman.position.x && g.position.y === pacman.position.y) {
            console.log("hoo");
            return true;
        }
    });
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
    var specialCandy = Math.random();
    var g = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var center = new Object();
            center.x = i * 30 + 15;
            center.y = j * 30 + 15;
            // if ((g = checkForGhost(center.x,  center.y)) != -1) {
            //     ghosts[g].draw_ghost(context);
            // }

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
                pacman.draw(context);

            } else if (board[i][j] > 1 && board[i][j] < 2) {
                drawCandy(board[i][j] * 10 - 11, center.x, center.y);

            }

            else if (board[i][j] === 0) {
                context.beginPath();
                context.rect(center.x - 15, center.y - 15, 30, 30);
                context.fillStyle = "grey"; //color
                context.fill();
            }
            // else if (board[i][j] === 5) {
            //     context.beginPath();
            //     context.arc(center.x, center.y, 25, 0, 2 * Math.PI); // circle
            //     context.fillStyle = "green"; //color
            //     context.fill();
            // }


        }
    }
    drawGhosts();

    // var RandX = Math.floor((Math.random() * 9) + 1);
    // var RandY = Math.floor((Math.random() * 9) + 1);
    // if (board[RandX][RandY] == 0) {
    //     var specialCandy = Math.random();
    //     if (specialCandy < 0.05) {
    //         center.x = RandX * 60 + 30;
    //         center.y = RandY * 60 + 30;
    //         context.beginPath();
    //         context.arc(center.x, center.y, 25, 0, 2 * Math.PI); // circle
    //         context.fillStyle = "green"; //color
    //         context.fill();
    //         board[RandX][RandY] = 5;
    //     }
    // }
}

function checkForGhost(x, y) {

    for (var i = 0; i < ghosts.length; i++) {
        if (ghosts[i].locatedIn(x, y)) {
            return i;
        }
    }

    return -1;
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
        pacmanIsdead(); //TODO
    }
    else {//not dead
        if (board[pacman.i][pacman.j] === 1.1) {
            score += 5;
        }
        else if (board[pacman.i][pacman.j] === 1.2) {
            score += 15;
        }
        else if (board[pacman.i][pacman.j] === 1.3) {
            score += 25;
        }

        board[pacman.i][pacman.j] = 2;
        var currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 20 && time_elapsed <= 10) {
            pac_color = "green";
        }
        if (score >= 150) {
            window.clearInterval(interval);
            window.alert("Game completed");
        } else {
            Draw();

        }
    }//not dead
}

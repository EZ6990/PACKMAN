function generateCandies(cnt,food_remain) {
    var fiveP = food * 0.6;
    var fifteenP = food * 0.3;
    var twentyfiveP = food * 0.1;

    for (var i = 1; i < board.length - 1; i++) {
        for (var j = 1; j < board[0].length - 1; j++) {
            var randomNum = Math.random();

            if (randomNum <= 1.0 * food_remain / cnt && board[i][j] === 1) {
                randomNum = Math.random();
                if (randomNum <= 0.6 && fiveP > 0) {
                    fiveP--;
                    board[i][j] = 1.1;
                }
                else if (randomNum <= 0.9 && fifteenP > 0) {
                    fifteenP--;
                    board[i][j] = 1.2;
                }
                else if (twentyfiveP > 0) {
                    twentyfiveP--;
                    board[i][j] = 1.3;
                }

            }
            cnt--;

        }
    }
    while (fiveP > 0) {
        var emptyCell = findRandomEmptyCell(board);
        board[emptyCell[0]][emptyCell[1]] = 1.1;
        fiveP--;
    }
    while (fifteenP > 0) {
        var emptyCell = findRandomEmptyCell(board);
        board[emptyCell[0]][emptyCell[1]] = 1.2;
        fifteenP--;
    }
    while (twentyfiveP > 0) {
        var emptyCell = findRandomEmptyCell(board);
        board[emptyCell[0]][emptyCell[1]] = 1.3;
        twentyfiveP--;
    }
}
function drawCandy(index, x, y) {
    context.beginPath();
    context.arc(x, y, 5+2*index, 0, 2 * Math.PI); // circle
    context.fillStyle = candyColor[index]; //color
    context.fill();
}
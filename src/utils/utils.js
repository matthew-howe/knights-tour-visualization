class utils {

    findMoves(pos) {
        // findmoves takes the [x, y] coordinates
        // of the knight and returns an array of valid
        // positions for the knight to move

        let movesArr = [
            [pos[0] - 1, pos[1] - 2],
            [pos[0] - 2, pos[1] - 1],
            [pos[0] + 1, pos[1] - 2],
            [pos[0] + 2, pos[1] - 1],
            [pos[0] - 2, pos[1] + 1],
            [pos[0] - 1, pos[1] + 2],
            [pos[0] + 1, pos[1] + 2],
            [pos[0] + 2, pos[1] + 1],
        ];
        let posMoves = movesArr.filter(move => {
            return move[0] >= 0 && move[1] >= 0 && move[0] < 8 && move[1] < 8;
        });
        return posMoves;
    }

    
    validMove(board, pos) {
        // validmove checks if the target square 
        // hasn't been visited yet
        return board[pos[0]][pos[1]] !== 1;
    }

        
    boardVisited(moves) {
        // checks if every square has been visited
        return moves.length === 63;
    }

    boardVisitedWarnsdorf(moves) {
        // adjusted for warnsdorf's moves length
        return moves.length === 65;
    }


    shuffle(array) {
        // shuffling utility
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    numOfEmpty( board, pos ) {
        let count = 0;
        let moves = this.findMoves(pos); 

        for (const move of moves) {
            if (this.validMove(board, move)) count++;
        }

        return count;
    }

    mapNumToCoords(num) {
        let y = Math.floor(num / 8);
        let x = num % 8;
        return [x, y]
    }

}

let util = new utils();
export default util;

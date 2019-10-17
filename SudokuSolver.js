/*
Write a function that will solve a 9x9 Sudoku puzzle. 
The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns),
and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);

==>> Should return <<==

[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/
function legal(solution, i, j, val) {
    for (var c = 0; c < 9; c++) {
        if (solution[i][c] === val) {
            return false;
        }
    }

    for (var r = 0; r < 9; r++) {
        if (solution[r][j] === val) {
            return false;
        }
    }

    var r = Math.floor(i / 3) * 3;
    var c = Math.floor(j / 3) * 3;
    // sub 3 x 3 contains 1 - 9
    for (var k = r; k < r + 3; k++) {
        for (var l = c; l < c + 3; l++) {
            if (val === solution[k][l]) {
                return false;
            }
        }
    }
    return true;
}

function sudokuSolver(solution, i, j) {
    console.log('i:' + i + ',j:' + j);
    if (i === 9) {
        i = 0;
        j = j + 1;
        if (j === 9) {
            return true; // we are done
        }
    }

    if (solution[i][j] > 0) {
        // fill the value down the row
        return sudokuSolver(solution, i + 1, j);
    }

    // sudoku value 
    for (var val = 1; val <= 9; val++) {
        // guess non-filled value
        if (legal(solution, i, j, val)) {
            solution[i][j] = val;
            if (sudokuSolver(solution, i + 1, j)) {
                return true;
            }
        }
    }
    // no valid value
    solution[i][j] = 0;
    return false;
}

function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9 
    var solution = JSON.parse(JSON.stringify(puzzle));
    if (sudokuSolver(solution, 0, 0)) {
        return solution;
    }
    return null;
}

/*
function sudoku(a, x=0, y=0) {
    function next(x, y) {
        if (++y == 9) (x++, y=0);
        return x==9 ? a : sudoku(a,x,y);
    }
    function getFree(x, y) {
        let [xx, yy] = [~~(x / 3) * 3, ~~(y / 3) * 3];
        let nums = a[x].concat(a[0].map((_,i)=>a[i][y])).concat(a.slice(xx,xx+3).reduce((p,c)=>p.concat(c.slice(yy,yy+3)), []));
        return [1,2,3,4,5,6,7,8,9].filter(v=>!nums.includes(v));
    }
    a = a.slice().map(x=>x.slice());
    return a[x][y] ? next(x,y) : getFree(x,y).reduce((ans,n)=>(a[x][y]=n, ans||next(x,y)), 0);
}
*/

/*
function sudoku(puzzle) {
  while (puzzle.some( l => l.some( p => p===0 ) ))  // while some unfilled pos.
    for (let y=0; y<9; y++)                         // scan whole board
      for (let x=0; x<9; x++)
        if (puzzle[y][x]===0) {                     // and with unfilled do:
          let p = [true,true,true,true,true,        // init possible digits
                   true,true,true,true,true];
          for (let i = 0; i<9; i++) {               // exclude all digits
            p[ puzzle[y][i] ] = false;              // found in same row
            p[ puzzle[i][x] ] = false;              // and column
          }
          for (let i=3*~~(x/3); i<3*(~~(x/3)+1); i++)    // exclude all
            for (let j=3*~~(y/3); j<3*(~~(y/3)+1); j++)  // digits in
              p[ puzzle[j][i] ] = false;                 // local 3x3 sqare
          if (p.reduce( (p,c) => p+(c?1:0) ) === 1) // if just one possible left
            puzzle[y][x] = p.indexOf(true);         // put it in current place
        }
  return puzzle;
}
*/

console.log('Sudoku', function () {
    var puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    var solution = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    it('Puzzle 1', function () {
        Test.assertEquals(JSON.stringify(sudoku(puzzle)), JSON.stringify(solution), "Incorrect solution for the following puzzle: " + JSON.stringify(puzzle));
    });
});
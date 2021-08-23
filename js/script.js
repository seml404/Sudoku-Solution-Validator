"use strict";


// VERSION 1

function validSolution(board) {
    // general function for checking arrays (both vertical, horizontal and array of cubes 9x9);
    function checkArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].reduce((sum, el) => sum + el) !== 45 || Array.from(new Set(arr[i])).length !== 9 || arr[i].filter((el) => el > 9).length > 0) {
                return false;
            }
        }
        return true;
    }
    //making array of vertival lines;
    let verticalLinesArr = [];
    for (let j = 0; j < board.length; j++) {
        verticalLinesArr[j] = [];
        for (let i = 0; i < board.length; i++) {
            verticalLinesArr[j].push(board[i][j]);
        }
    }
    //making array of cubes 9x9;
    let cubesArr = [];
    for (let i = 0; i < 9; i++) {
        cubesArr[i] = [];
    }

    function makeArrOfCubes(arr) {
        let startPosition = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i < 3) {
                startPosition = 0;
            } else if (3 <= i && i < 6) {
                startPosition = 3;
            } else if (6 <= i && i < 9) {
                startPosition = 6;
            }
            arr[i].forEach((el, index) => {
                if (index < 3) {
                    cubesArr[startPosition].push(el);
                } else if (3 <= index && index < 6) {
                    cubesArr[startPosition + 1].push(el);
                } else if (6 <= index && index < 9) {
                    cubesArr[startPosition + 2].push(el);
                }
            });
        }
    }
    makeArrOfCubes(board);

    // general check of all arrays
    return (checkArray(board) && checkArray(verticalLinesArr) && checkArray(cubesArr)) ? true : false;
}
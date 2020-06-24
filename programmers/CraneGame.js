/*
20200625
https://programmers.co.kr/learn/courses/30/lessons/64061
크레인 인형뽑기 게임
*/


function solution(board, moves) {

    class Stack {
        constructor() {
            this._arr = [];
        }
        push(item) {
            this._arr.push(item);
        }
        pop() {
            return this._arr.pop();
        }
        peek() {
            return this._arr[this._arr.length - 1];
        }
    
        empty() {
            return this._arr.length > 0 ? false : true;
        }
    }

    var answer = 0;
    const stack = new Stack();

    const height = Array.apply(null, Array(board.length)).map(Number.prototype.valueOf, board.length);
    for (var i in board) {
        for (var j in board[i]) {
            if (board[i][j] > 0) {
                if (height[j] > i) {
                    height[j] = Number(i);
                }
            }
        }
    }

    for (var i in moves) {
        const col = moves[i] - 1;        
        const row = height[col]++;
        if(row >= board.length) continue;
        const val = board[row][col];

        board[row].splice(col, 1, 0);

        if (stack.empty()) stack.push(val);
        else {
            if (stack.peek() == val) {
                answer += 2;
                stack.pop();                
            }
            else {
                stack.push(val);
            }
        }
    }

    return answer;
}




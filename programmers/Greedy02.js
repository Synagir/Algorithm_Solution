/*
20200625
https://programmers.co.kr/learn/courses/30/parts/12244
조이스틱
*/

function solution(name) {    
    var arr = [...name];
    var total = getAlphaBetNum(arr[0]);
    arr.splice(0,1,"A");
    var start = 0;
    while (isChanged()) {
        var move = 1;
        for (var i = 1; i < name.length; i++, move++) {
            if(arr[getIndex(start + i)] != "A"){
                start = getIndex(start + i);
                total += getAlphaBetNum(arr[start]) + move;
                arr.splice(start, 1, "A");
                break;
            }
            else if(arr[getIndex(start - i)] != "A"){
                start = getIndex(start - i);
                total += getAlphaBetNum(arr[start]) + move;
                arr.splice(start, 1, "A");
                break;
            }
        }
    }

    function isChanged() {
        for (var i in arr) {
            if (arr[i] != 'A') return true;
        }
        return false;
    }

    function getIndex(relIdx) {
        if (relIdx >= name.length) return 0;
        else if (relIdx < 0) return name.length - 1;
        return relIdx;
    }

    function getAlphaBetNum(a) {
        a = a.charCodeAt(0);
        if (a > 'N'.charCodeAt(0)) return 'Z'.charCodeAt(0) - a + 1;
        else return a - 'A'.charCodeAt(0);
    }

    return total;
}

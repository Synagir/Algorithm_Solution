/*
20200603
https://programmers.co.kr/learn/courses/30/parts/12263
N으로 표현
*/

function solution(N, number) {

    if(N == number) return 1;

    const expResult = [[N]];
    var seq_n = N;
    for (var i = 1; i < 9; i++) {
        var tmp_arr = [];
        for (var j = 0; j < i / 2; j++) {
            for (var m = 0; m < expResult[j].length; m++) {
                for (var n = 0; n < expResult[i - j - 1].length; n++) {
                    tmp_arr = calculate(tmp_arr, expResult[j][m], expResult[i - j - 1][n]);
                }
            }
        }
        seq_n += seq_n * 10;
        tmp_arr.push(seq_n);
        expResult.push(Array.from(new Set(tmp_arr)));
        if(expResult[i].indexOf(number) >=0 ) return i + 1;
    }

    function calculate(arr, val1, val2) {
        arr.push(val1 + val2);
        arr.push(val1 * val2);
        arr.push(val1 - val2);
        arr.push(val2 - val1);
        if (val2 != 0) arr.push(parseInt(val1 / val2));
        if (val1 != 0) arr.push(parseInt(val2 / val1));
        return arr;
    }

    return -1;
}

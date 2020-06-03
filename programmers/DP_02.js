/*
20200603
https://programmers.co.kr/learn/courses/30/parts/12263
타일 장식물
*/


console.log(solution(5));
function solution(N) {
    var a = 0;
    var b = 1;
    for (var i = 1; i < N; i++) {
        var temp = a + b;
        a = b;
        b = temp;
    }

    return b * 4 + a * 2;
}

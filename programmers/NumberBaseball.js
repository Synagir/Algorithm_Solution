/*200703
https://programmers.co.kr/learn/courses/30/lessons/42841
Number Baseball
*/

function solution(baseball) {

    for (var b in baseball) {
        baseball[b][0] = baseball[b][0].toString();
    }

    var count = 0;
    const length = baseball.length;
    for (var h = 1; h <= 9; h++) {
        for (var t = 1; t <= 9; t++) {
            if( h == t) continue;
            for (var o = 1; o <= 9; o++) {
                if( h == o || o == t) continue;
                var flag = false;
                for (var b in baseball) {
                    if (!isCorrectNumber(baseball[b], [h, t, o])) {
                        flag = true;
                        break;
                    }
                }
                if (!flag) count++;
            }
        }
    }


    function isCorrectNumber(statement, numArr) {
        var strike = 0;
        var ball = 0;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (statement[0][i] == numArr[j]) {
                    if (i == j) strike++;
                    else ball++;
                }
            }
        }

        return strike == statement[1] ? (ball == statement[2] ? true : false) : false;
    }

    return count;
}

/*
20200603
https://programmers.co.kr/learn/courses/30/parts/12263
정수 삼각형
*/

function solution(triangle) {
    const result = [triangle[0]];
    for (var i = 1; i < triangle.length; i++) {
        const arr = [];
        for (var j = 0; j < triangle[i].length; j++) {
            arr.push(
                (function () {
                    const num1 = triangle[i][j] + (function () { return j - 1 >= 0 ? result[i - 1][j - 1] : 0 })();
                    const num2 = triangle[i][j] + (function () { return j < result[i - 1].length ? result[i - 1][j] : 0 })();
                    return num1 > num2 ? num1 : num2;
                })()
            );
        }
        result.push(arr);
    }
    
    return result[result.length - 1].reduce((pre, value) => pre > value ? pre : value);
}

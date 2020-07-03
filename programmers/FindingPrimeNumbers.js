/*200703
https://programmers.co.kr/learn/courses/30/lessons/42839
Finding Prime Numbers
*/

function solution(numbers) {

    var count = 0;
    const numArr = [...numbers].map((v) => Number(v));
    const visited = Array.apply(null, new Array(numbers.length)).map(Boolean.prototype.valueOf, false);
    var combineNumbers = [];
    var output = [];

    for (var i = 1; i <= numArr.length; i++) {
        output.length = 0;
        backtrack(i, 0);
    }

    combineNumbers = [...new Set(combineNumbers)];

    for (var num of combineNumbers) {
        if (isPrime(num)) count++;
    }

    function backtrack(n, k) {
        if (n == k) {
            var num = 0;
            for (var i = 0; i < n; i++) {
                num *= 10;
                num += output[i];
            }
            combineNumbers.push(Number(num));
        }
        else {
            for (var i = 0; i < numArr.length; i++) {
                if(visited[i]) continue;
                visited[i] = true;
                output[k] = numArr[i];
                backtrack(n, k + 1);
                visited[i] = false;
            }
        }
    }

    function isPrime(n) {
        if (n < 2) return false;
        for (var i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    return count;
}

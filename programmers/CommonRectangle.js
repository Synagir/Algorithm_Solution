/*200701
https://programmers.co.kr/learn/courses/30/lessons/62048
멀쩡한 사각형
*/


/*
1. 최대 공약수를 구해서
2. 각 수를 나눈다.
3. 가로 X 세로 길이의 직사각형에서 
대각선이 지나가는 부분은 크기가 커져도 같으므로
4. 원래 직사각형의 타일 수 - (패턴 * GCD) = 결과
*/

function solution(w, h) {

    const gcd = (function Euclidean(a, b) {
        return a % b ? Euclidean(b, a % b) : b;
    })(w, h);

    const wg = w / gcd;
    const hg = h / gcd;

    // 패턴 타일 수
    // (wg * hg) - (wg - 1) * (hg - 1) = wg + hg - 1

    return  (w * h) - (wg + hg - 1) * gcd;
}

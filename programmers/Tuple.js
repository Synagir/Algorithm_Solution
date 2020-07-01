/*
20200625
https://programmers.co.kr/learn/courses/30/lessons/64065
튜플
*/

function solution(s) {
    const setArr = s.slice(2, s.length - 2).split('},{').sort(function (a, b) {
        return a.length < b.length ? -1 : 1;
    });

    const answer = [setArr[0]];

    for (var i = 1; i < setArr.length; i++) {
        const arr = setArr[i].split(',');
        answer.push(
            arr.filter(v => !answer.includes(v))[0]
        );
    }

    return answer.map(v => Number(v));
}

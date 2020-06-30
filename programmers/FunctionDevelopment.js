/*
200701
https://programmers.co.kr/learn/courses/30/lessons/42586
기능개발
*/


function solution(progresses, speeds) {
    
    const period = progresses.map((v,i) => {
        return Math.ceil((100 - v) / speeds[i]);
    })

    const count = [];

    period.reduce((t, c) =>{
        const length = t.length;
        if( length == 0 || t[length - 1] < c){
            t.push(c);
            count.push(1);
        }
        else count[count.length - 1]++;
        return t;
    }, [])

    return count;
}

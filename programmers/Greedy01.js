/*
20200610
https://programmers.co.kr/learn/courses/30/parts/12244
체육복
*/

function solution(n, lost, reserve) {

    const same = 
        lost.map((v1) =>
            reserve.find((v2)=>{
                if( v1 == v2 ) return v2;
            }));

    lost = lost.filter((v)=> !same.includes(v));
    reserve = reserve.filter((v)=> !same.includes(v));

    const r_lost = lost.filter((v) => {
        if( reserve.includes(v - 1)){
            reserve.splice(reserve.indexOf(v - 1), 1);
            return v;
        }
        if( reserve.includes(v + 1)){
            reserve.splice(reserve.indexOf(v + 1), 1);
            return v;
        }
    });

    return n - lost.length + r_lost.length;
}

/*
20200627
https://programmers.co.kr/learn/courses/30/lessons/64064
불량 사용자
*/

function solution(user_id, banned_id) {

    var answer = [];
    const b_len = banned_id.length;
    DFS(user_id, [], 0)

    function DFS(id, arr, k) {
        if (b_len == k) {
           var str = arr.sort().join(',');
           if( !answer.includes(str)) answer.push(str);
        }
        else {
            for (var i in id) {
                const val = id[i];
                if (isSimilar(val, banned_id[k])) {
                    id.splice(i, 1);
                    arr.push(val);
                    DFS(id, arr.slice(), k + 1)
                    arr.pop();
                    id.splice(i, 0, val);                    
                }
            }
        }
    }



    function isSimilar(id1, id2) {
        if (id1.length != id2.length) return false;
        for (var i = 0; i < id1.length; i++) {
            if (id1.charAt(i) != id2.charAt(i)) {
                if (id2.charAt(i) != "*") return false;
            }
        }

        return true;
    }
    
    return answer.length;
}

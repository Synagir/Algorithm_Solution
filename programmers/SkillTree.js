/*200702
https://programmers.co.kr/learn/courses/30/lessons/49993
스킬트리
*/

function solution(skill, skill_trees) {

    var count = 0;
    for (var i = 0; i < skill_trees.length; i++) {
        var s = 0;
        for (var j = 0; j < skill_trees[i].length; j++) {
            if( s == skill.length) break;
            const index = skill.indexOf(skill_trees[i].charAt(j));
            if(s < index) {count++; break;}
            else if(s == index) s++;
        }
    }
    return skill_trees.length - count;
}

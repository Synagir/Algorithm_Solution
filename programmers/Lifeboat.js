/*200704
https://programmers.co.kr/learn/courses/30/lessons/42885?
Lifeboat
*/

function solution(people, limit) {

    var count = 0;

    people = people.sort((a, b) => a - b);
    while (people.length > 2) {
        const person = people.pop();
        var i = 0;
        for (; i < people.length; i++) {
            if (person + people[i] > limit){
                break;
            }
        }
        
        if(i > 0) people.splice(i - 1, 1);
        count++;
    }

    if(people.length == 1) count++;
    else if(people.length == 2){
        if(people[0] + people[1] > limit) count +=2;
        else count++;
    }

    return count;
}

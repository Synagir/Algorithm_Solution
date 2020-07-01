/*200702
https://programmers.co.kr/learn/courses/30/lessons/42587
프린터
*/

function solution(priorities, location) {

    var count = 0;

    while (true) {
        const max_index = priorities.reduce((iMax, val, index, arr) => {
            return val > arr[iMax] ? index : iMax;
        }, 0);

        count++;
        if (max_index == location) break;

        const arr1 = priorities.slice(0, max_index);
        const arr2 = priorities.slice(max_index + 1);
        priorities = arr2.concat(arr1);

        if (location < max_index) location += arr2.length;
        else location -= (max_index + 1);
    }

    return count;
}

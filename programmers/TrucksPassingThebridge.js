/*200702
https://programmers.co.kr/learn/courses/30/lessons/42583
다리를 지나는 트럭
*/


function solution(bridge_length, weight, truck_weights) {
    const max_truck_count = truck_weights.length;
    var iTruck_start = 0;
    var iTruck_finish = 0;
    var time = 0;
    var current_weight = 0;
    var bridge = [];
    for (; iTruck_finish != max_truck_count; time++) {
        if (bridge[0] == bridge_length) {
            current_weight -= truck_weights[iTruck_finish++];
            bridge.shift(0);
            
        }

        if (bridge.length < bridge_length) {            
            if (current_weight + truck_weights[iTruck_start] <= weight) {
                bridge.push(0);
                current_weight += truck_weights[iTruck_start++];
            }
        }

        bridge = bridge.map((v) => v + 1);
    }
    return time;
}

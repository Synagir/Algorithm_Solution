/*200706
https://programmers.co.kr/learn/courses/30/lessons/42585
SteelBar
*/

function solution(arrangement) {

    var total_pipe = 0;
    var stack_pipe = 0;
    for(var p = 0; p < arrangement.length; p++){
        if( arrangement.charAt(p) == '('){
            if(isLaser(p)){
                total_pipe += stack_pipe;
                p++;
            }
            else{
                stack_pipe++;
            }
        }
        else{
            stack_pipe--;
            total_pipe++;
        }
    }

    function isLaser(index){
        return arrangement.charAt(index) =='(' && arrangement.charAt(index + 1) == ')' ? true : false;
    }

    return total_pipe;
}

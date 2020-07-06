/*200707
https://programmers.co.kr/learn/courses/30/lessons/60057
문자열 압축
*/

function solution(s) {

    var min_str_length = 1001;
    for (var len = 1; len <= s.length; len++) {
        var i = 0;
        var str = "";
        var pattern = "";
        var pCount = 0;
        for (; i <= s.length; i += len) {
            if(pattern == s.substr(i, len)) pCount++;
            else {
                str += (pCount <= 1? "" : pCount.toString()) + pattern;
                pattern = s.substr(i, len);
                pCount = 1;
            }
        }
        str += s.substr(i - len);
        if( min_str_length > str.length) min_str_length = str.length;
    }
    return min_str_length;
}

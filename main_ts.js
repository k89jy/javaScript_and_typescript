var str = "abc";
function add(a, b) {
    return a + b;
}
var userArr = [
    {
        name: 'Neo',
        age: 85,
        isValid: true
    }
];
// enum은 숫자 혹은 문자열 값 집합에 이름(member)을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 유용하다.
var Week;
(function (Week) {
    Week[Week["sun"] = 0] = "sun";
    Week[Week["mon"] = 1] = "mon";
    Week[Week["tue"] = 2] = "tue";
    Week[Week["wed"] = 3] = "wed";
    Week[Week["thu"] = 4] = "thu";
    Week[Week["fri"] = 5] = "fri";
    Week[Week["sat"] = 6] = "sat";
})(Week || (Week = {}));
console.log(Week.thu);

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
var obj = {};
var arr = [];
var func = function () { };
var nullValue = null;
var date = new Date();
var userA = {
    name: 'HEROPY',
    age: 123
};
var num = undefined;
var str = null;
var obj = undefined;
var arr = null;
var und = null;
var nul = undefined;
var voi = null;
//void는 일반적으로 값을 반환하지 않는 함수에서 사용합니다.
function hello(msg) {
    console.log("Hello " + msg);
}
//never은 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없습니다.
function error(message) {
    throw new Error(message);
}
var never = [];
never.push(30);
//2개 이상의 타입을 허용한느 경우, 이를 유니언이라고 합니다.
var union;
union = 'Hello type!';
union = 123;
union = false;
var heropy = {
    name: 'Heropy',
    age: 36,
    isValid: true // Error -  TS2322: Type '{ name: string; age: number; isValid: boolean; }' is not assignable to type 'IUser'.
};
var neo = {
    name: 'Neo',
    age: 85,
    isValid: true
};
//myfunc는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수
var myFunc;
myFunc = function (x, y) {
    return x + y;
};
var yourfunc;
//   yourfunc = function (){
//       console.log('Hello world')
//   }
//타입 추론: 명시적으로 타입 선언이 되어있지 않은 경우, 타입스크립트는 타입을 추론해 제공합니다.
var num = 12;
num = 'Hello type!';
//타입 단언 : 타입스크립가 타입 추론을 통해 판단할 수 있는 범주를 넘는 경우, 더이상 추론하지 않도록 지시할 수 있습니다.
function someFunc2(val, isNumber) {
    if (isNumber) {
        val.toFixed(2);
    }
}
someFunc2(5, true);
//제네릭은 재사용 목적으로 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공합니다.
function toArray1(a, b) {
    return [a, b];
}
toArray(1, 2);
toArray('1', '2');
// 유니언 방식
function toArray(a, b) {
    return [a, b];
}
toArray(1, 2); // Only Number
toArray('1', '2'); // Only String
toArray(1, '2'); // Number & String
var sum = function (arg1, arg2) {
    return arg1 + arg2;
};
//체이닝
//?. optional chaining 연산자
//   function toString(str: string | undefined){
//       return str.toString();
//   }
//   //type Assertion
//   function toString(str: string | undefined){
//       return (str as string).toString();
//   }
//optional chaining
function toString1(str) {
    return str === null || str === void 0 ? void 0 : str.toString();
}
// function (a:number, b: string){
//     const data = await fetch();
//     const json: IResponse = await data.json();
//     // if (json && json.data && json.data && json.data.body.length > 0) {
//         console.log(json?.data?.body[0]);
//     // }
// }
// interface IRes {
//     name: string,
//     age: number
// }
//  const foo = (obj:IRes) =>{
//     console.log(obj)
// }
// foo({name:"me",age:43})
var foo = null !== null && null !== void 0 ? null : 'hello nullish';
console.log(foo); //'heoolo nullish';
var bar = false !== null && false !== void 0 ? false : true;
console.log(bar); //false
var baz = 0 !== null && 0 !== void 0 ? 0 : 12; //9
console.log(baz);

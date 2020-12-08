var str = "abc";
function add(a, b) {
    return a + b;
}
//console.log(add(3,'abc'))//에러
//인터페이는 타입스크립트 여러 객체를 정의하는 일종의 규칙이며 구조이다.
// interface IUser {
//   // readonly 키워드를 사용하면 초기화된 값을 유지해야 하는 읽기 전용 속성을 정의할 수 있다.
//   readonly name: string;
//   age: number;
//   isValid: boolean;
// }
// let userArr: IUser[] = [
//   {
//     name: "Neo",
//     age: 85,
//     isValid: true,
//   },
// ];
// // enum은 숫자 혹은 문자열 값 집합에 이름(member)을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 유용하다.
// enum Week {
//   sun,
//   mon,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
// }
// console.log(Week.thu);
// let obj: object = {};
// let arr: object = [];
// let func: object = function () {};
// let nullValue: object = null;
// let date: object = new Date();
// interface IUser {
//   name: string;
//   age: number;
// }
// let userA: IUser = {
//   name: "HEROPY",
//   age: 123,
// };
// let num: number = undefined;
// let str: string = null;
// let obj: { a: 1; b: false } = undefined;
// let arr: any[] = null;
var und = null;
var nul = undefined;
var voi = null;
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
// function toString1(str: string | undefined) {
//   return str?.toString();
// }
// //   // Before
// // if (foo && foo.bar && foo.bar.baz) {}
// // // After-ish
// // if (foo?.bar?.baz) {}
// interface IResponse {
//   code: number;
//   data: {
//     header: {};
//     body: { id: string; title: string }[];
//   };
// }
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
// const foo = null ?? "hello nullish";
// console.log(foo); //'heoolo nullish';
// const bar = false ?? true;
// console.log(bar); //false
// const baz = 0 ?? 12; //9
// console.log(baz);
function toArray5(a, b) {
    return [a, b];
}
console.log(toArray5(1, 2));
function toArray6(a, b) {
    return [a, b];
}
console.log(toArray6(1, 2));

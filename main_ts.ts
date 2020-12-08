let str: string = "abc";

function add(a: number, b: number) {
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

let und: undefined = null;

let nul: null = undefined;
let voi: void = null;

//void는 일반적으로 값을 반환하지 않는 함수에서 사용합니다.

// function hello(msg: string): void {
//   console.log(`Hello ${msg}`);
// }

// //never은 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없습니다.

// function error(message: string): never {
//   throw new Error(message);
// }
// const never: [] = [];
// never.push(30);

// //2개 이상의 타입을 허용한느 경우, 이를 유니언이라고 합니다.

// let union: string | number;
// union = "Hello type!";
// union = 123;
// union = false;

// // 기존 타입들이 조합 가능하다면 인터섹션을 활용할 수 있습니다.
// interface IUser {
//   name: string;
//   age: number;
// }
// interface IValidation {
//   isValid: boolean;
// }
// const heropy: IUser = {
//   name: "Heropy",
//   age: 36,
//   isValid: true, // Error -  TS2322: Type '{ name: string; age: number; isValid: boolean; }' is not assignable to type 'IUser'.
// };
// const neo: IUser & IValidation = {
//   name: "Neo",
//   age: 85,
//   isValid: true,
// };

// //myfunc는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수

// let myFunc: (arg1: number, arg2: number) => number;
// myFunc = function (x, y) {
//   return x + y;
// };

// let yourfunc: () => void;

//   yourfunc = function (){
//       console.log('Hello world')
//   }

//타입 추론: 명시적으로 타입 선언이 되어있지 않은 경우, 타입스크립트는 타입을 추론해 제공합니다.

// let num = 12;

// num = "Hello type!";

// //타입 단언 : 타입스크립가 타입 추론을 통해 판단할 수 있는 범주를 넘는 경우, 더이상 추론하지 않도록 지시할 수 있습니다.

// function someFunc2(val: string | number, isNumber: boolean) {
//   if (isNumber) {
//     (val as number).toFixed(2);
//   }
// }

// someFunc2(5, true);

// //제네릭은 재사용 목적으로 함수나 클래스의 선언 시점이 아닌, 사용 시점에 타입을 선언할 수 있는 방법을 제공합니다.

// function toArray1(a: number, b: number): number[] {
//   return [a, b];
// }
// toArray(1, 2);
// toArray("1", "2");
// // 유니언 방식
// function toArray(a: number | string, b: number | string): (number | string)[] {
//   return [a, b];
// }
// toArray(1, 2); // Only Number
// toArray("1", "2"); // Only String
// toArray(1, "2"); // Number & String

//   function toArra1y<T>(a:T, b:T):T[]{
//       return [a,b];
//   }

//   toArray<number>(1,2);
//   toArray<string | number>(1,'2');

//typescript의 인터페이슨느 함수의 인터페이스를 정의할 수도 있다.

interface numberOperation {
  (arg1: number, arg2: number): number;
}

const sum: numberOperation = (arg1: number, arg2: number): number => {
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

function toArray5(a: number, b: number): number[] {
  return [a, b];
}

console.log(toArray5(1,2))

function toArray6(a:number | string, b :number | string) :( number | string)[]{
    return [a,b]
}

console.log(toArray6(1,2))

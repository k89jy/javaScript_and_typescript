//let const 와 var의 차이
//let과 const는 함수 스코프를 따르지 않고 블록 스코프를 따른다

// if(true){
//     var x = 3;
// }
// console.log(x)  // 3 

// if(true){
//     const y = 3;
// }
// console.log(y) // undefined


// //에러가 발생하지 않는다.
//     console.log(x);
//     var x = 10 
// //에러가 발생한다.
//     console.log(z)
//     const z = 10;



// //const는 주소값을 고정한다. 즉 객체나 배열의 요소르르 바꾸는 것은 막지 않는다.
//     const c = [1, 2, 3];
//     c[0] = 4;
//     c; // [4, 2, 3]
//     const d = {name: 'Zero'};
//     d.name = 'One';
//     d; // {name: 'One'} 

// //함수 관련

// const func2=(msg='hello')=>{
//     console.log(msg)
// };

// func2()


// // rest라고 하고 x를 제외한 나머지 인자들은 y 배열로 만드는 것이다. rest는 마지막 인자로 와야한다.
// const func4 = (x, ...y)=> {
//     console.log(y.length)
// }

// func4(1,2,3,4)

// //spread는 배열을 여러 인자로 만들어 주는 것입니다.
// var array = [1, 2, 3];
// var func5 = function(x, y, z) {
//     console.log(x + y + z);
//   };

// func5(...array)

// //template 문자열
// var a = 3;
// var b = 'hi';
// var object = {
//   c: 'friends'
// };
// var string = b + ', my ' + a + ' ' + object.c; // 'hi, my 3 friends'

// //대신

// var str = `${b}, my ${a} ${object.c}`

// console.log(str)

// //class
// class Human{
//     constructor(type='human'){
//         this.type = type;
//     }

//     static isHuman(human){
//         return human instanceof Human;
//     }
//     breath(){
//         console.log('breate')
//     }
// }

// class Zero extends Human{
//     constructor(type, firstname, lastName){
//         super(type);
//         this.firstname = firstname;
//         this.lastName = lastName;
//     }

//     sayname(){
//         super.breath();
//         console.log(`${this.firstname} ${this.lastName}}`)
//     }
// }

// const newZero = new Zero('human','Zero','cho');
// Human.isHuman(newZero)


// for(var i in 'string'){console.log(i)}
// for(var i of 'string'){console.log(i)}

// let array1 = [3,5,7]

// for(let j of array1){console.log(j)}

//promise all

let p1 = Promise.resolve('zero'); // new Promise 없이 성공한 Promise 객체를 만드는 방법
let p2 = Promise.resolve('nero');
let p3 = Promise.reject('error'); // new Promise 없이 실패한 Promise 객체를 만드는 방법

//promise.all은 메소드로 여러 프로미스 객체들을 한번에 모아서 처리할 수 있습니다.
Promise.all([p1,p2,p3])
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})


const functionExpression = async function(){
    console.log('함수 표현식')
};
const arrowFunction = async()=>{
    console.log('화살표 함수')
}
const IIFE = (async()=>{console.log('즉시 실행 함수 표현식')})();

const { d, g, ...rest2 } = { d: 4, e: { f: 6 }, g: 7, h: 8 }
console.log(rest2);
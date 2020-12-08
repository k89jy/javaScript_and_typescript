let str: string = "abc"

function add(a: number, b:number){
    return a + b;
}

//console.log(add(3,'abc'))//에러

interface IUser {
    name:string,
    age:number,
    isValid:boolean
}

let userArr: IUser[] = [
    {
        name:'Neo',
        age:85,
        isValid:true
    }
]

// enum은 숫자 혹은 문자열 값 집합에 이름(member)을 부여할 수 있는 타입으로, 값의 종류가 일정한 범위로 정해져 있는 경우 유용하다.

enum Week{
    sun,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat
}

console.log(Week.thu)
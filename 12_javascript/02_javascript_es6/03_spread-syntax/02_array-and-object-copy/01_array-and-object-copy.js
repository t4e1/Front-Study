/* 01. array-and-object-copy (스프레드 문법을 이용한 배열 및 객체 복사) */

/* 1. 배열 복사 */
let arr = [10, 30, 20];
let arrCopy = [...arr];     // 깊은 복사(새로운 배열 객체를 만든다)
// let arrCopy = arr;       // 얕은 복사(주소값 참조)

console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);

/* 2. 객체 복사 */
// 프로퍼티를 변경시킬 목적으로 프로퍼티명과 변수명을 일치시켜서 프로퍼티를 변경시켜 복사할 수 있다. 
let obj = {name: '홍길동', age: 20, addr: '서울시', hobby: ['축구', '농구']};

let objCopy = {...obj};     // 객체의 완전 복사 

/* 추가적으로 나머지 연산자 개념으로 활용도 가능하다. */
// let age = 30;
// let name = '강감찬'
// let ojbCopy = {...obj, age, name};     // 객체의 복사(나머지 연산자)

console.log(obj);
console.log(ojbCopy);
console.log(obj === ojbCopy);


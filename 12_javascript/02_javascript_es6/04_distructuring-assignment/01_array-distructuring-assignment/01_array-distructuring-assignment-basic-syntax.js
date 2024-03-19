/* 01. array-distructuring-assignment-basic-syntax (배열 구조 분해 할당 문법) */
/* 구조 분해 할당을 사용해 배열이나 객체를 각각의 변수로 '분해'하여 연결(할당)할 수 있다. */

let nameArr = ['gildong', 'hong'];
// let firstName = nameArr[0];
// let lastName = nameArr[1];

let [firstName, lastName] = nameArr;
console.log(firstName, lastName);

// let [firstName2, lastName2] = 'Saimdang Shin'.split(' ');
let [firstName2, lastName2] = 'Saimdang Shin'.match(/[a-z]+/gi);
console.log(firstName2, lastName2);

let [fiartNamr3, ,lastName3] = ['firstName', 'middleName', 'lastName'];
console.log(fiartNamr3,lastName3);
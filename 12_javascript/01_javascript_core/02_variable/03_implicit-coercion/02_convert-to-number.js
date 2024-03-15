/* 02. convert-to-number(숫자 타입으로 변경) */

console.log('====================== 숫자 타입으로 변경 =======================');

/*
    더하기를 제외한 산술 연산자는 피연산자들이 숫자여야 성립하므로 피연산자들을 숫자 타입으로 
    암묵적으로 변환다다. 
 */
console.log(10 - '5');
console.log(10 / '5');
console.log(10 * '5');
console.log(10 % 'Javascript');
console.log(10 > '5');

// 뭔가 비워져있는 값(빈 문자열, 빈 배열, false)이나 false같은 값들은 0으로 처리를 하고, true는 1로 반환한다.  
console.log(+'');
console.log(+'1');
console.log(+'Javascript');
console.log(+true);     // true = 1, false = 0 , null = 0 (null 은 falsy한 값이다)
console.log(+false);
console.log(+null);
console.log(+undefined);
// console.log(+Symbol());      에러 발생
console.log(+{});
console.log(+[]);
console.log(+function() {});
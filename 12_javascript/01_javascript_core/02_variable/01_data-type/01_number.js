/*
  data-type은 값의 종류를 말하며 자바스크립트(ES6)기준으로 7개의 데이터 타입이 있다. 
  (number, string, boolean, undefined, null, symbol, object)을 제공한다.
*/

/* 01. 숫자 타입 */
/* 정수, 실수, 음수 모두 숫자(number)타입이다. (내부적으는는 실수로만 인식) */
var integer = 10;
var double = 5.5;
var negative = -10;

console.log(typeof integer);
console.log(typeof double);
console.log(typeof negative);

console.log(10 / 4); // 기본형은 실수형이기 때문에 10/4라 해도 내부적으로는 10.0/4.0 이라 받아들인다 생각한다. 

/* 
  숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다. 
  Infinity: 양의 무한대 
  -Infinity: 음의 무한대 
  NaN: 산술 연산 불가(not-a-number)
*/
console.log(10 % 0); 
console.log(10 % -0); 
console.log(1 * '문자열');  // 문자열은 홀따옴표(') 또는 쌍따옴표(") 모두 가능하다. 


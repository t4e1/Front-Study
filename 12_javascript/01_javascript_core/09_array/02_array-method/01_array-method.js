/* 01. array method(배열 메소드) */

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

/* indexOf */
// 왼쪽 -> 오른쪽으로 찾으며 처음 찾는 값을 반환한다. 없는 값을 찾을 때는 -1이 나옴 
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);   // 0 
console.log(`foodList.indexOf('사과'): ${foodList.indexOf('사과')}`);   // -1

/* includes */
// 포함하고 있는지 결과를 boolean 값으로 반환해준다
console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`);   // true
console.log(`foodList.includes('사과'): ${foodList.includes('사과')}`);   // false

const chinesFood = ['짜장면', '짬뽕', '탕수육'];

/* push */
// 배열에 값을 추가할 수 있다. (기본적으로 제일 뒤에 추가 된다)
chinesFood.push('팔보채');
chinesFood.push('양장피');

console.log(`push 결과 : ${chinesFood}`);   // 짜장면,짬뽕,탕수육,팔보채,양장피


/* pop */
// 배열의 값을 제거할 수 있다. (기본적으로 제일 뒤에 내용이 날아간다) + 제거한 값을 반환해준다
// chinesFood.pop();
console.log(`chineFood.pop(): ${chinesFood.pop()}`);    // chineFood.pop(): 양장피
console.log(`pop 후: ${chinesFood}`);   // 짜장면,짬뽕,탕수육,팔보채

const chickenList = ['양념치킨', '후라이드', '파닭'];

/* unshift */
// 배열에 값을 추가할 수 있다. (앞에서부터 쌓인다)
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘치킨')}`);

console.log(`unshift 후: ${chickenList}`);   // unshift 후: 마늘치킨,간장치킨,양념치킨,후라이드,파닭

/* shift */
// 배열에 값을 제거할 수 있다. (앞에서부터 제거한다 + 반환한다.)
console.log(`chickenList.shift(): ${chickenList.shift()}`); // chickenList.shift(): 마늘치킨

console.log(`unshift 후: ${chickenList}`);  // unshift 후: 간장치킨,양념치킨,후라이드,파닭

/* concat : 두 개 이상의 배열을 결합하여 새로운 배열을 반환(결합 순서 유의미) */
// 배열을 합할 수 있다. 배열을 합칠 때는 기준을 잡는것이 중요하다. 
const idol1 = ['서태지와 아이돌', '소녀시대'];
const idol2 = ['HOT', '젝스키스'];
const idol3 = ['핑클', '블랙핑크'];

console.log(`idol1 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);  // idol1 기준으로 idol2 배열을 concat: 서태지와 아이돌,소녀시대,HOT,젝스키스
console.log(`idol1 기준으로 idol2 배열을 concat: ${[...idol1,...idol2]}`);  // ...은 ES6 문법으로 배열의 요소를 나열하라는 스프레드 연산자이다. 
console.log(`idol3를 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1, idol2)}`);

/* slice: 배열의 요소 선택 잘라내기 */
/* splice: 배열의 index 위치의 요소 제거 및 추가 */
const front = ['HTML', 'CSS', 'JavaScript', 'Vue.js'];
console.log(`front.slice(): ${front.slice(1, 3)}`);  // CSS, JavaScript  : slice(n, m) : n부터 m-1까지의 배열을 잘라낸다. 
console.log(`slice() 후 원본 : ${front}`);  // slice() 후 원본 : HTML,CSS,JavaScript,Vue.js : 실제 원본에는 영향을 주지 않는다. 

/* splice(인덱스, 제거할 길이, 추가할 값1, 추가할 값2, ..., 추가할 값 n) */
console.log(`front.splice(3, 1, "JDBC"): ${front.splice(3, 1, "JDBC")}`);  // 
// console.log(`front.splice(3, 1, "JDBC"): ${front.splice(2, 1, "JDBC")}`);  // HTML,CSS,JDBC,Vue.js : 뒤에 추가되는것이 아니라 제거된 위치에 추가된다. 
console.log(`splice() 후 원본 : ${front}`);

/* join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환 */
const snackList = ['사탕', '초콜렛', '껌', '마이쮸'];
console.log(`snackList.join(): ${snackList.join()}`); // 사탕,초콜렛,껌,마이쮸
console.log(`snackList.join(): ${snackList.join('/')}`); // 사탕/초콜렛/껌/마이쮸
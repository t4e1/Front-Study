/* 01. short-circuit-evaluation(논리 연산자) */

/* 
    단축 평가 구문: 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것 
*/

/* 1. OR의 경우 */
console.log('apple' || 'banana');   // true || true 인 셈이다.
console.log('banana' || '');
console.log('' || 'orange');
console.log('' || '');
console.log('' || false);

/* 2. AND의 경우 */
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);
console.log(false && false);

var num = 3;

// if(num % 2 == 0 ) {
//     console.log('짝수입니다.');
// } else {
//     console.log('홀수입니다.');
// }

/* 단축 평가 구문을 활용하여 같은 결과를 얻을 수 있다. */
/* 
    && : 왼쪽의 조건식이 맞으면 오른쪽이 실행  
    || : 왼쪽의 조건식이 틀리면 오른쪽이 실행
*/

console.log('========');
num % 2 == 0 && console.log('짝수입니다.');     // && 앞이 false이므로 판단의 근거가 num % 2 가 되게 된다. 그러므로 바로  
num % 2 == 0 || console.log('홀수입니다.');     // num = 1일 때 1 % 2 = 0이 아니므로(false) '||' 다음 조건까지 확인하게 된다. 이후 truthy한 console.log('홀수입니다');가 판단의 근거로 반환된다. 

// false 가 나올 때와 묵무것도 출력되지 않을 떄의 차이를 모르겠다. 
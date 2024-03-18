/* 02. method */
/* 자바 스크립트의 함수는 객체이다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var name = '달마시안';

var dog  = {
    name: '뽀삐',                   // 객체가 가진 속성을 프로퍼티라 부른다. 
    eat: function(food) {           // 함수를 가진 프로퍼티를 메소드라고 부른다. 
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);     // 메소드에서의 'this'는 메소드를 호출한 객체이다.
        console.log(`${name}(은)는 ${food}를 맛있게 먹어요.`);     // this.을 붙이지 않으면 전역 변수를 뜻한다. 

        return '잘 먹었네';
    }
}

console.log(dog.eat);
console.log(dog.eat('고구마'));



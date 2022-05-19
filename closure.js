// JS Closure

// case 1
// 내부 함수에서 외부함수의 변수 사용
function outerFunction(){
    const a = 10;
    const innerFunction = () => console.log(a);
    return innerFunction;
}
const fnOperator = outerFunction(); // outerFunction 실행 후 종료되어 컨텍스트가 소멸됨.

// 외부함수 내의 변수는 이를 필요로 하는 내부함수가 하나 이상 존재하는 경우 계속 유지된다. (복사본이 아닌 실제 변수에 접근함)
fnOperator(); // a 변수가 사라지지 않고 10을 출력함

// case 2
// 자바스크립트에서 함수는 어디서 호출하는지가 아니라 어디서 선언 했느냐에 따라 상위 스코프가 결정 된다.
const b = 1; // global b 변수 생성

function first(){
  const b = 10; // first 함수의 지역 변수 생성
  second(); // 10이 출력 될 것 같지만 1이 출력 됨
}

// 왜냐하면 second 함수는 global에서 선언했기 때문에 상위 스코프가 global이기 때문이다.
// 함수를 어디서 호출 했는지는 중요하지 않다...!!!
function second(){
    console.log(b);
}


const toggleBtn = document.querySelector('.toggle');
const box = document.querySelector('.box');

let toggle = (() => {
    let isShow = true;
    return () => {
        box.style.display = isShow ? 'none' : 'block';
        isShow = !isShow;
    }
})()
toggleBtn.onclick = toggle;


const plusBtn = document.querySelector('.plus');
const plusNum = document.querySelector('.number');

let plusNumber = (() => {
    let num = 0;
    return () => {
        ++num;
        plusNum.innerHTML = num;
    }
})()
plusBtn.onclick = plusNumber;
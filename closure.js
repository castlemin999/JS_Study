// JS Closure
function outerFunction(){
    const x = 10;
    const innerFunction = () => console.log(x); // 내부 함수에서 외부함수의 변수 사용
    return innerFunction;
}
const fnOperator = outerFunction(); // outerFunction 실행 후 종료되어 컨텍스트가 소멸됨.

// 외부함수 내의 변수는 이를 필요로 하는 내부함수가 하나 이상 존재하는 경우 계속 유지된다. (복사본이 아닌 실제 변수에 접근함)
fnOperator(); // x 변수가 사라지지 않고 10을 출력함


const toggleBtn = document.querySelector('.toggle');
const box =  document.querySelector('.box');

let toggle = (()=>{
    let isShow = false;
    return ()=>{
        box.style.display = isShow ? 'block' : 'none'
        isShow = !isShow;
    }
})()

toggleBtn.onclick = toggle;

console.log(box)
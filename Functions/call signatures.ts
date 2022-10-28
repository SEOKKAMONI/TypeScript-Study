// function add(a:number, b:number) {

// }

// const add = (a:number, b:number) => {

// }
// 보통은 위에 처럼 인자값에다가 타입을 하나하나 지정해야 하지만

// 함수의 콜 시그니쳐를 쓰면 아래 처럼 타입 지정과 함수 구현 두가지를 분리하여 사용 할 수 있다
type Add = (a:number, b:number) => number;

const add:Add = (a,b) => a + b; 
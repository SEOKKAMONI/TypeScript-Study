// 오버로딩은 함수가 여러개의 콜 시그니처를 가지고 있을 때 발생시킴
// 오버로딩은 여러 콜 시그니처가 있는 함수일 뿐임
// type Add = {
//     (a:number, b:number) : number;
//     (a:number, b:string) : number;
// }

// const add:Add = (a,b) => {
//     if(typeof b == "string") return a
//     return a + b
// }  


// string을 보낼 수 있거나 Config 객체를 보내는 경우
// 일상에서는 next js 라우터랑 오버로딩은 연관 되어 있음 페이지를 이동시켜주는것인데
// 오버로딩으로 구현해보면 아래와 같다

// type Config = {
//     path: string,
//     state: object
// }

// type Push = {
//     (path:string):void
//     (config: Config): void
// }

// const push:Push = (config) => {
//     if(typeof config == "string") console.log(config)
//     else console.log(config.path, config.state)
// }

// 다른 여러개의 argument를 가지고 있을때 발생하는 효과

type Add = {
    (a: number,b: number):number // 아래와 파라미터의 개수가 다름
    (a: number, b: number, c: number): number
}

const add:Add = (a,b,c?:number) => { // 두개의 콜 시그니처 파라미터의 개수가 다르고 우리는 return a, b 만 해주고 있을때는 
    // c?:number 을 통해 c가 아마 number 타입일 것 이다 라고 추가적인 타입을 지정해줘야 에러가 나지 않음 c는 선택사항이 되는것
    if(c) return a + b +c
    return a + b
}

add(1,2) // 이렇게 넣어도 잘 작동하고
add(1,2,3) // 3개를 넣어도 잘 작동함
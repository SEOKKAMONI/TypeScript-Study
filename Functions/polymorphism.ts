// 배열을 받고 그 배열의 결과를 print 해주는 함수

type SuperPrint = {
    // (arr: number[]):void 
    // (arr: boolean[]):void
    // 그래서 이렇게 다 정의 해주는게 좋은 방법이 아니니 우리는 제너릭을 씀
    // 제너릭은 들어올 확실한 타입을 알지 못할때 씀

    <TypePlacholder>(arr:TypePlacholder[]):void // <아무이름이나>
    // 이게 제네릭을 받는다는걸 알려주는 방법
    // 제네릭을 쓰게되면 타입스크립트에서 타입을 유추하고 유추한 타입으로 바뀜
    // number 로 유추 했다면 <number>(arr:number[]):void 이런식으로
}

const superPrint:SuperPrint = (arr) => {
    arr.forEach(item => console.log(item))
}

superPrint([1,2,3,4,5,6])
superPrint([true, false, true, false])
// superPrint(["a", "b", "c"]) 라고 할땐 콜 시그니처에 정의를 안해주었기에 에러가 뜸 그러므로 저 방법은 계속 정의를 해줘야하기에 좋은 방법이 아님
// superPrint([1, 2, true, false]) 라고 하여도 에러가 뜸

// 저렇게 제네릭을 쓰고 똑같은 방법으로 호출하면 에러가 안남
superPrint(["a", "b", "c"])
superPrint([1, 2, true, false])
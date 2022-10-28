// 실제로 제네릭을 어떻게 다루는지 살펴보기

// 제네릭 사용 예제 1
function superPrint<T>(a: T[]) {
    return a[0]
}

const a = superPrint([1,2,3,4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])


// 제네릭 사용 예제 2

type Player<E> = { // player 가 E 라는 제네릭을 받게 해줌
    name: string
    extraInfo: E
}

// const seokjin: Player<{favFood: string}> = {
//     name: "seokjin",
//     extraInfo: {
//         favFood: "kimchi"
//     }

// }

// 위에 코드와 똑같은 뜻 다만 이것은 콜 시그니처를 써 분리해준것
type SeokjinExtra = {
    favFood: string
}

type SeokjinPlayer = Player<SeokjinExtra>

const seokjin: SeokjinPlayer = { 
    name: "seokjin",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
}

// 제네릭 사용 예제 3
type a = Array<number>

let a:A = [1,2,3,4,5]

// 제네릭 사용 예제 4
function printAllNumbers(arr: Araay<number>) {

}
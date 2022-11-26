// type NickName = string;
// type Health = number;
// type Frineds = Array<string>

// type Player = {
//     nickname:NickName,
//     healthBar:Health
// }
// const seokjin:Player = {
//     nickname: "seokjin",
//     healthBar: 10
// }

// 이런식으로 대처명으로도 쓸 수 있음
// type Food = string;

// const kimchi:Food = "delicious";

// type Team = "red" | "blue" | "yellow"
// type Health = 1 | 5 | 10


// 아래 두개는 똑같음
// 둘다 오브젝트의 모양을 결정함

// 인터페이스는 오브젝트의 모양을 타입스크립트에게 설명해주기 위해 사용되는 키워드
// interface Player {
//     nickname:string,
//     team: Team,
//     health: Health
// }

// type Player = {
//     nickname:string,
//     team: Team,
//     health: Health
// }

// const seokjin:Player = {
//     nickname: "seokjin",
//     team: "yellow",
//     health: 10

// }

// interface를 써서 나타낸거
interface User {
    name:string
}

interface Player extends User {
}

const seokjin : Player = {
    name: "seokjin"
} 


// Type 을 써서 나타낸거
// type User = {
//     name:string
// }

// type Player = User & {
// }

// const seokjin : Player = {
//     name: "seokjin"
// } 
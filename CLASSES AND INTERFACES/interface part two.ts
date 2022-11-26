interface User {
    firstName: string,
    lastName: string,
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health:number
}
class Player implements User, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// 타입으로 인터페이스를 사용할 수 있음
function makeUser(user: User) {
    return "hi"
}

makeUser({
    firstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string"
})
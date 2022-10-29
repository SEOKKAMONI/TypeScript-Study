// 추상 클래스 abstract 오직 다른곳에서만 상속받을수만 있는 클래스
abstract class User {
    constructor (
        protected firstName:string,
        protected lastName:string,
        protected nickName:string
    ) {}
    abstract getNickName():void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickName) // protected 이기에 접근 가능 하지만 class 밖에서는 불가능
    }
}

const seokjin = new Player("kim", "seokjin", "김석진")

seokjin.getFullName()
// // 추상 클래스 abstract 오직 다른곳에서만 상속받을수만 있는 클래스
// // 또한 직접 인스턴스는 만들지 못하지만 그 클래스를 상속 할 수 있음
// abstract class User {
//     constructor (
//         protected firstName:string, // 만약 이것이 private 라면 Player 클래스는 User 클래스에서 상속하지 못함
//         protected lastName:string, // 만약 User 클래스를 상속하는 모든 클래스에서 사용 가능 하도록 만들고 싶다면 protected 를 사용
//         protected nickName:string // 만약 public 이면 class 밖에서도 사용 가능 
//     ) {}
//     abstract getNickName():void
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Player extends User {
//     getNickName() {
//         console.log(this.nickName) // protected 이기에 접근 가능 하지만 class 밖에서는 불가능
//     }
// }

// const seokjin = new Player("kim", "seokjin", "김석진")

// seokjin.getFullName()

// classes

abstract class User {
    constructor (
        // priavte은 User 클래스의 인스턴스나 메소에서 접근 할 수 있으나
        // getFullName 은 추상 클래스여서 인스턴스화 할 수 없다
        protected firstName:string,
        protected lastName:string,
        protected nickname:string
    ) {}
    abstract getNickName():void

    getFullName() { // 메소드 메소드란 클래스안에 존재하는 함수
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User { // Player 가 User를 상속한다고 알려주는것
    getNickName() {
        console.log(this.nickname);
        // private 일때는 접근 하지 못하지만
        // protected 일때는 접근 가능 !
    }
}

 const seokjin = new Player("seokjin", "kim", "김석진");


seokjin.getFullName();
 
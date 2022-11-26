// 다형성은 다른 모양의 코드를 가질 수 있게 해주는것
// 다형성읋 이룰 수 있는 방법은 제네릭을 사용하는것

interface SStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T) {
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>()

stringStorage.get("key")
stringStorage.set("hello", "how are you")

const booleanStorage = new LocalStorage<boolean>();

stringStorage.get("xxx");
booleanStorage.set("hello", true)
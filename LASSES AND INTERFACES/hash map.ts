// 해쉬 맵
// 사전에서 새 단어를 추가하고, 찾고, 단어를 삭제하는 메소드 만들거

type Words = { // 콜 시그니처
    [key:string]: string
}

class Dict {
    private words:Words // property 생성
    constructor() {
        this.words = {} // 수동으로 초기화
    }
    add(word: Word) { // 클래스를 타입처럼 쓸 수 있음
        if(this.words[word.term] === undefined) {
            this.words[word.term] == word.def;
        }
    }
    def(term:string) {
        return this.words[term]
    }
}

class Word {
    constructor (
        public term:string,
        public def:string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

dict.add(kimchi)
dict.def("kimchi")
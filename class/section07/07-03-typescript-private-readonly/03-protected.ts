// public, private, protected, readonly

class Monster2 {

    // power                => public, private, protected, readonly 중 1개라도 있으면 생략가능

    constructor(protected power) {
        // this.power = power  => public, private, protected, readonly 중 1개라도 있으면 생략가능
    }

    attack1 = () => {
        console.log("공격하자!!")
        console.log("내 공격력은 " + this.power + "야!!!") // 안에서 접근 가능
        this.power = 30 // 안에서 수정 가능
    }
}

class 공중몬스터2 extends Monster2 {
    attack2 = () => {
        console.log("공격하자!!")
        console.log("내 공격력은 " + this.power + "야!!!") // 자식이 접근 가능
        this.power = 30 // 자식이 수정 가능
    }
}

const mymonster22 = new 공중몬스터2(20)
mymonster22.attack1();
mymonster22.attack2();
console.log(mymonster22.power); // 밖에서 접근 불가
mymonster22.power = 10 // 밖에서 수정 불가

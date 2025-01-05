// 구조분해할당 예제
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// const { name, school } = profile
// console.log(name)
// console.log(school)

// 1. 일반변수 전달하기
// function zzz(aaa) { // const aaa = "사과"
//     console.log(aaa) // 사과
// }

// zzz("사과")

// 2. 객체 전달하기
// function zzz(aaa) { // const aaa = basket
//     console.log(aaa) // 객체
//     console.log(aaa.apple) // 3
//     console.log(aaa.banana) // 10
// }

// const basket = {
//     apple: 3,
//     banana: 10
// }
// zzz(basket)

// 3. 객체 전달하기 => 구조분해할당 방식으로 전달하기
function zzz({ apple, banana }) { // const { apple, banana } = basket
    console.log(apple) // 3
    console.log(banana) // 10
}

const basket = {
    apple: 3,
    banana: 10
}
zzz(basket)
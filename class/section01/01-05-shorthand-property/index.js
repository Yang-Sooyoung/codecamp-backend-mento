function qqq(aaa) {
    console.log(aaa); // 객체
    console.log(aaa.name); // 철수
    console.log(aaa.age); // 12
    console.log(aaa.school); // 다람쥐초등학교
}

const name = "철수"
const age = 12
const school = "다람쥐초등학교"
// const profile = {
//     name: name,
//     age: age,
//     school: scholl
// }
const profile = {name, age, school} // 키와 밸류가 같아서, 밸류를 생략함 => shorthand-property

// qqq(profile)             // 1. 변수에 담아서 보내주기
qqq({ name, age, school })  // 2. 그냥 통째로 보내주기
                            // => 결과는 1번과 2번이 동일함
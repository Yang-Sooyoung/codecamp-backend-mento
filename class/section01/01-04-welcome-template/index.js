function getWelcomeTemplate({name, age, school, createAt}) {
    const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createAt}</div>
            </body>
        </html>
    `

    console.log(mytemplate)
}

const name = "철수"
const age = 12
const school = "다람쥐초등학교"
const createAt = "2020-10-10"
getWelcomeTemplate({name, age, createAt});
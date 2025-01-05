import coolsms from 'coolsms-node-sdk'
const mysms = coolsms.default

export function checkPhone(myphone) {
    if(myphone.length < 10 || myphone.length > 11) {
        console.log("에러 발생!!!");
        return false
    } else {
        return true
    }
}

export function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    console.log(result)
    return result
}

export function senTokenToSMS(myphone, result) {
    const messageService = new mysms("NCSYAAKQPPW7XIGU", "ITVYG5FJ2AISROLB37T05DEGYFYFGZWQ")
    messageService.sendOne({
        to: myphone,
        from: "01020820122",
        text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${result} 입니다.`
    })

    // console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.")
}
function HelloWorld() {
    console.log('สวัสดีชาวไทย')
}

HelloWorld()

function secondHello(name: string) {
    console.log(name)
}

secondHello('tonkla')
function getPi() {
    return 3.14
}
console.log(getPi())

function st(fname: string, sname: string, tname: string) {
    if (fname === 'nan' && sname === 'pleum' || tname === 'yo') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}

st('nan', 'pleum', 'yo')

function klaza(sex: string, height: number, weight: number) {
    if (sex === 'male' && (height > 170 || weight > 50 && weight < 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
klaza('male', 120, 185)



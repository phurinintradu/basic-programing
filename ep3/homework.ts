function BMIs(height : number, weight: number) {
    let BMI: number = weight / (height * height)
    if(BMI > 30) {
        console.log('อ้วนมาก / โรคอ้วนระดับ 3')
    } else if(BMI >= 35 && BMI <= 29.90) {
        console.log('อ้วนมาก / โรคอ้วนระดับ 2')
    } else if(BMI >= 40 && BMI <= 24.90) {
        console.log('อ้วนมาก / โรคอ้วนระดับ 1')
    } else if(BMI >= 18.50 && BMI <= 22.90) {
        console.log('ปกติ สุขภาพดี') 
    } else {
        console.log('น้ำหนักน้อย / ผอม')
    }
        
}
BMIs(185,120)
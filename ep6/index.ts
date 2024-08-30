// const score: number[] =[10,23,26,30,33]
// let sum: number=0
// for (let i = 0 ; i < score. length; i++) {
//      sum = score[i] + score[i+i]  
// }
//  const avg = sum /score.length

//  console.log('Total: ', sum)
//  console.log('avg: ',avg)

// const studentsName: string = 'แนน,ฟู,บี,อ้นจี้,ลัคกี้,นัท,เอ็ม,ออม,ปลิ้ม,ก็อต'
// const studentsNameArray = studentsName.split(',')
// console.log(studentsNameArray.toString())
// console.log(studentsNameArray.join('9'))

const animalslist : string = 'หมา,แมว,กระต๋าย,หมี'
const animalslistArray = animalslist.split(",")
console.log(`เดิม : ${animalslistArray}`)
animalslistArray.pop()
animalslistArray.push('skibiti')
console.log(`ใหม่ : ${animalslistArray}`)

animalslistArray.shift()

console.log(animalslistArray)
animalslistArray.unshift('แรด')
console.log(animalslistArray)

const fruits: string[]=["Banana", "orange", "apple", "Mango"]
console.log(fruits.sort())
console.log(fruits.reverse())

const me = {
     firstName: "Phurin",
     lastName: 'Intradu',
     age : 20

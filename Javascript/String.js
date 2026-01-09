let day ='tuseday'
console.log(day.length) //7
console.log(day.slice(0,5)) //tused
console.log(day[1]) //u

let splitday=day.split("s")
console.log(splitday[1]) //eday
console.log(splitday[1].trim().length)

let date ='123'
let nextDate ='27'
let diff=parseInt(nextDate)- parseInt(date)
console.log(diff) //-96
diff.toString()

let newqoute =day + " is funday day"
console.log(newqoute) //tuseday is funday day

let val= newqoute.indexOf("day" ,5)
console.log(val)  //14

let count =0
let val1= newqoute.indexOf("day")
console.log(val1) // 4
while(val1!== -1)
{
    count++
    val1 =newqoute.indexOf("day" ,val1+1)
}
console.log(count) //3

let pol= "hello helllo how are hello"
let val2= pol.indexOf("howa") //13
//let val2= pol.indexOf("howa") //-1
console.log(val2)










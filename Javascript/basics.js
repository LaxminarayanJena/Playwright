const Person3 =require('./class.js')
console.log("hellow world")
//comments will not execute

/*
multi comments
multi comments
var (let ,const) es6 ver
*/

var a =4
let b=4
console.log(b)
console.log(typeof(b))

var c=45.6
console.log(typeof(c))

let d ="pol"
console.log(typeof(d))

let required =true
console.log(typeof(required))

let g= 6

var c=a+c
console.log(c)
console.log(typeof(c))
//we cannot redeclare cariable with let keyword but possible with var
//reassigning is allowed with let


g=8
console.log(g)
console.log(!required)

//const cant be reassigned

const k= "playwright"
k1="hello1"
console.log(k1)


let person3=new Person3("Timu","Joseph")
 person3.fullName()



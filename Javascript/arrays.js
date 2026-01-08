var marks =Array(6)
var marks=new Array(20,40,35,12,37,100)
var marks =[20,30,40,60,90]
submarks=marks.slice(1,3)
console.log(submarks) //[ 30, 40 ]


console.log(marks[2])
marks[3]=14
console.log(marks)
console.log(marks.length)
marks.push(65)
console.log(marks)
marks.pop() //delete last element
console.log(marks)
marks.unshift(410)//added to beginning
console.log(marks)
console.log(marks.indexOf(90))

console.log(marks.includes(20))

console.log("--------")
for( let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}
console.log("--------")

var sum=0
for(let i=0;i<marks.length;i++)
{
    sum=sum +marks[i]
}

console.log(sum)

let total=marks.reduce((sum,mark)=>sum+ mark,0)
console.log(total)


var scores = [12,13,14,16]
var evenscores=[]
for(let i=0 ;i<scores.length;i++)
{
    if(scores[i] %2 ==0)
    {
      evenscores.push(scores[i])
    }
}

console.log(evenscores)
let newfilterevenscroes=scores.filter(score =>score%2==0)
console.log(newfilterevenscroes)

//iterate aand update the values -reduce method
//filter the arrays=filter method

//////////////////////

//create new array with even number of scores and multiple each value with 3 

let mappedarray = newfilterevenscroes.map(score =>score*3)
console.log(mappedarray)

//now sum them
let totalvalue=mappedarray.reduce((sum,value)=>sum+value,0)
console.log(totalvalue)


///chaining

var scores1=[12,14,13,16]
let sumvalue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val) =>sum+val,0)
console.log(sumvalue)


///sorting

let fruits=["banana","mango","promogtranate","apple"]
fruits.sort()
fruits.reverse()
console.log(fruits)

var scores2=[12,3,14,13,16,9,2,1]
scores2.sort()

//console.log(scores2)//doesnot work

// scores2.sort(function(a,b)

// {
// return a-b
// })

console.log(scores2.sort((a,b)=>a-b))

console.log(scores2.sort((a,b)=>b-a)) //descneding order







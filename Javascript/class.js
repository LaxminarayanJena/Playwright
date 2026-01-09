
class Person
{
    age =25


}

let person=new Person()
console.log(person.age)

///// function

class Person1
{
    age =25
     get location()
     {
        return "canada"
     }


}

let person1=new Person1()
console.log(person1.location)


///// constructor

class Person2
{
    age =25     //class
     get location()
     {
        return "canada"
     }

     constructor(firstName,lastName)  //instance 
     {
        this.firstName =firstName
         this.lastName =lastName
     }

     fullName()
     {
        console.log(this.firstName + this.lastName)
     }


}

let person2=new Person2("Timu","Joseph")
 person2.fullName()


 ////CALL FROM ANOTHER CLASS

 module.exports = class Person3 {
    age = 25

    get location() {
        return "canada"
    }

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}


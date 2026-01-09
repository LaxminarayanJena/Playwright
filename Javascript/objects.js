let person =
{
    firstName:'Tom',
    lastName : 'Joe'
}

console.log(person.firstName)
console.log(person['firstName'])

person.firstName='Tim Dane'
console.log(person.firstName)
person.gender ='male'
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe', gender: 'male' }
delete person.gender
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe' }

console.log('gender' in person) //false

//print all the vales ofd the javascript object
for(let key in person)
{
   console.log( person[key])
}

///anonymous function

 console.log( "anonymous function")
 let person1 =
{
    firstName:'Tom',
    lastName : 'Joe' ,
    age :24,
    fullName: function () {
    return this.firstName + " " + this.lastName;
}
}

console.log(person1.fullName());

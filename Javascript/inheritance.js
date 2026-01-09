const Person3 =require('./class.js')
class Pet extends Person3
{

    // get Location()
    // {
    //     return "bluecross"
    // }
 constructor(firstName,lastName)
 {
    super(firstName,lastName)
 }
}

let pet=new Pet ("tommy", "san")
pet.fullName()
console.log(pet.location)



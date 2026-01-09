//var - global level/functional //redclared //reinitalised
//let  -global lebel/block //es6  //reintialised
/*
var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
const: Declares block-scoped variables that cannot be reassigned after their initial assignment.
*/
let greet ="evening"

if( 1 ==1)
{
    let greet ="afternoon"
}

function add (a,b)
{
    var greet ="morning"
}

console.log(greet)

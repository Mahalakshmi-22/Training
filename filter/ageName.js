//Writea function that takes an array of objects with a name and
// age property and returns a new array with only the objects where the age is greater
// than a given amount. Use the filtermethod to accomplish this.


a=[ {id:1,name:"maha",category:"it",age:23},
{id:2,name:"viji",category:"cse",age:35},
{id:3,name:"vino",category:"it",age:22},
{id:4,name:"muthu",category:"mech",age:23}]

 x=a.filter(e=>{
    return e.age>22
 }
 )
 console.log(x);
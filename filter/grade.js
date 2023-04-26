
//Write a function that takes an array of objects with a nameand gradesproperty and
// returns a new array with only the objects where the 
//average grade is greater than a given amount. Use the filtermethod to accomplish this.






a=[
    {name:"maha",grade:43},
    {name:"uma",grade:54},
    {name:"ragul",grade:40},
    {name:"deva",grade:54} 
]
let x=a.filter(e=>{
    return e.grade>50
})
console.log(x);
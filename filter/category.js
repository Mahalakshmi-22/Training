//Write a function that takes an array of objects with a 
//categoryproperty and returns a new array with only the unique categories.
 //Use the filterand mapmethods to accomplish this.

let a=[
    {id:1,name:"maha",category:"it"},
    {id:2,name:"viji",category:"cse"},
    {id:3,name:"vino",category:"it"}]



arr=[]
a.filter(e=>{
        if(!arr.includes(e.category)){
            arr.push(e.category)
        }
    })
    
console.log(arr)
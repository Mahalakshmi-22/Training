let arr=[
{id:1,name:"maha",category:"it"},
{id:2,name:"viji",category:"cse"},
{id:3,name:"vino",category:"it"}]
let obj={}
arr.map(e=>{
    if(e.category in obj){
        obj[e.category].push(e)
    }else{
obj[e.category]=[e]
    }
}
)
console.log(obj);
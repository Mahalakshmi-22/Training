let arr=[
    {id:1,name:"maha",category:"it",age:23},
    {id:2,name:"viji",category:"cse",age:35},
    {id:3,name:"vino",category:"it",age:22},
{id:4,name:"muthu",category:"mech",age:23}]
    let obj={}
    arr.map(e=>{
        if(e.age in obj){
            obj[e.age].push(e)
        }else{
    obj[e.age]=[e]
        }
    }
    )
    console.log(obj);
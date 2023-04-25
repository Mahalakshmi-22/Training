a=["maha","viji","muthu","vino","maha"]
arr=[]
a.filter(e=>{
    if(!arr.includes(e)){
        arr.push(e)
    }
        // console.log(arr);
})
console.log(arr);

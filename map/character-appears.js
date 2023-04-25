str="mahalakshmi"
b=str.split('')
obj={}
obj=b.map(e=>{
    if(e in obj){
        obj[e]+=1
    }else{
        obj[e]=1
    }
    console.log(obj);
})
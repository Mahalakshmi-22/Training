obj={}
a=['maha','viji','uma','ragul','maha']
obj=a.map(e=>{
    if(e in obj){
        obj[e]+=1
    }else{
        obj[e]=1
    }
    console.log(obj)
})

let arr=[
    {date:22,time:"2clk",year:2022},
    {date:31,time:"3clk",year:2042},
    {date:1,time:"12clk",year:2022},
    {date:12,time:"22clk",year:2032}]
    let obj={}
    arr.map(e=>{
        if(e.year in obj){
            obj[e.year].push(e)
        }else{
    obj[e.year]=[e]
        }
    }
    )
    console.log(obj);
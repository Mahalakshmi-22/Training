
//Write a function that takes an array of objects 
//with a priceproperty and returns a new array with only the objects that have a price less
// than a given amount. Use the filtermethod to accomplish this.




a=[
    {pirce:150,property:"tea-cup"},
    {pirce:160,property:"watch"},
    {pirce:140,property:"mac-laptop"},
    {pirce:150,property:"bottle"},
    {pirce:120,property:"kammal"}]
    arr=[]
    x=a.filter(e=>{
 return e.pirce<150
    }
    )
    console.log(x);
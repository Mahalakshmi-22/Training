
//Write a function that takes an array of objects with a
// date property and returns a new array with only the objects where the 
//date is within a given range. Use the filter method to accomplish this.

a=[{day:"monday",date:"2001-11-22"},
{day:"monday",date:"2002-07-12"},
{day:"monday",date:"2003-01-07"},
{day:"monday",date:"2004-05-31"}]
found=false
a.filter(e=>{
  let y=new Date(e.date).getFullYear()
    if(y==2004){
        console.log(e)
    }

})

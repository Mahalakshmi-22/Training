//Write a function that takes an array of objects with a nameand emailproperty and returns a new array with 
//only the objects where the email address includes a given domain.
// Use the filtermethod to accomplish this.


a=[{name:"maha",email:"maha@gmail"},
{name:"viji",email:"vg@gmail"},
{name:"uma",email:"uma@gmail"},
{name:"deva",email:"dev@gmail"}]
a.filter(e=>{
// found=false
    if(e.email=="maha@gmail"){
        console.log(e)
    }
})
  
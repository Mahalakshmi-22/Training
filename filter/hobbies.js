//Write a function that takes an array of objects with a nameand hobbies property 
//and returns a new array with only the objects where the 
//hobbies include a given hobby. Use the filtermethod to accomplish this.

a=[{nope:"sathya",wife:"vino"},
{nope:"jegan",wife:"soona"},
{nope:"soundhar",wife:"gayu"},
{nope:"udhaya",wife:"anitha"}]

arr=[]

found=false
a.filter(e=>{
  if(e.nope=="udhaya"){
    found=true
  }
}
)
if(found){
    console.log("yes")
  }else{
    console.log("no")
  }
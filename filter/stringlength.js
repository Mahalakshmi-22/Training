
//Write a function that takes an array of strings and returns a new array 
//with only the strings that have a length 
//greater than a given amount. Use the filtermethod to accomplish this.





str=["mahalakshmi","viji","vino","uma"]
let x=str.filter(e=>
    {
        return e.length>7
    } )
    console.log(x);
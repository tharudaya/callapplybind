//object one
const myObj1 = {
    firstName : "Tharaka",
    lastName : "Udayanga",
}

//object two
const myObj2 = {
    firstName : "Dissanayake",
    lastName : "Arachchige"
}

//common method
const returnName = function (age,village) {
    return this.firstName+" "+ this.lastName +" is "+ age  +" and from "+ village;
}

//call method with different object and details
console.log(returnName.call(myObj1,"27","tangalle"));
console.log(returnName.call(myObj2, "28","vitharandeniya"));

//apply method with different object and details
console.log(returnName.apply(myObj1,["27","tangalle"]));
console.log(returnName.apply(myObj2, ["28","vitharandeniya"]));

/* Difference between call and apply is how we passing arguments */
/* Call Method - passing one by one */
/* Call Method - passing as array */

//bind method is not invoking immediately. It is returning a function that can call later
const bindFunc = returnName.bind(myObj1,"30","colombo");

//calling bind method
console.log(bindFunc());

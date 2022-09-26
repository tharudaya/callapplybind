# Call, Apply and Bind in JavaScript
The difference between call, apply and bind methods in js.

Most of the time we are dealing with objects in JavaScript. If we have multiple objects with common methods, instead of calling that in each and every object we can take that function out of the object and create a separate method that can use with every other object. Lets see some example

![Alt text](/images/objects.PNG?raw=true "Optional Title")

Above two objects have details about two different persons. If we want to get full name from each object we can create separate method and use that with these objects. See below image

![Alt text](/images/function.PNG?raw=true "Optional Title")

So in this method it’s returning the full name with some other arguments that will help to get the age and village. Lets see how we can use this common method with above objects.

### Call
call method is use to combine the method with object. function.call(Obj) method is use in JavaScript to combine a function method with object. Here we are passing the Object as the first parameter to call method always. Then we can pass the rest of the parameters which is required to return the output. Every parameter without the first we are passing as single items with call method.

![Alt text](/images/call.PNG?raw=true "Optional Title")

### Apply
Apply method is also similar to the call method. The only difference is with apply method we are parsing rest of the parameters as an array to the apply method. We can use this method if we don’t know the number arguments we should pass to the method.

![Alt text](/images/apply.PNG?raw=true "Optional Title")

Above both methods will return the same result. Lets see how bind method works now

### Bind
Bind method is also similar to the call method. The difference is it’s not invoking immediately just after we declare the method. It is use for storing the method for later use. We can use bind method to execute the function as per our requirements.

![Alt text](/images/bind.PNG?raw=true "Optional Title")

### Summary
So the call, apply and bind methods are use to deal with object methods and functions. These methods are useful for access different objects with common methods. It is passing arguments as single items to call method and as array to apply method. The bind method is similar but it is use to store the function for later use.

### Get In Touch
Linkedin -> https://www.linkedin.com/in/tharaka-udayanga-61a424166/
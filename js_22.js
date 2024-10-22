//call

function setUserName(userName){
    this.userName=userName
    console.log("this method  called");
    
}

//second function 
function createUser(userName,email,password){
// setUserName(userName); //not able to set username because it refere to annother function and their this in this context
//use call
setUserName.call(this,userName); // when use this it refere outer this context into this .
this.email=email;
this.password=password
}

const user=new createUser("lily","lily@gmail.com","123");
console.log(user);

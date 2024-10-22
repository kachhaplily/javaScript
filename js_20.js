//oops
//function constructor

let userName ;
let userCity;
function showData(userName,userCity){
this.userName=userName;
this.userCity=userCity;
return this
}

const data1=new showData("lily","vadodara");
const data2=new showData("test","ahmedabad");
console.log(data1);
console.log(data2);


/**
 * using function constructor if new keyword is not used then it replace the new data with old one 
 * means it not able to create new instance
 * 
 * note: use new keyword.
 */

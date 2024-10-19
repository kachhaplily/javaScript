//object using constructor

const tinderUser = new Object //singleton object

tinderUser.id="123";
tinderUser.name="john";
// console.log(tinderUser);
const regularUser ={
    email:"user@gmail.com",
    fullName:{
        userFullName:{
        firstName:"lily",
        lastName:"kachhap"
        }
    }
}

// console.log(regularUser?.fullName?.userFullName?.firstName);
let obj1={1:"a",2:"b"};
let obj2={3:"a",4:"b"};
// const obj3={obj1,obj2};
let obj3=Object.assign({},obj1,obj2,regularUser)
// obj1, obj2, regularuser are the source , and {} this is traget , 
// {} is not added , then all the source target obj1.
// console.log(obj3);
obj4={...obj1,...obj2,...obj3} //spread oprator best 
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));








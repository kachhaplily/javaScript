//string oprtaion 
let str1 ="hello";
let str2="lily";
// console.log(str1+str2);


// console.log(1+2+"3"); 
// console.log(+true)

let counter=199;
counter++;
// console.log(counter)

//++++++++++++++++++++++++++++++++++++++
// memory management 
//Stack(primitive)
//heap(Non-Primitive)

let ytname="chyorcode"
let anotherName=ytname;
anotherName="testing";
// console.log(anotherName);
// console.log(ytname)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = userOne;
user2.email="lily@google.com"
// console.log(userOne.email);
// console.log(user2.email);

let x = {
    a: {
      b: 2,
    },
  };
  // 2 objects are created. One is referenced by the other as one of its properties.
  // The other is referenced by virtue of being assigned to the 'x' variable.
  // Obviously, none can be garbage-collected.
  
  let y = x;
  // The 'y' variable is the second thing that has a reference to the object.
  
  x = 1;
  let z = y.a;
  console.log(x);
  


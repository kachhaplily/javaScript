// object 

const sym=Symbol("key1");//decalred symbol
const userDetailes={
    name:"lily",
    'full name':"kachhap lily",
    age:18,
    [sym]:"mykey1", //way to use symbol in object
    isLogginIn:false,
    lastLoginDat:['monday','tuesday']
   
}

// console.log(typeof userDetailes[sym]); //access ofsymbol from object
// console.log(userDetailes["full name"]);
userDetailes.email="lily@gmail.com"
// Object.freeze(userDetailes); // not reflact the update changes.
userDetailes.email="lily@google.com"

// console.log(userDetailes);
userDetailes.greeting =function (){
    console.log(`hello user detailes,${this.name  }`);
    
}
console.log((userDetailes.greeting()));





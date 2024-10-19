//scope

let name ="user";
    const email="user@gmail.com"
    var number=100;
if(true){
    // scope level s
    let name ="lily";
    const email="lily@gmail.com"
    var number=35;
    console.log(number,email,name);
}
    
// global level 
console.log(number,email,name);

//reason for not to use var 


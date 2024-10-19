/**
 * this in function 
 * its show current context
 */



const user ={
    username:"lily",
    price:23,

    welcomeMessage:function(){
     
        console.log(`${this.username},welcome to website`)
    },
    showdata:(()=>{
        //not able to use this in arraow function in object
        console.log(this.userName,"hello");
        
    })


}
user.showdata();
user.welcomeMessage();
// user.username="kajal"
// user.welcomeMessage();
// console.log(this);//in node this show {} empty


// function chy(){
//     let userName="lily"
//     console.log(this.userName);//not able to use in function only use in object
    
// }
// chy();

const show=(()=>{
let userName="lily"
// console.log(this);
})
show();

//promise
/**
 * A JavaScript Promise is an object that represents the eventual completion (or failure) of an 
 * asynchronous operation and its resulting value.
 *  It provides a cleaner way to handle asynchronous tasks like network requests, 
 * file I/O, or any operation that takes time, without getting into "callback hell."
 */

//create promise

const promiseOne= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task is complete',10000);
        resolve();
        
    })
}); //its a object ao create with new keyword

//consume promise one
//when resolve is call then also promise state work

promiseOne.then(()=>{
    console.log("promise one task comsumed");
})


/**
 * pass data from resolve
 */
const promiseTwo=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("second promised resolved");
        resolve({
            userName:'lily',
            password:"lily123"
        })
    }, 1000);


})

// use second promise data by resolved

promiseTwo.then((data)=>{
    console.log(data);
})

//use reject state

const promiseThree= new Promise ((resolve, reject)=>{
    let isError=true;
    setTimeout(()=>{
        if(!isError){
            resolve({
                userName:"john"
            })
        }
        else{
            reject()
        }
        
    },2000)

})

//consume promisee three

promiseThree.then((data)=>{
console.log(data);

}).catch(()=>{
    console.log("error occur");
    
})

//using async await and fetch method
const apiResponse=(()=>{
       fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
            return data.json()
        }).then((data)=>{
            console.log(data);
            
        }).catch((Error)=>{
            console.log("Error occur",Error);
            
        })
})

apiResponse();

//same api call suing async await

const apiResponseAsync=async()=>{
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const responseData = await response.json();
    console.log((responseData,"using async await"));
    
    
} catch (error) {
    console.log(error,"error occur while call an api");  
}
}
apiResponseAsync();
   
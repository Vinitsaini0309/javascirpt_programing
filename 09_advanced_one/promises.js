const promiseOne = new Promise(function(resolve , reject){
    // D ANY ADYNC TASK
    //DB calls , cryprtography , netweork
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log('promise consumed');

})

new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)

}).then(function(){
    console.log('Async 2 resolved') 
})


 const promiseThree = new Promise(function(resolve , rejecct){
    setTimeout(function(){
resolve({username:'Vinit Saini' , email:'chai@example.com'})
},1000)

})
promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(() =>{
let error = false
if(!error){
    resolve({username:'Vinit' , password:'12345'})

}
else{
    reject('ERROR : Something Went Wrong');
}
    },1000)
})

promiseFour.then((user) =>{
console.log(user);
return user.username
}).then(function(username){
console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The Promise Is Either Resolved Or Rejected');
})
 

const promiseFive = new Promise(function(resolve , reject){

setTimeout( () =>{
    let error = true
    if(!error){
        resolve({username:'JS', passord:'123@#$'})
    }
    else{
        reject('JS Went Wrong')
    }
},1000)
})

async function consumepromiseFive(){
    try {
        const response = await promiseFive
    console.log(response); 
        
    } catch (error) {
        console.log(error);
        
    }
}

consumepromiseFive();

// async function getAllusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data);
  
//    } catch (error) {
//     console.log('E: error');

//    }
// }
//    getAllusers()

fetch('https://api.github.com/users/vinitsaini0309')
.then((response) => {
return response.json()
})
.then ( (data) =>{
console.log(data);
})
.catch( (error) => console.log(error))


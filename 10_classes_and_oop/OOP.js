

const usert = {

    username: 'Vinit',
    logincount: 8,
    signedIn: true,

    getuserDetails: function(){
        // console.log('got users details from database');
        // console.log(`username:${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getuserDetails());

function user(username , loginCount , IsLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.IsLoggedIn = IsLoggedIn

    this.greetings =  function(){
        console.log(`welcome ${this.username}`);
        
    }

//     return this
 }

const userOne =  new user('Vinit' , 26 , true)
const userTwo =  new user('Suraj' , 03 , true)
console.log(userOne.constructor)
// console.log(userTwo);


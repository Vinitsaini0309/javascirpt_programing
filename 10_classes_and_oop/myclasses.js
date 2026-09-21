// ES6

// class user {
//     constructor(username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password

//     }
//     encryptpassword(){ 
// return `${this.password}abcd#$#`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai= new user('vinit' , 'sample@gmail.com' , '12345567')
// console.log(chai);
// console.log(chai.encryptpassword());
// console.log(chai.changeusername());

// BEHIND THE SCENE
function user(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptpassword = function(){
return `${this.password}abcd#$#`
}
user.prototype.changeusername = function(){
      return `${this.username.toUpperCase()}`
}

const Tea =  new user('Tea' , 'example@gmail.com' , '13579')
console.log(Tea.encryptpassword());
console.log(Tea.changeusername());



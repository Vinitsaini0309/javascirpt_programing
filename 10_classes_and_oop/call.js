function setusername(username){
    // Complex DB Calls
this.username = username
console.log("called");

}

function Createuser(username , email , password){

    setusername.call( this ,username)

    this.email = email;
    this.password = password

}
const chai = new Createuser("vinit" , "sample@gmail.com" ,'1234567' )
console.log(chai);

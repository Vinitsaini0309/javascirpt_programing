class user {
 constructor(username){
    this.username = username
 }
 LOGme(){
    console.log(` USERNAME IS ${this.username}`);
    
 }
}

class Teacher extends user {
    constructor( username , email , password){
        super(username)
this.email = email
this.password = password
    }
    addcourse(){
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`);
        
    }

}
const chai = new Teacher( 'vinit' , 'chai@sample.com' , '0326')
chai.addcourse()
const masalachai = new user('SURAJ')
// masalachai.addcourse()
masalachai.LOGme()
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(Teacher instanceof user);



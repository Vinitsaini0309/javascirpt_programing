class user {
    constructor(username){
        this.userame = username
    }
    logMe(){
        console.log(`Username is ${this.userame}`);
        
    }
     static createID(){
        return `1245`
    }
}
const vinit = new user('vinit')
// console.log(vinit.createID())

class Teacher extends user {
    constructor(username , email) {
        super(username)
        this.email = email
    }
}
const iphone = new Teacher('iphone' , 'i@phone.com')
iphone.logMe()
console.log(iphone.createID());


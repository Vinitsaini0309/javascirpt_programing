

class user {
    constructor(username , email , password){
this.username = username
this.email = email
this.password = password
    }

    get email(){
return this._email.toUpperCase()
    }


    set email(value){
        this._email = value
    }
get password(){
    return `${this._password}vinit`
}
set password(value) {
    this._password = value
}

}

const vinit = new user('VINIT' , 'vinint@sample.com' , 'confident')
console.log(vinit);
console.log(vinit.password);
console.log(vinit.email);



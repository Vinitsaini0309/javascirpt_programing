
function user(email , password){
    this._password = password
    this._email = email



Object.defineProperty(this , 'password', {
    get: function(){
        return this._password.toUpperCase()
    },

    set: function(value){
        this._password = value

    }
})

Object.defineProperty(this , 'email', {
    get: function(){
        return this._email.toUpperCase()
    },

    set: function(value){
        this._email = value

    }
})

}

const details = new user('harrish' , 'jyani@sample.com')
console.log(details);

console.log(details.password);
console.log(details.email);


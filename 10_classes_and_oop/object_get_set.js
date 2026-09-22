const user = {
    _email: 'vinit@oms.com',
    _password: 'abcd',

      get email(){  
return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const tea = Object.create(user)
console.log(tea.email);
console.log(tea === user);


const user = {
    username: 'vinit',
email:'vinitmali0309@gmail.com',
helloMessage: function() {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
    
}

} 
// user.helloMessage();
// user.username = 'suraj'
// user.helloMessage();
console.log(this);

// function chai(){
//     const name = 'vinit'
//     console.log(this.name);
// }
// chai();

//chai();
const chai =  () => {
    const name = 'vinit'
    console.log(this.name);
}
//chai();

// const addtwo = (num1,num2) => {
//     return num1 + num2;

// }


const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(2,3));






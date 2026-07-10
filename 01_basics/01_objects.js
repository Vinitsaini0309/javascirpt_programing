//object literals
 const mysym = Symbol("key1")
const user = {
    name: "vinit",
    "full name":"vinit saini",
    age:20,
    [mysym]:"mykey2",
    location:"Bikaner",
    isloggedin:true,
    array:["sunday","saturday"]
}
console.log(user.location);
//console.log(user[age]);
//console.log(user["full name"]);
//console.log(user["age"]);
//console.log(user[mysym]);
user.age = 21;
//console.log(user.age);

//Object.freeze(user)
user.age = 22;
//console.log(user.age);
user.greetings = function(){
    console.log("hello js user");
}
user.greetingstwo = function(){
    console.log(`hello js user ${this["full name"]}`);
}
console.log(user.greetings());
console.log(user.greetingstwo());






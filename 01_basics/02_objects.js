
//const instauser = new Object();
const instauser = {}
//console.log(instauser);
instauser.id = '123vinit';
instauser.name = 'vinit saini';
instauser.isloggedin = false;
//console.log(instauser);
const user = {
    email:'some@gmail.com',
    fullname:{
        userfullname:{
            firstname:"vinit",
            secondname: "saini"
        }
    }

}
//console.log(user.fullname.userfullname);
const obj1 = {1:'a',2:'b'};
const obj2 = {3:'a',4:'b'};
//const obj3 = {obj1,obj2};
//console.log(obj3);
//const obj3 = Object.assign({},obj1,obj2);
//console.log(obj3);
const obj3 = {...obj1, ...obj2};
console.log(obj3);
const user1 = [
    {id:101,name:'sarwan'},
     {id:102,name:'saksham'},
      {id:103,name:'suraj'},
       {id:104,name:'garvit'}

]
//console.log(user1[2].name)
console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));







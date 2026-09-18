
const myname = "Vinit    "
//  myname.truelength()






const heros = ["Thor" , "Spiderman"]

let Heropower ={
    Thor: 'hammer',
    Spiderman: 'Sling',
    getspiderpower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
        
    }
}
Object.prototype.vinit = function(){
    console.log(`Vinit Is Everywhere`);
    
}
Heropower.vinit()
heros.vinit()
myname.vinit()

Array.prototype.heyvinit = function(){
    console.log(`vinit says hello`);
    
}

heros.heyvinit()
// Heropower.heyvinit()


// INHERITANCE

const user = {
    name: 'Vinit',
    Email: 'example@gmail.com',
}

const Teacher = {
    makevideo: true  ,
}
 const Teachingsupport = {
    Isavailable: true,
 }
 const TAsupport = {
    makeassignment: 'JS assignment',
    fulltime: true,
    __proto__:Teachingsupport
 }

 Teacher.__proto__ = user
 console.log(TAsupport.Isavailable);

 // MODERN SYNTAX

 Object.setPrototypeOf(Teachingsupport , Teacher)

 let AnotherUsername = "Vinit     "
 
 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(` True Length Is : ${this.trim().length}`);
    
 }

 AnotherUsername.trueLength()
     myname.trueLength()
     "Harrish".trueLength()
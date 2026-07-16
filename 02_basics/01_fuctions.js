

function sayname(){
    console.log('v');
console.log('i');
console.log('n');
console.log('i');
console.log('t');
}
//sayname()


//function addnumbers(number1,number2){
   //console.log( number1+ number2);
//}

function addnumbers(number1,number2){
//    let result = number1+ number2;
//    return result;
// return number1+number2;
 }

//  const result = addnumbers(2,3)
//  console.log( 'result: ',result);
 

function loginUserMessage(username = 'xyz'){
    if(username == undefined){
        console.log(`please enter a valid username`);
        return
    }
    return `${username} just loggged In`
}
//console.log(loginUserMessage("Vinit saini"));
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2, ...num1){
    return num1;

}
console.log(calculateCartPrice(2000,2500,3890,560));
const user =  {
    username: "vinit saini",
    price: 1999
}
function HandleUser(anyobject){ 
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    return 0;
}
// HandleUser(user);
// HandleUser({
//     username: 'saksham',
//     price: 299
// })


const array = [100,200,300,400]
function HandleArray(anyArray){
    return anyArray[2];

}
console.log(HandleArray(array));






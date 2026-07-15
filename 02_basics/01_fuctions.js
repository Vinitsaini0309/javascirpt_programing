

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
console.log(loginUserMessage())




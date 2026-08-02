// for loops
for(let index = 0 ;index<=10;index++){
    // const element = index;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
// console.log(`outer loop value : ${i}`);
   for (let j = 0; j <= 10 ; j++) {
// console.log(`inner loop value : ${j}`);
   }
}
let myarray = ["vinit" , "spiderman" , "jean grey"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

// break and continue 
for (let i = 1; i < 20; i++) {
if(i == 5){
    console.log(`detected 5`);
    continue
    //break
}
    console.log(`value is ${i}`);
    
    
}
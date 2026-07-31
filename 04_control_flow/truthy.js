   const useremail = []
   if(useremail){
    // console.log('Got user email');
   }
   else{
    // console.log('Dont have useremail');
   }

   //falsy values
  // 0, -0, Bigint 0n, "",undefined, NaN , null ;
  //truthy values
  //"0", "false" ,'', [] ,{} , function(){}, 

  if(useremail.length == 0){
    console.log("Array is empty");
  }
  const emptyobj = {}
  if (Object.keys(emptyobj) == 0) {
    // console.log('object is empty');
  }

 // Nulish coalescing operator (??) : null/undefined

 let val1;
 val1 = 5 ?? 10
//  console.log(val1);

 val1 = null ?? 10;
//  console.log(val1);
 val1 = undefined ?? 26
//  console.log(val1);
 val1 = null ?? 10 ?? 12
//  console.log(val1);
 
 
 

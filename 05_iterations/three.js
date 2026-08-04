// for of 
//[{} , {} , {}]

 const arr = [1,2,3,4,5];
 for (const i of arr) {
    // console.log(i);
 }

 
 const greetings = "Vinit saini"
 for (const i of greetings) {
    if(i == " "){
      continue;

    }
    // console.log(i);
 }

 // MAPS
 const map = new Map()
 map.set ('IN' , "India")
 map.set ('USA' , "United States Of America")
 map.set ('Fr' , "France")
 map.set ('IN' , "India")

//  console.log(map);

 for (const[key , value] of map) {
    // console.log(key, "::" ,value);
    
 }

//  const myobj = {
//     'game1':'Valorent',
//     'game2': 'BGMI',

//  }
//  for (const [key , value] of myobj) {
//     console.log(key , value);
    
    
//  }

//  for in 

const myobj = {
     js:'javascript',
     cpp:'c++',
     rb:'ruby',
     swift:'swift by apple'
}

for (const key in myobj) {
//    console.log(`${key} is shortcut for ${myobj[key]}`);
   
}

const programing = ["js" ,"cpp" , "java" ,"swift" ];
for (const key in programing) {
    console.log(programing[key]);

}
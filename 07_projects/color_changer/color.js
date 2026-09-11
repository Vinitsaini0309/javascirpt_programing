// generating random colors 
 const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0 ; i<6 ; i++){
color += hex[Math.floor(Math.random()*16)]
    }
return color;
}
console.log(randomcolor())
let devloper;

const colorchanger = function(){
  if(!devloper){
    devloper = setInterval(() =>{
    document.body.style.backgroundColor = randomcolor()
} , 1000)
  }
}

const colorsttoper = function(){
   clearInterval(devloper)
   devloper = null
}
document.querySelector('#start').
addEventListener('click' , colorchanger )


document.querySelector('#stop').
addEventListener('click' , colorsttoper )
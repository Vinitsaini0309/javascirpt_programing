// for each  
const coding = ['js' , 'ruby' , 'java' , 'cpp'];
// arrow funcion format

coding.forEach(element => {
    // console.log(element);
});

// simple function format

coding.forEach( item => {
    // console.log(item);
    
})
// other refernce method 
function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach((element, index , arr)=>{
    // console.log(element , index ,arr)
}
)

const mycoding = [
    {
    languagename:"javascript",
    filename:"js"
},
{
    languagename:"javat",
    filename:"java"
},
{
    languagename:"python",
    filename:"py"

}
]
mycoding.forEach(item=> {
    console.log(item.languagename);
    
})
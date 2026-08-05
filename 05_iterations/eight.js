// reduce  
 const nums =[1,2,3,4,5]

//  const total = nums.reduce( function (acc , currvalue) {
//     console.log(`acc :${acc} currvalue :${currvalue}`)
// return acc + currvalue
//  }  ,0
//      )

//  console.log(total);
 const total = nums.reduce( (acc , curvalue) => acc +curvalue ,0)
 console.log(total);
 
 const shoppingcart = [
    {
        item:'js course',
        price: 2999
    },
    {
        item:'py course',
        price: 999
    },
    {
        item:'DSA course',
        price: 4999
    },
    {
        item:'mobile dev course',
        price: 8999
    },

 ]
 const sum = shoppingcart.reduce( (acc , item) =>  acc + item.price ,0)
 console.log(sum);
 
const insert =document.getElementById('insert')
let istablecreated = false
window.addEventListener('keydown' , (e)=>{

if(!istablecreated){
    insert.innerHTML = `
<div class='color'>
<table>
 <tr>
   <th>key</th>
   <th>keycode</th>
   <th>code</th>
 </tr>
 
 <tr>
   <td>${e.key === ' '?  'space':  e.key}</td>
   <td>${e.keyCode}</td>
   <td>${e.code}</td>
 </tr>
 <tbody id='tableBody'></tbody>
</table>
</div>
`
istablecreated = true
}
const tableBody = document.getElementById('tableBody')
const newrow  = `
<tr>
   <td>${e.key === ' '?  'space':  e.key}</td>
   <td>${e.keyCode}</td>
   <td>${e.code}</td>
 </tr>
 `
tableBody.insertAdjacentHTML("beforeend" , newrow)
} );
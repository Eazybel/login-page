const inpu = document.getElementById("inpu");
const inpu1 = document.getElementById("inpu1");
const btn = document.getElementById("btn");
const para= document.getElementById("para");
let email = [];
let password = [];
btn.onclick= function (){
   email.push(inpu.value);
}
// para.textContent='sucess rate'
// console.log(para.textContent);
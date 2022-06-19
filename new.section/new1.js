 import {navbar,footer} from "../navbar/navbar.js" 
 document.getElementById("top-navbar").innerHTML=navbar()
 document.getElementById("footer").innerHTML = footer()


 
 let noofpro = JSON.parse(localStorage.getItem("addcart")) ||[]
 document.getElementById("noofpro").innerText = noofpro.length


 var user = JSON.parse(localStorage.getItem("user"))
if(user.name ==null){
  document.getElementById("signin").innerText = "signin"
}
else{
  document.getElementById("signin").innerText = user.name
}
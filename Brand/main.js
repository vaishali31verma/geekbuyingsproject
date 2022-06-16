import {logoimg,giflogo,logopng,logopng2} from "./brand.js"

import {navbar,footer} from "../navbar/navbar.js"
document.getElementById("top-navbar").innerHTML = navbar()

document.getElementById("footer").innerHTML = footer()



setTimeout(() => {
    document.getElementById("logos").innerHTML = logoimg()     
}, 1600);
setTimeout(() => { 
    document.getElementById("logoss").innerHTML = logopng()    
}, 2300);
setTimeout(() => { 
    document.getElementById("logoss2").innerHTML = logopng2()    
}, 3200);
setTimeout(() => { 
    document.getElementById("logoss3").innerHTML = logoimg()    
}, 4000);
setTimeout(() => { 
    document.getElementById("logoss4").innerHTML = logopng()    
}, 4500);
document.getElementById("logoss2").innerHTML = giflogo() 
document.getElementById("logos").innerHTML= giflogo()
document.getElementById("logoss").innerHTML= giflogo()
document.getElementById("logoss3").innerHTML= giflogo()
document.getElementById("logoss4").innerHTML= giflogo()



let pics=[
    {img:"https://img.gkbcdn.com/s3/bb/eleglide-20220531151324673.jpg",img2:"https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w200_.jpg"},
    {img:"	https://img.gkbcdn.com/s3/bb/roborock-20211111211035580.jpg",img2:"https://img.gkbcdn.com/s3/b/Logo/roborock.jpg",img3:""},
    {img:"	https://img.gkbcdn.com/s3/bb/tronsmart-20210123120544453.jpg",img2:"https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783"},
    {img:"	https://img.gkbcdn.com/s3/bb/ado-20211111211123105.jpg",img2:"https://img.gkbcdn.com/s3/b/ado.jpg"},
    {img:"	https://img.gkbcdn.com/s3/bb/bezior-20211111210912370.jpg",img2:"https://img.gkbcdn.com/s3/b/bezior.jpg"},
    {img:"	https://img.gkbcdn.com/s3/bb/jimmy-20200910094916929.jpg",img2:"https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg?v=-219567574"},
]
pics.forEach(function(ele,index){
var div =   document.createElement("div")
div.id = "picture"
var img =  document.createElement("img")
img.src = ele.img
div.addEventListener("mouseenter",function(){
    img.style.display = "block"
        img.id = "imgyou"
        img.src = ele.img2 

})


div.addEventListener("mouseleave",function(){
    img.style.display = "block"
    img.src = ele.img
    
})
div.append(img)
document.getElementById("pic").append(div)

})



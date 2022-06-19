import {navbar,footer} from "../navbar/navbar.js"
document.getElementById("navbar-top").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()


let data = JSON.parse(localStorage.getItem("item"))

let image = document.querySelector("#sideimg")

let img = document.createElement("img")
image.append(img)
img.src = data.image;

let det = document.querySelector("h5")
det.innerText = data.detail


let noofpro = JSON.parse(localStorage.getItem("addcart")) ||[]
document.getElementById("noofpro").innerText = noofpro.length

let price = document.getElementById("price")
price.innerText = "Rs" + data.original

let data8 = [{
    Image: "https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-05-19/jimmy-sirius-hw10-cordless-3-in-1-vacuum---washer-019dee-1652959772707._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1574132217684._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1574132217684._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-02-09/Lenovo-Thinkplus-LP1-Pro-True-Wireless-Earphones-Silver-496225-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-04-11/Bobot-DEEP-832-Cordless-Washer-Vacuum-Cleaner-499393-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2021-11-02/Wireless-Bluetooth-Speaker-USB-FM-3W-Bamboo-146143-476649-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-03-29/YOMA-N3-Handheld-Cordless-Broom-Vacuum-Cleaner-498452-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2020-10-30/ROIDMI-NEX-2-Plus-Smart-Cordless-Handheld-Vacuum-Cleaner-Gray-426608-1._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2018-10-15/xiaomi-type-c-earphone-dynamic-driver-ceramics-driver-1572312024990._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2019-07-10/xiaomi-jimmy-jv53-vacuum-cleaner-purple-1571992956341._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-03-17/INSE-S600-Cordless-Upright-Vacuum-Cleaner-497824-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-02-18/Lenovo-Thinkplus-XT95Pro-TWS-Wireless-Earphone-Luminous-Black-496699-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-02-25/Lenovo-Thinkplus-TW13-Wired-Earphone-Black-497201-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-02-25/Lenovo-Thinkplus-TW13-Wired-Earphone-Black-497201-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2020-09-04/jimmy-jv65-handheld-cordless-stick-vacuum-cleaner---water-tank---red--1599215100359._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-04-11/JIMMY-JV12-Anti-mite-Vacuum-Cleaner-499389-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-05-06/Tesvor-V8-Cordless-Mop-500275-0._w280_.jpg"
}, {
    Image: "https://img.gkbcdn.com/p/2022-04-11/Bobot-DEEP-832-Cordless-Washer-Vacuum-Cleaner-499393-0._w280_.jpg"
}]


document.getElementById("buynow").addEventListener("click",function(){
    window.location.href = "cart.html"
})





let appenddata = (data) => {
    data.forEach(ele => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.Image
        div.append(img)
        document.getElementById("Showdata").append(div)
    });
}
appenddata(data8)
document.getElementById("inc").addEventListener("click",inc)
document.getElementById("dec").addEventListener("click",dec)

var c =1

function inc(){
    
    c++;
    document.getElementById("count").innerText=c;
   
    
    }
function dec(){
    if(c==1){
        document.getElementById("count").innerText=c;
    }
    else{

   
    c--;
    document.getElementById("count").innerText=c;
    }
    
    }

 

var cart=JSON.parse(localStorage.getItem("addcart"))||[]

document.getElementById("adddatatocart").addEventListener("click",function(){
    
    addcart(data)
    addcart(data)
    window.location.reload()
    alert("product added successfully")
    

})


let addcart = (data)=>{

    var exist = cart.filter((el) => {
        return el.image == data.image
})
    if(exist.length>0){
    
         cart.pop()
         data.count=c
        
    }
    else{
        data.count=c
        cart.push(data)
        localStorage.setItem("addcart",JSON.stringify(cart))
        
    }
  
}
  

var user = JSON.parse(localStorage.getItem("user"))
if(user.name ==null){
  document.getElementById("signin").innerText = "signin"
}
else{
  document.getElementById("signin").innerText = user.name
}

















const pc = [...document.querySelectorAll("#Showdata")]
const btn1 = [...document.querySelectorAll(".pre")]
const btn2 = [...document.querySelectorAll(".fwd")]

pc.forEach(function (el, index) {
    let cd = el.getBoundingClientRect()
    let w = cd.width
    btn1[index].addEventListener("click", () => {
        el.scrollLeft = el.scrollLeft - w
    })
    btn2[index].addEventListener("click", () => {
        el.scrollLeft = el.scrollLeft + w
    })
})
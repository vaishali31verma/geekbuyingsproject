

let products = JSON.parse(localStorage.getItem("addcart"));

 let pro = document.getElementById("productList")

 displayData(products)

 function displayData(data){
    data.forEach(function(el){
        let div= document.createElement("div");
        div.setAttribute("class","special");

        let img = document.createElement("img");
        img.src = el.image;

        let des = document.createElement("p");
        des.innerText=el.detail;

        let cou = document.createElement("p");
        cou.innerText = "x"+el.count;

        let price = document.createElement("p");
        price.innerText ="₹ "+ Math.floor(el.original)*el.count;

        div.append(img,des,cou,price);
        pro.append(div)
    })
 }

 let total = JSON.parse(localStorage.getItem("total"));

 let aws = document.querySelector("#aws");
 aws.innerText = "₹ "+Number(total);

 let red = document.querySelector("#red");
 let x = Number(total)+Number(500);
 red.innerText = "₹ "+x

 localStorage.setItem("final",JSON.stringify(x))

 document.querySelector("#btn").addEventListener("click",function(){
    window.location.href="payment.html"
 })
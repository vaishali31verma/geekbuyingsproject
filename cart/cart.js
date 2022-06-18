let products = JSON.parse(localStorage.getItem("addcart"));
let pro = document.getElementById("product")
//let items = document.querySelector(".items")
let ship = document.querySelector("#ship")
let ship1 = document.querySelector("#ship1")
let sub = document.querySelector("#sub")
let total1 = document.querySelector("#total1")
let subTotal

displayData(products)

function displayData(data){
    
    ship.innerText= "( "+ products.length +" Items"+")"
    ship1.innerText=  products.length 

     subTotal = 0

    data.forEach(function(el,index){


        let count = el.count || 1;
        let div = document.createElement("div");
        div.setAttribute("class","items")
        let div1 = document.createElement("div");
        div1.setAttribute("id","a2")
        let img = document.createElement("img");
        img.setAttribute("class","avtar");
        img.src= el.image;
        div1.append(img)
        let div2 = document.createElement("div");
        div2.setAttribute("id","b2")
        let des = document.createElement("p");
        des.innerText = el.detail;
        div2.append(des)
        let div3 = document.createElement("div");
        div3.setAttribute("id","c2")
        let price = document.createElement("p");
        price.innerText = "₹ "+el.original

        div3.append(price)

        let div4 = document.createElement("div");
        div4.setAttribute("id","d2")
        let dec = document.createElement("button");
        dec.innerText= "-";
        let inc = document.createElement("button");
        inc.innerText="+";
        let p = document.createElement("p");
        p.innerText= count;

        dec.addEventListener("click",function(){
            decCount(el);
        })

        inc.addEventListener("click",function(){
            incCount(el);
        })

        div4.append(dec,p,inc)

        let div5=document.createElement("div")
        div5.setAttribute("id","e2")
        let total = document.createElement("h3");
        total.innerText = "₹ "+Number(count)*Number(el.original);
        div5.append(total)
       subTotal+= Number(count)*Number(el.original);
        
       sub.innerHTML = "₹ "+subTotal
        total1.innerHTML= "₹ "+subTotal

        

        let div6=document.createElement("div");
        div6.setAttribute("id","f2");

        div6.innerText = " Delete"

        div6.addEventListener("click",function(){
            deleteItem(el,index);
        })

        div.append(div1,div2,div3,div4,div5,div6);
        

        pro.append(div)

    })
}

localStorage.setItem("total",JSON.stringify(subTotal))

function  decCount(el){
if(el.count>1){
    el.count--;
}


    localStorage.setItem("products",JSON.stringify(products));
    window.location.reload()

}

function  incCount(el){

    el.count++;
    localStorage.setItem("addcart",JSON.stringify(products));
    window.location.reload()

}

function deleteItem(el,index){
    products.splice(index,1);
    localStorage.setItem("addcart",JSON.stringify(products));
    window.location.reload()
}

document.querySelector("#e1").addEventListener("click",function(){
    window.location.href="../Shipping page/shipping.html"
})
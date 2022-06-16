

const getData = async ( url )=>{
    try{
        let response = await fetch( url );
        // console.log( response );
        let data = await response.json();
        data = data.Bluetooth_speaker ;
        console.log("data", data);
        
        let htol=document.getElementById("")
        return data;
        

    }catch(err){
       console.log("err", err);
    }
}


const appendData = (data, main)=>{
    main.innerHTML = null ;
    data.forEach((ele)=>{
        let div = document.createElement("div");

        let image1 = document.createElement("img");
        image1.src = ele.image;
        image1.style.width= '100%' ;

        let detail1 = document.createElement("p");
        detail1.innerText = ele.detail;

        let price = document.createElement("p");
        price.innerText ="₹"+ele.original;
        
        
        let beforePrice=document.createElement("p");
        beforePrice.innerText="₹"+ele.before;
        beforePrice.setAttribute("class","linetrough");
        console.log("ele.before",ele.before);

        let discon=document.createElement("p");
        discon.innerText="₹"+ele.discount;
        discon.setAttribute("class","discounted");

        let starrr=document.createElement("p");
        starrr.innerText=ele.star;



        div.append(image1,detail1,price,beforePrice,discon,starrr);

        main.append(div);
    })
}


export  {getData, appendData};
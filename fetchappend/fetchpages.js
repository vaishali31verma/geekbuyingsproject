

const getData = async ( url )=>{
    try{
        let response = await fetch( url );
        // console.log( response );
        let data = await response.json();
        data = data.Bluetooth_speaker ;
        console.log("data", data);
        
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

        

        div.append(image1,detail1);

        main.append(div);
    })
}


export  {getData, appendData};
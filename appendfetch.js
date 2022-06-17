function sshow(container,images){
    let i=0;
    // let container=document.querySelector("#prodimg");
    function storedata(){
        var fimg=document.createElement("img")
        fimg.src=images[0]

        container.append(fimg)
        i=1
        setInterval(function(){
        if(i===images.length){
        i=0;
    }
    container.innerHTML=null;
    let currimage=images[i];
    // console.log("i",i)

    let img=document.createElement("img")
    img.src=currimage;
    container.append(img)
    i++;
},2000)

    }
    storedata()
}

function descrip(description,obj){
    let desc1=document.createElement("p")
    desc1.innerText=obj.description;
    let descimg=document.createElement("img")
    descimg.id="specifications_img"
    descimg.src=obj.descriptionimg;
    description.append(desc1,descimg)
}

export {sshow,descrip};
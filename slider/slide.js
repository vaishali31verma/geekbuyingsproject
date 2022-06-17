let display5 = (data,con) => {
    data.forEach(function (el) {
      var div = document.createElement("div")
      div.addEventListener("click",function(){
        datainlocal(el)
      })
      var img = document.createElement("img")
      img.setAttribute("class", "imgp1")
      img.src = el.image
  
  
  
      var h5 = document.createElement("h5")
      h5.innerText = el.off
      h5.setAttribute("class", "off1")
  
      var h4 = document.createElement("h4")
      h4.innerText = el.detail
      h4.setAttribute("class", "discri1")
  
      var p = document.createElement("p")
      p.innerText = el.original
      p.setAttribute("class", "priced1")
      
    //   div2.append(img, h5, h4, p)
    //   document.querySelector(".con-2").append(div2)
      div.append(img, h5, h4, p)
      
      con.append(div)
    })
  
  }
  


  let datainlocal = (el)=>{
    localStorage.setItem("item",JSON.stringify(el))
    window.location.href="../geekbuyingsproject/showdetaileddata/showdata.html"
  }
  export {display5} 


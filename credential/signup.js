submit=()=>{
 

    function Obj(text,email,password){
    this.name=text;
    this.email=email;
    this.password=password;
    
    }
    
    let text=document.querySelector("#name").value;
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
    
    let obj1=new Obj(text,email,password)
    console.log(obj1)
    
    localStorage.setItem("user",JSON.stringify(obj1))
    window.location.href="../index.html"
    }
   

function submit(){
    let email1=document.querySelector("#email").value
    let password1=document.querySelector("#password").value
    
    let data=JSON.parse(localStorage.getItem("user"))
    
    if(data.email===email1 && data.password===password1){
        alert("Sigin succesfully")
        window.location.href="../index.html"
    }
    else{
        let alert1=document.getElementById("alert")
        alert1.innerText="Sorry, we don't recognize that email. Please try again."
    }
}


const pass_fieldd= document.querySelector(".pass-key"); 
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", ()=>{
    if(pass_fieldd.type === "password"){
        pass_fieldd.type ="text";
        showBtn.textContent="HIDE";
        showBtn.style.color="#2498bd";
    }else{
        pass_fieldd.type="password";
        showBtn.textContent="SHOW";
        showBtn.style.color="#222";
    }
} );
let user=document.querySelector(".mpn");
let pass=document.querySelector(".pass");
let logIn=document.querySelector(".btn-log");
let or=document.querySelector(".or");
let create=document.querySelector(".create");
let fgAcc=document.querySelector(".forgot-acc");
let fgPass=document.querySelector(".forgot-pass");

logIn.addEventListener("click",function(e){
    or.classList.add("hide");
    create.classList.add("hide");
    fgAcc.classList.add("hide");
    fgPass.classList.remove("hide");
    // if(user.value=="" || pass.value==""){
    //     if(user.value=="" && pass.value==""){
    //         user.parentNode.querySelector("p").classList.remove("hide");
    //         pass.parentNode.querySelector("p").classList.remove("hide");
    //     }
    //     else if(user.value==""){
    //         user.parentNode.querySelector("p").classList.remove("hide");
    //         pass.parentNode.querySelector("p").classList.add("hide");
    //     }
    //     else{
    //         pass.parentNode.querySelector("p").classList.remove("hide");
    //         user.parentNode.querySelector("p").classList.add("hide");
    //     }
    // }
    // else{
    //     user.parentNode.querySelector("p").classList.add("hide");
    //     pass.parentNode.querySelector("p").classList.add("hide");
    // }
    if(JSON.parse(localStorage.getItem(`${user.value}`))){
        user.parentNode.querySelector("p").classList.add("hide");
        if(pass.value!=JSON.parse(localStorage.getItem(`${user.value}`)).password){
            e.preventDefault();
            pass.parentNode.querySelector("p").classList.remove("hide");
        }
    }
    else{
        e.preventDefault();
        user.parentNode.querySelector("p").classList.remove("hide");
        pass.parentNode.querySelector("p").classList.remove("hide");
    }
});


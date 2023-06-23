var fname=document.querySelector(".fname");
var lname=document.querySelector(".lname");
var user=document.querySelector(".mpn");
var pass=document.querySelector(".pass");
var date=document.querySelector(".date");
var month=document.querySelector(".month");
var year=document.querySelector(".year");
var selectGen=document.querySelector(".select-gen");
var gender=selectGen.querySelectorAll("input");
var sign=document.querySelector(".btn-sign");
var inputs=document.querySelectorAll("input");
var create=document.querySelector(".create-ins");
var created=document.querySelector(".created");

var array=[];

sign.addEventListener("click",function(){
    var flag=false;
    inputs.forEach(function(x){
        if(x.value){
            
        }
        else{
            x.style.border="2px solid red"
        }
    });
    if(gender[0].checked==true || gender[1].checked==true || gender[2].checked==true){
        gender.forEach(function(x){
            x.parentNode.style.border="1px solid #ccc"
        })
    }
    else{
        gender.forEach(function(x){
            x.parentNode.style.border="2px solid red"
            flag=false;
        })
    }
    if(fname.value.length>2 && (user.value.includes("@gmail.com") || user.value.length>=10) && pass.value.length>=6){
        flag=true;
    }
    if(flag){
        create.classList.add("hide")
        created.classList.remove("hide");
        var obj={
            firstName:fname.value,
            lastName:lname.value,
            userID:user.value,
            password:pass.value,
            gender:"",
            dob:`${date.value}/${month.value}/${year.value}`
            }
        localStorage.setItem(`${obj.userID}`,JSON.stringify(obj));
    }
});

fname.addEventListener("change",function(){
    if(fname.value.length>2){
        fname.style.border="1px solid #ccc"
    }
    else{
        fname.style.border="2px solid red" 
    }
});

lname.addEventListener("change",function(){
    if(lname.value){
        lname.style.border="1px solid #ccc"
    }
    else{
        lname.style.border="2px solid red" 
    }
});

user.addEventListener("change",function(){
    if(user.value.includes("@gmail.com") || user.value.length>=10){
        user.style.border="1px solid #ccc"
    }
    else{
        user.style.border="2px solid red" 
    }
});

pass.addEventListener("change",function(){
    if(pass.value.length>=6){
        pass.style.border="1px solid #ccc"
    }
    else{
        pass.style.border="2px solid red" 
    }
});
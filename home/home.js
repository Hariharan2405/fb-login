var click=document.querySelector(".post-place");
var box=document.querySelector(".allpost");
var create=document.querySelector(".create-post");
var closee=document.querySelector(".create-close");
var main=document.querySelector("#main");
var post=document.querySelector(".post-btn");

click.addEventListener("click",function(){
    main.style.opacity="0.3"
    create.classList.remove("hide");
    document.querySelector("#post").value="";
});
closee.addEventListener("click",function(){
    create.classList.add("hide");
    main.style.opacity="1"
});

post.addEventListener("click",function(){
    var content=document.querySelector("#post").value;
    var card=document.createElement("div");
    card.classList.add("card");
    var cardHead=document.createElement("div");
    cardHead.classList.add("cardHead");
    var cardBody=document.createElement("div");
    cardBody.classList.add("cardBody");
    var cardFoot=document.createElement("div");
    cardFoot.classList.add("cardFoot");
    card.appendChild(cardHead);
    card.appendChild(cardBody);
    card.appendChild(cardFoot);

    var proImg=document.createElement("img");
    proImg.src="https://i.pinimg.com/736x/a2/98/16/a29816cd63e5d731cc70cfd3f88c2ce8.jpg";
    proImg.classList.add("card-proImg");
    var proName=document.createElement("p");
    proName.innerText="Hariharan"
    var postDel=document.createElement("div");
    var icon1=document.createElement("i");
    icon1.classList.add("bi","bi-trash3-fill")
    postDel.appendChild(icon1);
    postDel.classList.add("postDel");
    cardHead.appendChild(proImg);
    cardHead.appendChild(proName);
    cardHead.appendChild(postDel);

    var postText=document.createElement("h2");
    postText.innerText=content;
    cardBody.appendChild(postText);

    var f1=document.createElement("div");
    f1.classList.add("f1");
    var fimg=document.createElement("div");
    fimg.classList.add("fimg")
    var icon2=document.createElement("i");
    icon2.classList.add("bi","bi-hand-thumbs-up-fill")
    fimg.appendChild(icon2);
    var fcom=document.createElement("div");
    fcom.classList.add("fcom");
    var com=document.createElement("p");
    var icon3=document.createElement("i");
    icon3.classList.add("bi","bi-chat-left")
    com.appendChild(icon3);
    var share=document.createElement("p");
    var icon4=document.createElement("i");
    icon4.classList.add("bi","bi-arrow-90deg-right");
    share.appendChild(icon4);
    fcom.appendChild(com);
    fcom.appendChild(share);
    f1.appendChild(fimg);
    f1.appendChild(fcom);
    cardFoot.appendChild(f1);

    box.appendChild(card);

    create.classList.add("hide");
    main.style.opacity="1"

    var del=document.querySelectorAll(".postDel");
    del.forEach(function(x){
        x.addEventListener("click",function(e){
            var current=e.currentTarget.parentNode.parentNode;
            current.remove();
        });
    })
});


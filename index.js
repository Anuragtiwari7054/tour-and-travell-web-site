let user=document.getElementById("user");
let btn=document.getElementById("btn");
let placename=document.getElementById("placename");
let submit=document.getElementById("submit");

user.addEventListener("click",function(){
    document.querySelector(".loginpage").classList.toggle("active");
})

btn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    if(email.value=="" && password.value=="")
    alert("Please enter a detail")
else{
    alert("you logged in");
    document.querySelector(".loginpage").style.display="none";
}
})

submit.addEventListener("click",function(){
    if(placename.value=="")
    alert("fill form")
else{
    alert(placename.value+" tour booked")
   
}
})

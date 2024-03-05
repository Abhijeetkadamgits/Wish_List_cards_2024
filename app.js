let crushstatus = document.querySelector("h3")

let addbtn = document.querySelector("#addbtn")

let removebtn = document.querySelector("#remove")

addbtn.addEventListener("click" , function(){
  crushstatus.innerHTML = "In 2024"
  crushstatus.style.color = "green"
});

removebtn.addEventListener("click", function(){
  crushstatus.innerHTML = "Before 2025"
  crushstatus.style.color = "red"
});
let btn= document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let del= document.querySelectorAll(".delete")

btn.addEventListener("click",function(){
    let item= document.createElement("li");
    let delbtn= document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete")
    item.innerText=inp.value;
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click",function(event){
   if(event.target.nodeName == "BUTTON"){
    let listItem= event.target.parentElement;
    listItem.remove();
    console.log("deleted")

   }
})
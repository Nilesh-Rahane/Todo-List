let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click", function()
{
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);    
    inp.value="";
});

ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});
// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function()
// {
//     let par=this.parentElement;
//     console.log(par);
//     par.remove();
// })
// }
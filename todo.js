const form=document.querySelector("#todo");
const inputText=document.querySelector("input[name='inputtext']");
const ul=document.querySelector("ul");
const btn=document.querySelector("button");



btn.addEventListener("click", function(e){
    e.preventDefault();
    const newTodo= makeItem(inputText.value);
    ul.appendChild(newTodo);
    inputText.value="";
    let ulText = ul.innerHTML;
    localStorage.setItem("newTodo",ulText);
  
    
    
});

ul.addEventListener("click", function(e){

    const box=document.querySelectorAll(".checkbox");
    const doneLi=document.querySelector("#createdLi");
    if(e.target.className === "newbutton"){
        e.target.parentElement.remove();
        let ulText=ul.innerHTML;
        localStorage.setItem("newTodo", ulText); 
    }
    if (e.target.className=== "checkbox"){
        for (let i=0; i<box.length; i++){
            if(e.target.checked ===true){
                e.target.parentElement.className = "crossout";
                let ulText=ul.innerHTML;
                localStorage.setItem("newTodo", ulText)
            }else{
                e.target.parentElement.className="";
                let ulText=ul.innerHTML;
                localStorage.setItem("newTodo", ulText)
            }}
    }
}); 


function makeItem(text){
    const newLi=document.createElement("li");
    newLi.innerText=text;
    newLi.setAttribute("id", "createdLi");
    const checkBox= document.createElement("input")
    checkBox.type="checkbox";
    checkBox.setAttribute("class", "checkbox");
    newLi.appendChild(checkBox);
    const newButton = document.createElement("button");
    newButton.innerText="Remove From List";
    newLi.appendChild(newButton);
    newButton.setAttribute("class","newbutton");
    localStorage.setItem("li",newLi.innerHTML);
    return newLi;
   
    
}
let saved = localStorage.getItem("newTodo");


if(saved){
    ul.innerHTML=saved;
}else{
    ul.innerHTML="";
};

let alreadyDone=document.querySelectorAll(".checkbox");
console.log(alreadyDone);

function crossout(){
    for (let i=0; i<alreadyDone.length; i++){
        let isChecked=alreadyDone[i].parentElement.getAttribute("class");
        console.log(isChecked);
        if(isChecked==="crossout"){
            alreadyDone[i].checked=true;
        }
        
    }
}

crossout();
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
    localStorage.setItem("newTodo", ulText);
    
    
    
});

ul.addEventListener("click", function(e){
    const box=document.querySelectorAll(".checkbox");
    const doneLi=document.querySelector("#createdLi");
    if(e.target.className === "newbutton"){
        e.target.parentElement.remove();
    }
    // Need to remove information store in local storage when the remove button is clicked. 
    // I think I'm supposed to write logic that is able to open local storage when the button is clicked and check to see if the local storage contains the parent element of the button clicked
    // and remove it from local storage
    if (e.target.className=== "checkbox"){
        for (let i=0; i<box.length; i++){
            if(e.target.checked ===true){
                e.target.parentElement.className = "crossout";
              
            }else{
                e.target.parentElement.className="";
            }}
    // Need logic to check if a button is clicked and log that into local storage. Same as button
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
    
    return newLi;
   
    
}
let saved = localStorage.getItem("newTodo");


if(saved){
    ul.innerHTML=saved;
}else{
    ul.innerHTML=ul
};




// Not able to remove items/keep checked items from local storage successfully
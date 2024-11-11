const inputbox= document.getElementById("inputBox")
const listbox= document.getElementById("list")
function addTask(){
    if(inputbox.value === ''){
        alert("You must write something")
    }

    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        listbox.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value ="";
    saveData();
}

listbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listbox.innerHTML);
}

function showList(){
    listbox.innerHTML = localStorage.getItem("data");
}

showList()
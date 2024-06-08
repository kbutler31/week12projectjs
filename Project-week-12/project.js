const { data } = require("jquery")

const list-group = document.getElementById(list-group)
const input-box = document.getElementById(input-box)

function addTask(){
    if (inputBox.value === ``){
        alert(`You nust write something!`)
    }
    else{
        let li = document.createElement(`li`);
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createEvent("span");
        span.innerHTML = `\u00d7`;
        li.appendChild(span);
    }        
    inputBox.value = ``;
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagname === `LI`) {
        e.target.classList.toggle("checked");
        saveData();
    
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
fuction showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList()
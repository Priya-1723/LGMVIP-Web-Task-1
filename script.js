const searchInput = document.querySelector("#search-input");
const ulList = document.querySelector(".unordered");

function addTask(){
    if(searchInput.value === ''){
        return;
    } else {
        const li = document.createElement("li");
        li.innerHTML = searchInput.value;
        ulList.appendChild(li);
        let crossBtn = document.createElement("button");
        crossBtn.innerHTML = '×';
        li.appendChild(crossBtn);
    }
    searchInput.value = '';
    saveData();
}

ulList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", ulList.innerHTML);
}
        
function showTask(){
    ulList.innerHTML = localStorage.getItem("data");
}
showTask();
const input = document.getElementById('input-box');
const listSection = document.getElementById('toDoListSection');

addTask = () => { 
    var task = input.value;
    if (task === "") {
        alert("Please enter a task!");
    } else { 
        const listItem = document.createElement('li');
        listItem.innerHTML = task;
        listSection.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        listItem.appendChild(span);
    }
    input.value = "";
    saveData();
    
}

listSection.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.display = "none";
        saveData();
    }
}, false);

saveData = () => { 
    localStorage.setItem("data", listSection.innerHTML);
}

showTask = () => { 
    listSection.innerHTML = localStorage.getItem("data");
}

showTask();
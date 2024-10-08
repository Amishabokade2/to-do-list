const inputBox = document.getElementById('input-box');
const listContsiner = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("Please add your task");
    }else{
        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        li.appendChild(checkbox)

        li.innerHTML = inputBox.value;
        listContsiner.appendChild(li);
        li.appendChild(checkbox)
        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        li.appendChild(span);
    }
    inputBox.value="";
}

listContsiner.addEventListener("click", function(e){
    if(e.target.tagName === 'LI' || e.target.className === 'checkbox'){
        e.target.classList.toggle("checked");
        const checkbox = e.target.querySelector('.checkbox');
        checkbox.checked = !checkbox.checked;
        e.target.classList.toggle("checked", checkbox.checked);
    }
    else if(e.target.tagName === 'I' || e.target.tagName === 'SPAN'){
        e.target.closest('li').remove();
    }
});

function saveData(){
    localStorage.setItem("data", listContsiner.innerHTML);
}

function showTask(){
    listContsiner.innerHTML = localStorage.getItem("data");
}
showTask();
     
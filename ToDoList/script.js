
const inputBox = document.getElementById('inputBox');
const addButton = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');

let editToDo = null;

const addToDo =() =>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert('Write Something');
        return false; 
    }

    if(addButton.value === "Edit"){
        editToDo.target.previousElementSibling.innerHTML = inputText;
        addButton.value = "Add"
        inputBox.value = ""
        return false
    }

    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerHTML = inputText;
    li.appendChild(p);

    const editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'
    editButton.style.borderRadius = '5px'
    editButton.classList.add("btn","editButton")
    li.appendChild(editButton)
    
    
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Remove'
    deleteButton.style.borderRadius = '5px'
    deleteButton.classList.add("btn","deleteButton")
    li.appendChild(deleteButton)
    
    

    toDoList.appendChild(li)
    inputBox.value = "";
}

const updateToDo = (e)=> {
    //  console.log(e.target.innerHTML);
    if(e.target.innerHTML === "Remove"){
        toDoList.removeChild(e.target.parentElement)
    }
     
    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML
        inputBox.focus();
        addButton.value = "Edit"
        editToDo = e;
    }
}
addButton.addEventListener('click',addToDo); 
toDoList.addEventListener('click',updateToDo)
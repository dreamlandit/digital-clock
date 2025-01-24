const todoInput = document.getElementById("todo-int");
const todoAddbtn = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");

const db = new Ls(); // Assuming 'Ls' is your local storage wrapper

const getAllData = () => {
    const data = db.find("todos");

    let list = "";
    if (data) { // Check if data exists before using .map()
        data.map((item, index) => {
            list += `<li class="list-group-item d-flex justify-content-between my-2">${item}<button class="btn btn-sm btn-danger" onclick="deleteData('${item}')">X</button></li>`;
        });
    } else {
        // Handle the case where no data is found (optional)
        list += "<li class='list-group-item'>No todos yet!</li>"; 
    }

    todoList.innerHTML = list;
};

getAllData();


todoAddbtn.onclick = (e) => {
    const todoData = todoInput.value;
    db.create("todos", todoData); // Make sure the key is consistent
    getAllData();
};



const deleteData = (item) =>{
  db.delete("todos",item);
  getAllData();
};






let todoCount = 0;
function addTodo() {
    var td = $("#todoInput").val();
    if (td != "") {
        todoCount += 1;
        $(".lista-todo").append(`
        <div class="todoStyle">
                <h1><span class="text-danger">${todoCount})</span> ${td}</h1>
                <div>
                    <button class="btn btn-warning ">Edit</button>
                    <button onclick="deleteTodo()" class="btn btn-danger ">Delete</button>
                </div>
            </div>
        `);
        $("#todoInput").val("");
    } else {

    }
}

function deleteTodo() {
    $(".todoStyle").addClass("doneTodo");
}
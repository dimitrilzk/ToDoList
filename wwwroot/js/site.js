let todoCount = 0;
function addTodo() {
    var td = $("#todoInput").val();
    if (td != "") {
        todoCount += 1;
        $(".lista-todo").append(`
        <div class="todoStyle" data-id="${todoCount}">
                <h1><span class="text-danger">${todoCount})</span> ${td}</h1>
                <div>
                    <button class="btn btn-warning ">Edit</button>
                    <button onclick="deleteTodo(event)" class="btn btn-danger ">Delete</button>
                </div>
            </div>
        `);
        $("#todoInput").val("");
    } else {

    }
}

function deleteTodo(e) {
    let count = $(e.target).closest("[data-id]").data("id");
    $(`[data-id=${count}]`).addClass("doneTodo");
    
}
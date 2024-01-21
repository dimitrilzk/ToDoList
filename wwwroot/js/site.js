let todoCount = 0;
function addTodo() {
    var td = $("#todoInput").val();
    if (td != "") {
        todoCount += 1;
        $(".lista-todo").append(`
        <div class="todoStyle" data-id="${todoCount}">
            <h2><span class="text-danger">${todoCount})</span> ${td}</h2>                               
                <div class="buttons">
                    <button onclick="editTodo(event)" class="editBtn btn btn-warning">Edit</button>                    
                    <button onclick="deleteTodo(event)" class="deleteBtn btn btn-danger">Delete</button>
                </div>
            </div>
        `);
        $("#todoInput").val("");
    } else {

    }
}

function deleteTodo(e) {
    let count = $(e.target).closest("[data-id]").data("id");
    $(`[data-id=${count}] h2`).addClass("doneTodo");
    $(`[data-id=${count}] .deleteBtn`).addClass("d-none");
    $(`[data-id=${count}] .editBtn`).addClass("d-none");
    $(`[data-id=${count}] .buttons`).append(`<button onclick="undoTodo(event)" class="undoBtn btn btn-info">Annulla</button>`);

}

function undoTodo(e) {
    let count = $(e.target).closest("[data-id]").data("id");
    $(`[data-id=${count}] h2`).removeClass("doneTodo");
    $(`[data-id=${count}] .undoBtn`).addClass("d-none");    
    $(`[data-id=${count}] .deleteBtn`).removeClass("d-none");
    $(`[data-id=${count}] .editBtn`).removeClass("d-none");
}

function editTodo(e) {
    let count = $(e.target).closest("[data-id]").data("id");
    let todo = $(`[data-id=${count}] h2`).text();
    todo.slice(0, 1);
    console.log(todo);
    $(e.target).closest("h2").replaceWith(`<input type="text" value=${todo} />`)

}
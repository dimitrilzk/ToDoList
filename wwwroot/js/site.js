function addTodo() {
    var td = $("#todoInput").val();
    if (td != "") {
        $(".lista-todo").append(`<h1 class="text-danger">${td}</h1><button>Delete</button>`);
        $("#todoInput").val("");
    } else {

    }
}
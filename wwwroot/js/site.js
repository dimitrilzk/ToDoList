function addTodo() {
    var td = $("#todoInput").val();
    if (td != undefined) {
        $(".lista-todo").append(`<h1 class="text-danger">${td}</h1><button>Delete</button>`);
        $("#todoInput").val("");
    }
}
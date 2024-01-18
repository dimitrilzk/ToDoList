function addTodo() {
    var td = $("#todoInput").val();
    if (td != undefined) {
        $(".lista-todo").append(`<h1 class="text-danger text-decoration-line-through">${td}</h1>`);
        $("#todoInput").val("");
    }
}
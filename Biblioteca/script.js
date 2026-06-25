const login = document.getElementById("login");

if (login) {
    login.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "cadastro.html";
    });
}

function formulario() {
    window.location.href = "formulario.html";
}

const livro = document.getElementById("livro");

if (livro) {
    livro.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Livro cadastrado com sucesso!");
    });
}
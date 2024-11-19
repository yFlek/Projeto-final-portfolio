// Selecionar o botão
var botaoTopo = document.getElementById("voltarAoTopo");

// Mostrar ou esconder o botão ao rolar a página
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        botaoTopo.style.display = "block"; // Mostra o botão
    } else {
        botaoTopo.style.display = "none"; // Esconde o botão
    }
};

// Rolar para o topo ao clicar no botão
botaoTopo.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Selecionar todos os elementos com a classe 'animar'
var elementosAnimar = document.querySelectorAll(".animar");

function verificarScroll() {
    var alturaJanela = window.innerHeight;

    elementosAnimar.forEach((elemento) => {
        var distanciaTopo = elemento.getBoundingClientRect().top;

        if (distanciaTopo < alturaJanela - 100) {
            elemento.classList.add("visivel");
        } else {
            elemento.classList.remove("visivel");
        }
    });
}

// Verificar a cada rolagem
window.addEventListener("scroll", verificarScroll);


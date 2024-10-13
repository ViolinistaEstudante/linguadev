const listaSelecaoLinguadevs = document.querySelectorAll(".linguadev");

listaSelecaoLinguadevs.forEach(linguadev => {
    linguadev.addEventListener("click", () => {

        esconderCartaoLinguadev();

        const idLinguadevSelecionado = mostrarCartaoLinguadev(linguadev);

        desativarLinguadevNaListagem();

        ativarLinguadevNaListagem(idLinguadevSelecionado);

    })
})

function ativarLinguadevNaListagem(idLinguadevSelecionado) {
    const linguadevSelecionadoNaListagem = document.getElementById(idLinguadevSelecionado);
    linguadevSelecionadoNaListagem.classList.add("ativo");
}

function desativarLinguadevNaListagem() {
    const linguadevAtivoNaListagem = document.querySelector(".ativo");
    linguadevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoLinguadev(linguadev) {
    const idLinguadevSelecionado = linguadev.attributes.id.value;
    const idDoCartaoLinguadevParaAbrir = "cartao-" + idLinguadevSelecionado;
    const cartaoLinguadevParaAbrir = document.getElementById(idDoCartaoLinguadevParaAbrir);
    cartaoLinguadevParaAbrir.classList.add("aberto");
    return idLinguadevSelecionado;
}

function esconderCartaoLinguadev() {
    const cartaoLinguadevAberto = document.querySelector(".aberto");
    cartaoLinguadevAberto.classList.remove("aberto");
}


(function(){
    emailjs.init({
        publicKey: "0tsjHj3Hmq4faZFCu",
    });
})();

const form = document.querySelector(".rodape__form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_l21tpzr", "template_8tftolq", this)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        })
        .catch((error) => {
            console.error("Erro ao enviar mensagem:", error);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
        });
});
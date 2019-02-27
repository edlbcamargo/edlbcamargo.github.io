function myFunctiondd() {
    var x = document.getElementById("saibaMais");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("meuBotao").innerHTML = "Saiba mais";
    } else {
        x.style.display = "block";
        document.getElementById("meuBotao").innerHTML = "Ver menos";
    }
}

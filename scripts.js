function calcularVelocidade() {
    var distancia = document.getElementById("distancia").value;
    var tempo = document.getElementById("tempo").value;

    if (distancia > 0 && tempo > 0) {
        var velocidadeMedia = distancia / tempo;
        document.getElementById("resultado").innerHTML = "A velocidade média é: " + velocidadeMedia + " m/s";
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para distância e tempo!";
        document.getElementById("resultado").style.color = "red";
    }
}

function verificarRespostas() {
    var respostasCorretas = {
        ex1: "b",
        ex2: "a",
        ex3: "a",
        ex4: "a",
        ex5: "a",
    };

    for (var i = 1; i <= 5; i++) {
        var respostaSelecionada = document.querySelector(`input[name="ex${i}"]:checked`);
        var resultadoElement = document.getElementById(`resultadoex${i}`);

        if (respostaSelecionada) {
            if (respostaSelecionada.value === respostasCorretas[`ex${i}`]) {
                resultadoElement.innerHTML = "Acertou! ✓ Resposta correta!";
                resultadoElement.style.color = "green";
            } else {
                resultadoElement.innerHTML = "Errou! ✗ Resposta incorreta!";
                resultadoElement.style.color = "red";

                var alternativas = document.querySelectorAll(`input[name="ex${i}"]`);
                alternativas.forEach(function(alt) {
                    if (alt.value !== respostasCorretas[`ex${i}`]) {
                        alt.parentElement.style.display = "none";
                    }
                });
            }
        } else {
            resultadoElement.innerHTML = "Errou! ✗ Por favor, selecione uma resposta!";
            resultadoElement.style.color = "red";
        }
        
        resultadoElement.style.display = "block";
    }
}
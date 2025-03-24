function atualizarCumprimento()
{
    let turno = document.getElementById("turno"). value;
    let nome = document.getElementById("nome"). value;
    let Cumprimento = document.getElementById("Cumprimento"); 

    if (turno == 0){Cumprimento.innerHTML = "Bom dia " + nome;}
    else if (turno == 1 ){Cumprimento.innerHTML="Boa tarde " + nome;}
    else if (turno == 2 ){Cumprimento.innerHTML = "Boa noite " + nome;}
    else {Cumprimento.innerHTML = "";}
}


let valor = 0;

function mostrarBotoes() {
    document.getElementById("controles").style.display = "block";
    document.getElementById("mostrar-botoes").style.display = "none"; 
}

function atualizarBarra() {
    const valorElement = document.getElementById("valor");
    const barra = document.getElementById("barra-progresso");

    valorElement.textContent = valor;
    let percentual = (valor / 10) * 100;
    barra.style.width = percentual + "%";

    if (valor <= 3) {
        barra.style.backgroundColor = "red";
    } else if (valor <= 7) {
        barra.style.backgroundColor = "yellow";
    } else {
        barra.style.backgroundColor = "green";
    }
}

function diminuir() {
    if (valor > 0) {
        valor--;
        atualizarBarra();
    }
}

function aumentar() {
    if (valor < 10) {
        valor++;
        atualizarBarra();
    }
}

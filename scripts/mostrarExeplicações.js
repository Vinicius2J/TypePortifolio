let btnExplicaçãoAberta = document.getElementById('mostrarExplicaçãoCACAN');
let btnExplicaçãoFechada = document.getElementById('fecharExplicaçãoCACN');

function exibirExplicacao() {
    btnExplicaçãoAberta.style.display = 'none';
    btnExplicaçãoFechada.style.display = 'flex';

    document.getElementById('calculoAniversario').style.display = 'flex';
}

function ocultarExplicacao() {
    btnExplicaçãoAberta.style.display = 'flex';
    btnExplicaçãoFechada.style.display = 'none';

    document.getElementById('calculoAniversario').style.display = 'none';
}

//--------------------------------------------------------------------------

let btnExplicaçãoAbertaCinema = document.getElementById('mostrarExplicaçãoCinema');
let btnExplicaçãoFechadaCinema = document.getElementById('fecharExplicaçãoCinema');

function exibirExplicacaoCinema() {
    btnExplicaçãoAbertaCinema.style.display = 'none';
    btnExplicaçãoFechadaCinema.style.display = 'flex';

    document.getElementById('entrarNoCinema').style.display = 'flex';
}

function ocultarExplicacaoCinema() {
    btnExplicaçãoAbertaCinema.style.display = 'flex';
    btnExplicaçãoFechadaCinema.style.display = 'none';

    document.getElementById('entrarNoCinema').style.display = 'none';
}

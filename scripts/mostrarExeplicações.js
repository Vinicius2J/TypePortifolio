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

//------------------------------------------------------------------------------

let btnExplicaçãoAbertaPd = document.getElementById('mostrarExplicaçãoPd');
let btnExplicaçãoFechadaPd = document.getElementById('fecharExplicaçãoPd');

function exibirExplicacaoPd() {
    btnExplicaçãoAbertaPd.style.display = 'none';
    btnExplicaçãoFechadaPd.style.display = 'flex';

    document.getElementById('pegandoDados01').style.display = 'flex';
}

function ocultarExplicacaoPd() {
    btnExplicaçãoAbertaPd.style.display = 'flex';
    btnExplicaçãoFechadaPd.style.display = 'none';

    document.getElementById('pegandoDados01').style.display = 'none';
}

//____________parte2__________________________

let btnExplicaçãoAbertaPd02 = document.getElementById('mostrarExplicaçãoPd02');
let btnExplicaçãoFechadaPd02 = document.getElementById('fecharExplicaçãoPd02');

function exibirExplicacaoPd02() {
    btnExplicaçãoAbertaPd02.style.display = 'none';
    btnExplicaçãoFechadaPd02.style.display = 'flex';

    document.getElementById('pegandoDados02').style.display = 'flex';
}

function ocultarExplicacaoPd02() {
    btnExplicaçãoAbertaPd02.style.display = 'flex';
    btnExplicaçãoFechadaPd02.style.display = 'none';

    document.getElementById('pegandoDados02').style.display = 'none';
}


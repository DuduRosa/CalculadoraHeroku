function Fbtn1() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 1;

}

function Fbtn2() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 2;

}

function Fbtn3() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 3;

}

function Fbtn4() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 4;

}

function Fbtn5() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 5;

}

function Fbtn6() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 6;

}

function Fbtn7() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 7;

}

function Fbtn8() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 8;

}

function Fbtn9() {

    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 9;

}

function Fbtn0() {
    var telaValor = window.document.getElementById('tela').value;
    var tela = window.document.getElementById('tela').value = telaValor + 0;
}

function somar() {
    var telaValor = window.document.getElementById('tela').value;
    var telaFake = window.document.getElementById('telaFake').value = telaValor;
    var telaOperador = window.document.getElementById('telaOperador').value = '+';
    var telaValor = window.document.getElementById('tela').value = '';
}

function subtrair() {
    var telaValor = window.document.getElementById('tela').value;
    var telaFake = window.document.getElementById('telaFake').value = telaValor;
    var telaOperador = window.document.getElementById('telaOperador').value = '-';
    var telaValor = window.document.getElementById('tela').value = '';
}

function dividir() {
    var telaValor = window.document.getElementById('tela').value;
    var telaFake = window.document.getElementById('telaFake').value = telaValor;
    var telaOperador = window.document.getElementById('telaOperador').value = '/';
    var telaValor = window.document.getElementById('tela').value = '';
}

function multiplicar() {
    var telaValor = window.document.getElementById('tela').value;
    var telaFake = window.document.getElementById('telaFake').value = telaValor;
    var telaOperador = window.document.getElementById('telaOperador').value = '*';
    var telaValor = window.document.getElementById('tela').value = '';
}

function ce() {
    var telaValor = window.document.getElementById('tela').value = '';
    var telaFake = window.document.getElementById('telaFake').value = telaValor;
}

function igual() {


    var telaValor = window.document.getElementById('tela').value;
    var telaFake = window.document.getElementById('telaFake').value;
    var telaOperador = window.document.getElementById('telaOperador').value;

    if (telaOperador == '+') {

        var NFK = Number(telaFake);
        var TV = Number(telaValor);
        var result = Number(NFK + TV);
        var telaValor = window.document.getElementById('tela').value = result;
    } else if (telaOperador == '-') {

        var NFK = Number(telaFake);
        var TV = Number(telaValor);
        var result = Number(NFK - TV);
        var telaValor = window.document.getElementById('tela').value = result;
    } else if (telaOperador == '*') {

        var NFK = Number(telaFake);
        var TV = Number(telaValor);
        var result = Number(NFK * TV);
        var telaValor = window.document.getElementById('tela').value = result;
    } else if (telaOperador == '/') {

        var NFK = Number(telaFake);
        var TV = Number(telaValor);
        var result = Number(NFK / TV);
        var telaValor = window.document.getElementById('tela').value = result;
    }

}
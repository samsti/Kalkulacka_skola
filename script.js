

function vypocet() {

    let vyberOpearace = document.getElementById('operace')
    let prvniCislo = parseFloat(document.getElementById('inputText1').value);
    let druheiCislo = parseFloat(document.getElementById('inputText2').value);
    let vysledek = document.getElementById('vysledek')

        switch (vyberOpearace.value) {
            case '+':
                vysledek.innerHTML = prvniCislo.value + druheiCislo.value
                break;
            case '-':
                vysledek.innerHTML = prvniCislo.value - druheiCislo.value
                break;
            case '*':
                vysledek.innerHTML = prvniCislo.value * druheiCislo.value
                break;
            case '÷':
                vysledek.innerHTML = prvniCislo.value / druheiCislo.value
                break;

        }
}





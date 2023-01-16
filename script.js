

function vypocet() {

    let prvniCislo = parseFloat(document.getElementById('inputText1').value.replaceAll(",", "."));
    let druheCislo = parseFloat(document.getElementById('inputText2').value.replaceAll("," , "."));
    let vyberOperace = document.getElementById('operace');
    let operace = vyberOperace.options[vyberOperace.selectedIndex].value;
    let vysledekHtml = document.getElementById('vysledek');
    let vysledek;


    if(isNaN(prvniCislo) || isNaN(druheCislo)){
        window.alert("Zadejte obě čísla prosím")
        vysledekHtml = "";
    }

    
        switch (operace) {
            
            case '1':
                vysledek = prvniCislo + druheCislo
                vysledekHtml.innerHTML = vysledek;
                break;
            case '2':
                vysledek = prvniCislo - druheCislo
                vysledekHtml.innerHTML = vysledek;
                break;
            case '3':
                vysledek = prvniCislo * druheCislo
                vysledekHtml.innerHTML = vysledek;
                break;
            case '4':
                if(prvniCislo != 0 & druheCislo != 0){
                    vysledek = prvniCislo / druheCislo
                    vysledekHtml.innerHTML = vysledek;
                }else{
                    window.alert("Nula nulou nelze dělit!")
                }
                break;

        }
        
        
}





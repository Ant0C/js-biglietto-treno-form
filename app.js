//  Nome viaggiatore
// let nome = prompt('Il tuo nome')
// //document.getElementById("nomeviaggiatore").innerHTML = "Nome Viaggiatore:" + " " + nome;
// console.log(nome)

// //  Cognome viaggiatore
// let cognome = prompt('Il tuo cognome')
// //document.getElementById("cognomeviaggiatore").innerHTML = "Cognome Viaggiatore:" + " " + cognome;
// console.log(cognome)


//  Prezzo biglietto escluso sconto

const prezzokm = parseFloat(0.21) 
const scontoMinori = parseFloat(0.80)
const scontoPensionati = parseFloat(0.60)

//  Input dei Km da percorrere

const inputDistanza = document.querySelector("#kmPercorsi");
parseFloat(inputDistanza);
console.log(inputDistanza)
//Selettore per la fascia di età

const inputSelect = document.querySelector("#select");
console.log(inputSelect)
//Bottone per il calcolo
const inputCalcola = document.querySelector("#button");
console.log(inputCalcola)

//Calcolo dello sconto in base alla fascia di età

inputCalcola.addEventListener('click', function(){
    console.log('calcolo')

    let prezzoBiglietto = inputDistanza.value*prezzokm;
    console.log(prezzoBiglietto)

    let sconto = inputSelect.value

    switch (sconto) {
		case 'Minorenne18':
			value=prezzoBiglietto*scontoMinori
			break
		case 'Over65':
			value=prezzoBiglietto*scontoPensionati
		    break
        case 'Adulto':
            value=prezzoBiglietto
			break
	}

    console.log(value)

    //Trasformazione ed inserimento a schermo del prezzo biglietto

    let prezzoDefinitivo = value.toFixed(2)
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
})



// if (età <= 18) {
//     let prezzoFinale = prezzoBiglietto*scontoMinori
//     const sconto20 = scontoMinori*100
//     document.getElementById("sconto").innerHTML = "Sconto Biglietto:" + " " + sconto20 + "%";
//     let prezzoDefinitivo = prezzoFinale.toFixed(2)
//     document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
//     console.log(prezzoFinale)
// }else if (età >= 65){
//     let prezzoFinale = prezzoBiglietto*scontoPensionati
//     const sconto40 = scontoPensionati*100
//     document.getElementById("sconto").innerHTML = "Sconto Biglietto:" + " " + sconto40 + "%";
//     let prezzoDefinitivo = prezzoFinale.toFixed(2)
//     document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
//     console.log(prezzoFinale)
// }
// else {
//     let prezzoDefinitivo = prezzoBiglietto.toFixed(2)
//     document.getElementById("sconto").innerHTML = "Sconto Biglietto:" + " " + "Nessuno sconto per te";
//     document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
//     console.log(prezzoDefinitivo)
// }    

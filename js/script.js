/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const playButton = document.querySelector('header button'); /* take button */
const fieldElement = document.getElementById('field');

//console.log(createBox());

playButton.addEventListener('click', function() {
    fieldElement.innerHTML = ''; //reset the field
    for (let i = 0; i < 100; i++) {
        const boxElement = createBox();
        //console.log(boxElement);
        fieldElement.appendChild(boxElement);
    }
})
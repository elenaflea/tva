
const button = document.querySelector("#btn");
const button2 = document.querySelector("#btn2");
const go1 = document.querySelector("#ht");
const go2 = document.querySelector("#ttcCalcule");
button.addEventListener ("click", calculerTTC);
button2.addEventListener ("click", calculerHT);


function calculerTTC (e) {
    e.preventDefault ();

    const ht = document.querySelector("#ht").value;
    const tva = document.querySelector('input[name = "tva"]:checked').value;
    const ttcInsert = document.querySelector("#ttcCalcule").value;

    let tvaMontant = (ht*tva) - ht ;
    let ttcCalcule = ht*tva ;

        ttcCalcule = ttcCalcule.toFixed(2);
        tvaMontant = tvaMontant.toFixed(2);

        document.querySelector("#tvaMontant").textContent = tvaMontant;
        document.querySelector("#ttcCalcule").value = ttcCalcule ;
    }


    function calculerHT (e) {
        e.preventDefault ();
    
        const ttcInsert = document.querySelector("#ttcCalcule").value;
        const tva = document.querySelector('input[name = "tva"]:checked').value;

        let htCalcule = ttcInsert/tva
        let tvaMontant = ttcInsert -  ttcInsert/tva;

        tvaMontant = tvaMontant.toFixed(2);
        htCalcule = htCalcule.toFixed(2);
    
        document.querySelector("#tvaMontant").textContent = tvaMontant;
        document.querySelector("#ht").value = htCalcule ;
        }


new Vivus('my-svg', { duration: 200 }, myCallback);


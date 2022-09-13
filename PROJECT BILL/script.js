const button = document.querySelector("#btn");
button.addEventListener ("click", calculateAmount);
const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener ("click", showTip);

function showTip (e){
    e.preventDefault ();
    tip.style.display = "block";
}
function calculateAmount (e) {
    e.preventDefault ();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

        if (bill==="" || people==="" || people<1) {
            Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: "Entrez l'information s'il vous plaît",
            confirmButtonText: "D'accord",
        })
    }
    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalSum = amountPerPerson+tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;
}

new Vivus('my-svg', { duration: 200 }, myCallback);
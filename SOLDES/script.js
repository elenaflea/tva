const button = document.querySelector("#btn");
button.addEventListener("click", calculerSoldes);

function calculerSoldes (e) {
    e.preventDefault ();
    const price = document.querySelector("#price").value;
    const sale = document.querySelector("#saleRemise").value;

    if (price===""|| price==="0") {
        Swal.fire({
            icon: 'error',
            title: "Indiquez le prix s'il vous plaît!",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    let newPrice = price*((100-sale)/100);
    let saleAmount =price-(price*(100-sale)/100);

    document.querySelector("#newPrice").textContent = newPrice.toFixed(2) ;
    document.querySelector("#saleAmount").textContent = saleAmount.toFixed(2);
}

new Vivus('my-svg', { duration: 200 }, myCallback);
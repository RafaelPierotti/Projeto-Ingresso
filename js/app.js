let pista = 100;
let superior = 200;
let inferior = 400;

function buy (){
    let quantity = document.getElementById('quantity').value;
    let ticket = document.getElementById('ticket-type').value;

    alert (quantity);
    alert (ticket);
}

let newPista = document.getElementById('qtd-pista');
newPista.textContent = `${pista}`;


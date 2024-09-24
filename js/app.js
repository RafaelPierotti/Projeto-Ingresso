let pista = 100;
let superior = 200;
let inferior = 400;

function buy (){
    let quantity = document.getElementById('quantity').value;
    let ticket = document.getElementById('ticket-type').value;
    let ticketPista = document.getElementById('qtd-pista');
    let ticketSuperior = document.getElementById('qtd-superior');
    let ticketInferior = document.getElementById('qtd-inferior');

    if (ticket == 'pista'){
      
        if (quantity > pista){
            alert ('Valor inválido');
        } else {
            pista -= quantity;

            ticketPista.textContent = `${pista}`;
        }     
   } else if (ticket == 'superior') {

        if (quantity > superior){
            alert ('Valor inválido');
        } else {
            superior -= quantity;
    
            ticketSuperior.textContent = `${superior}`;
        }
   } else if (ticket == 'inferior') { 

        if (quantity > inferior){
            alert ('Valor inválido');
        } else {
            inferior -= quantity;

            ticketInferior.textContent = `${inferior}`;
        }
   }
}

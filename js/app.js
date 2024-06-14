let soldOut = document.getElementById(`game-1`);
function alterarStatus(){
    if(soldOut.classList.contains("dashboard__item__img")){
        soldOut.classList.toggle('dashboard__item__img--rented');
        console.log('Você me apertou!');
    } 
}
soldOut.addEventListener('click', alterarClasse);
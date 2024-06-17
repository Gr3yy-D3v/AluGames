function alterarStatus(gameId) {
    // Seleciona o elemento do jogo e o botão baseado no ID passado
    let gameElement = document.getElementById(`game-${gameId}`);
    let buttonElement = document.getElementById(`button-${gameId}`);
    let gameNameElement = document.getElementById(`name-${gameId}`);
    let gameName = gameNameElement.innerText;

    // Alterna a classe de disponibilidade do jogo
    if (gameElement.classList.contains('dashboard__item__img--rented')) {
        gameElement.classList.remove('dashboard__item__img--rented');
    } else {
        gameElement.classList.add('dashboard__item__img--rented');
    }

    // Alterna a classe e o texto do botão
    if (buttonElement.classList.contains('dashboard__item__button--return')) {
        buttonElement.classList.remove('dashboard__item__button--return');
        buttonElement.innerHTML = 'Alugar';
        alert(`Muito obrigado por devolver o jogo, ${gameName}!`)
    } else {
        buttonElement.classList.add('dashboard__item__button--return');
        buttonElement.innerHTML = 'Devolver';
        alert(`Parabéns, você alugou ${gameName}!`)
    }
}

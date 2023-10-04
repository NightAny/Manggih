const criarToken = (e) => {
    let matriz = JSON.parse(localStorage.getItem('game_data')) || {};

    if (matriz.dados == undefined) {
        matriz.dados = [];
    }

    matriz.dados.push(
        [ e.target[0].value, e.target[1].value ]
    );

    let minhaArrayJSON = JSON.stringify(matriz);

    localStorage.setItem('game_data', minhaArrayJSON);
    alert("Usuario " + e.target[0].value + " criado com Sucesso !!!");
}

document.getElementById("user").addEventListener('submit', criarToken);
const buscarDados = (e) =>{
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem('game_data'));

    for(let i = 0; i < usuarios.dados.length; i++){
        if(usuarios.dados[i][0] === e.target[0].value && usuarios.dados[i][1] === e.target[1].value){
            e.target.submit();
        }
    }
}

document.getElementById("user").addEventListener('submit', buscarDados);
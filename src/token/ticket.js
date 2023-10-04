const voltarLogin = () =>{
    window.location.href = "src/page/login.html";
}

export let matriz = JSON.parse(localStorage.getItem('game_data')) || voltarLogin();
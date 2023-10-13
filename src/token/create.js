const criarToken = async (e) => {
    e.preventDefault();
    
    let cadastro = await fetch("http://localhost/server/cadastrar.php", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({ playernome: e.target[0].value, playersenha: e.target[1].value })
    });

    cadastro = await cadastro.json();

    if(cadastro.response){
        window.location.href = "login.html";
    }
}

document.getElementById("user").addEventListener('submit', criarToken);
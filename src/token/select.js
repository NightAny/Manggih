const criptografarDados = (e) =>{
    let texto = e;
    // Gerar uma chave aleatória de 256 bits (32 bytes)
    let chave = sjcl.random.randomWords(8);
    // Gerar um vetor de inicialização (IV) aleatório de 96 bits (12 bytes)
    let iv = sjcl.random.randomWords(3);

    let aes = new sjcl.cipher.aes(chave);
    let textoBytes = sjcl.codec.utf8String.toBits(texto);
    let cripto = sjcl.mode.gcm.encrypt(aes, textoBytes, iv);

    let textoCriptografado = sjcl.codec.base64.fromBits(cripto);

    console.log("Texto criptografado: " + textoCriptografado);

    return [textoCriptografado, chave, iv];
}

const cacheLogin = (e) =>{
    let matriz = JSON.parse(localStorage.getItem('game_data')) || {};

    if (matriz.dados == undefined) {
        matriz.dados = [];
    }

    matriz.dados = criptografarDados(e);

    let minhaArrayJSON = JSON.stringify(matriz);

    localStorage.setItem('game_data', minhaArrayJSON);
}

const buscarDados = async (e) =>{
    e.preventDefault();

    let busca = await fetch("http://localhost/server/login.php",{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({ playernome: e.target[0].value, playersenha: e.target[1].value })
    });

    busca = await busca.json();

    console.log(busca);
    
    if (busca.response) {
        cacheLogin(e.target[0].value);
        window.location.href = "../../index.html";
    }
}

document.getElementById("user").addEventListener('submit', buscarDados);
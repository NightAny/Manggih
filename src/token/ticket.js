const voltarLogin = () =>{
    window.location.href = "src/page/login.html";
}

const verificarToken = () =>{
    let ticket = JSON.parse(localStorage.getItem('game_data'))
    
    if(ticket){
        let textoCriptografado = ticket.dados[0];

        let chave = ticket.dados[1];
        
        let iv = ticket.dados[2];

        let aes = new sjcl.cipher.aes(chave);
        // Converter o texto criptografado de base64 para bits
        let textoCriptografadoBits = sjcl.codec.base64.toBits(textoCriptografado);
        // Descriptografar
        let textoDescriptografadoBits = sjcl.mode.gcm.decrypt(aes, textoCriptografadoBits, iv);
        // Converter os bits descriptografados em uma string UTF-8
        let textoDescriptografado = sjcl.codec.utf8String.fromBits(textoDescriptografadoBits);

        console.log(textoDescriptografado);
        return textoDescriptografado;
    }

    return false;
}

export let matriz = verificarToken() || voltarLogin();
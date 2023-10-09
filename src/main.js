import { gameWorld, player, sprites } from "./sprites/sprites.js";
import { atualizarPlayer } from "./control/move.js";
import { cam, limiteCamera } from "./control/camera.js";
import { playerImg } from "./sprites/sprites.js";
import { matriz } from "./token/ticket.js";

let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
let numPlayer = 0;

sprites.push(gameWorld);
sprites.push(player);

(async ()=>{
    let PositPlayer = await fetch("https://wellyngton-souza.000webhostapp.com/manggih/playerPosicao.php", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            playernome: matriz
        })
    });

    PositPlayer = await PositPlayer.json();

    player.x = PositPlayer.response[0] - cam.x;
    player.y = PositPlayer.response[1] - cam.y;
})();

const loop = () => {
    window.requestAnimationFrame(loop, cnv);
    
    atualizarPlayer(player, gameWorld, cam);
    limiteCamera();

    render();
}

const render = () =>{
    ctx.save();
    ctx.translate(-cam.x,-cam.y);
    for(let i in sprites){
        let spr = sprites[i];
        ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
    }
    ctx.restore();

    ctx.font = "bold 8px arial";
    ctx.fillText(matriz ,(player.x - cam.x) - 10, player.y - cam.y);
}

loop();

const atualizarBanco = async () =>{
    // atualiza minha coord
    await fetch("https://wellyngton-souza.000webhostapp.com/manggih/player.php", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            playernome: matriz,
            playerxa: player.x,
            playerya: player.y
        })
    });
    
    // busca friends
    let friendsData = await fetch("https://wellyngton-souza.000webhostapp.com/manggih/friends.php",{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            playernome: matriz
        })
    });

    let friends = await friendsData.json();

    if(numPlayer != friends.length){
        numPlayer = friends.length;
        sprites.splice(2);

        for(let i = 0; i < friends.length; i++){
            let player = {
                img: playerImg,
                x: friends[i].nm_posit_x,
                y: friends[i].nm_posit_y,
                width: 16,
                height: 24
            };
            sprites.push(player);
        }
    } else{
        for(let i = 0; i < friends.length; i++){
            sprites[friends.length + 1] = {
                img: playerImg,
                x: friends[i].nm_posit_x,
                y: friends[i].nm_posit_y,
                width: 16,
                height: 24
            };
        }
    }
};

setInterval(atualizarBanco, 100);
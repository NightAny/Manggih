import { gameWorld, player, sprites } from "./sprites/sprites.js";
import { atualizarPlayer } from "./control/move.js";
import { cam, limiteCamera } from "./control/camera.js";
import { matriz } from "./token/ticket.js";

let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');

sprites.push(gameWorld);
sprites.push(player);

player.x = 256;
player.y = 48;

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
    /*
    ctx.font = "bold 25px Arial";
    ctx.fillText("SCORE: 0",10,30);
    */
}

loop();
/*
const atualizarBanco = async () =>{
    await fetch("http://localhost/player.php", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            playerxa: 16,
            playerya: 16
        })
    });
};

atualizarBanco();
*/
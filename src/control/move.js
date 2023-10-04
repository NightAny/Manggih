//mover o player
export let mvLeft = false;
export let mvRight = false;
export let mvUp = false;
export let mvDown = false;

window.addEventListener('keydown',(e) =>{
    let key = e.keyCode;
    switch(key){
        case 37:
            mvLeft = true;
            break;
        case 39:
            mvRight = true;
            break;
        case 38:
            mvUp = true;
            break;
        case 40:
            mvDown = true;
            break;
    }
},false);

window.addEventListener('keyup',(e) =>{
    let key = e.keyCode;
    switch(key){
        case 37:
            mvLeft = false;
            break;
        case 39:
            mvRight = false;
            break;
        case 38:
            mvUp = false;
            break;
        case 40:
            mvDown = false;
            break;
    }
},false);

export const atualizarPlayer = (player, gameWorld, cam) =>{
    if(mvLeft && !mvRight){
        player.x -= 2;
    }
    if(mvRight && !mvLeft){
        player.x += 2;
    }
    if(mvUp && !mvDown){
        player.y -= 2;
    }
    if(mvDown && !mvUp){
        player.y += 2;
    }
    
    //limite do player
    if(player.x < 0){
        player.x = 0;
    }
    if(player.x + player.width > gameWorld.width){
        player.x = gameWorld.width - player.width;
    }
    if(player.y < 0){
        player.y = 0;
    }
    if(player.y + player.height > gameWorld.height){
        player.y = gameWorld.height - player.height;
    }
    
    //atualizar a posição da câmera em função do player
    if(player.x < cam.leftEdge()){
        cam.x = player.x - (cam.width * 0.25);
    }
    if(player.x + player.width > cam.rightEdge()){
        cam.x = player.x + player.width - (cam.width * 0.75);
    }
    if(player.y < cam.topEdge()){
        cam.y = player.y - (cam.height * 0.25);
    }
    if(player.y + player.height > cam.bottomEdge()){
        cam.y = player.y + player.height - (cam.height * 0.75);
    }
}
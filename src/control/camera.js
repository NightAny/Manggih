import { gameWorld } from "../sprites/sprites.js";
let cnv = document.querySelector("canvas");

export let cam = {
    x: 0,
    y: 0,
    width: cnv.width,
    height: cnv.height,
    leftEdge: function(){
        return this.x + (this.width * 0.25);
    },
    rightEdge: function(){
        return this.x + (this.width * 0.75);
    },
    topEdge: function(){
        return this.y + (this.height * 0.25);
    },
    bottomEdge: function(){
        return this.y + (this.height * 0.75);
    }
};

//centralizar a câmera
cam.x = (gameWorld.width - cam.width)/2;
cam.y = (gameWorld.height - cam.height)/2;

export const limiteCamera = () =>{
    if(cam.x < 0){
        cam.x = 0;
    }
    if(cam.x + cam.width > gameWorld.width){
        cam.x = gameWorld.width - cam.width;
    }
    if(cam.y < 0){
        cam.y = 0;
    }
    if(cam.y + cam.height > gameWorld.height){
        cam.y = gameWorld.height - cam.height;
    }
}
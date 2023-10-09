import { playerImgSrc, backgroundImgSrc } from "../map/cenario.js";

let gameWorldImg = new Image();
gameWorldImg.src = backgroundImgSrc;

export let playerImg = new Image();
playerImg.src = playerImgSrc;

export let sprites = [];

export let gameWorld = {
    img: gameWorldImg,
    x: 0,
    y: 0,
    width: 640,
    height: 544
};

export let player = {
    img: playerImg,
    x: 0,
    y: 0,
    width: 16,
    height: 24
};
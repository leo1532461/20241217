// import * as canvas from"./canvass";

import {create,createReportList,clear} from"./canvass";

import randomSquare  from "./square";

const createSquareBtn = document.querySelector("#create_square_btn");
const clearBtn = document.querySelector("#clear_btn");
const createBtn= document.querySelector("#create_btn");
const stopBtn= document.querySelector("#stop_create_btn");

const myCanvas = create("myCanvas",document.body,480,320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx,50,50,100,"blue");

reportArea(square1.length,reportList);
reportPerimeter(square1.length,reportList);

createSquareBtn.addEventListener("click",function(){
    // const square2 =draw(myCanvas.ctx,25,50,100,"red");
    randomSquare(myCanvas.ctx);
});

clearBtn.addEventListener("click",()=>{
    Canvas.clear(myCanvas.ctx);
});

let timer;

createBtn.addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(() => {
            randomSquare(myCanvas.ctx);
        }, 1000); 
    }
});


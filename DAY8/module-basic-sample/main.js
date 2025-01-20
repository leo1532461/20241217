// import * as canvas from"./canvass";

import {create,createReportList,clear} from"./canvass";

import { name, draw, reportArea, reportPerimeter } from "./square";

const createSquareBtn = document.querySelector("#create_square_btn");
const clearBtn = document.querySelector("#clear_btn");

const myCanvas = create("myCanvas",document.body,480,320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx,50,50,100,"blue");

reportArea(square1.length,reportList);
reportPerimeter(square1.length,reportList);
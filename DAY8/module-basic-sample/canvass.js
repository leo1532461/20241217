function create(id,parent,width,height){
    const divWrapper = document.createElement("div");
    const canvasElem=document.createElement("canvas");
    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);

    divWrapper.id =id;
    canvasElem.width=width;
    canvasElem.heigh=heigh;

    const ctx =  canvasElem.getContext("2d");

    return {
    ctx:ctx,
    id:id,
    };

}

function createReportList(wrapperId){

    const list = document.createElement("ul");
    list.id = wrapperId +"-reporter";

    const canvasWrapper = document.getElementById(wrapperId);
    canvasWrapper.appendChild(list);

    return list.id;

}

function clear(ctx){

    console.log(ctx);
    ctx.reset();
}

export {create,createReportList,clear};

export function CreateDiv(){
    const parentDiv = document.createElement("div");
    const attributesClass = parentDiv.setAttribute("class", "parentDiv");
    const adding = document.body.appendChild(parentDiv);
    return adding;
}

export function CreateEurosInput(){
    const input = document.createElement("input");
    input.setAttribute("id","euros");
    input.setAttribute("class","euros");
    input.setAttribute("type","number");
    input.setAttribute("placeholder","EUROS");
    return input;
}

export function CreateChfInput(){
    const input = document.createElement("input");
    input.setAttribute("id","chf");
    input.setAttribute("class","chf");
    input.setAttribute("type","number");
    input.setAttribute("placeholder","CHF");

    return input;
}

export function Wrapper(parentDiv,firstinput,secondinput){
    const parent = parentDiv;
    const firstInput = firstinput;
    const secondInput= secondinput;

    parent.appendChild(firstInput);
    parent.appendChild(secondInput);

    console.log(parent);
}

export function CreateSwap(){
    const input = document.createElement("input");
    const attributesId = input.setAttribute("id","swap");
    const attributesClass = input.setAttribute("class","swap");
    const attributeType = input.setAttribute("type","button");
    const buttonAttributesText = input.setAttribute("value","↔");

    return input;
}
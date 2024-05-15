export function CreateDiv(){
    const parentDiv = document.createElement("div");
    const attributesClass = parentDiv.setAttribute("class", "parentDiv");
    const adding = document.body.appendChild(parentDiv);
    return adding;
}

export function CreateEurosInput(){
    const input = document.createElement("input");
    const attributesId = input.setAttribute("id","euros");
    const attributesClass = input.setAttribute("class","euros");
    const attributeType = input.setAttribute("type","number");
    const placeHolder = input.setAttribute("placeholder","EUROS");
    return input;
}

export function CreateChfInput(){
    const input = document.createElement("input");
    const attributesId = input.setAttribute("id","chf");
    const attributesClass = input.setAttribute("class","chf");
    const attributeType = input.setAttribute("type","number");
    const placeHolder = input.setAttribute("placeholder","CHF");

    return input;
}

function CreateButton(){
    const buttonDiv = document.createElement("div");
    const input = document.createElement("input");
    const buttonAttributesId = input.setAttribute("id","buttonSubmit");
    const buttonAttributesType = input.setAttribute("type","button");
    const buttonAttributesClass = input.setAttribute("class","buttonSubmit");
    const buttonAttributesText = input.setAttribute("value","Valider");
    const divAttributes = buttonDiv.setAttribute("id","buttonDiv");
    const divClass = buttonDiv.setAttribute("class","buttonDiv");

    const appendButton = buttonDiv.appendChild(input);
    return buttonDiv;
}

export function Wrapper(parentDiv,firstinput,secondinput){
    const parent = parentDiv;
    const firstInput = firstinput;
    const secondInput= secondinput;

    const addFirst = parent.appendChild(firstInput);
    const addSecond = parent.appendChild(secondInput);
    const addButton = parent.appendChild(CreateButton());

    console.log(parent);
}
export function CreateDiv(){
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "parentDiv");
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

export function CreateSwap(){
    const input = document.createElement("input");
    input.setAttribute("id","swap");
    input.setAttribute("class","swap");
    input.setAttribute("type","button");
    input.setAttribute("value","↔");

    return input;
}

export function Wrapper(parentDiv,firstinput,secondinput){
    const parent = parentDiv;
    const firstInput = firstinput;
    const secondInput= secondinput;
    const form = CreateForm();
    const CreateSwap = CreateSwap();
    parent.appendChild(form);
    form.appendChild(firstInput);
    form.appendChild(secondInput);

    console.log(parent);
}

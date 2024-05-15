import { Wrapper } from "../tools/Create.js";

export default class Form{
    constructor(div, FirstInput,SecondInput){
        this.div = div;
        this.FirstInput = FirstInput;
        this.SecondInput = SecondInput;
    }
    Render(){
        Wrapper(this.div,this.FirstInput,this.SecondInput);
        console.log("rendered well");
    }
} 
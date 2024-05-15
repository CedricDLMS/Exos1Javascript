import { Wrapper } from "../tools/Create.js";
import { EuroToChf } from "../Constants.js";
import { ChfToEuros } from "../Constants.js";

export default class Form{
    constructor(div, FirstInput,SecondInput){
        this.div = div;
        this.FirstInput = FirstInput;
        this.SecondInput = SecondInput;
    }
    Render(){
        Wrapper(this.div,this.FirstInput,this.SecondInput);
        this.liveCalculation();
        console.log("rendered well");
    }
    liveCalculation(){
        if(this.FirstInput.getAttribute("id")=="euros"){
            this.FirstInput.addEventListener("input", (event)=>{
                this.SecondInput.value = this.FirstInput.value * EuroToChf;
            })
            this.SecondInput.addEventListener("input", (event)=>{
                this.FirstInput.value = this.SecondInput.value * ChfToEuros;
            })
        }
        if(this.FirstInput.getAttribute("id")=="chf"){
            this.FirstInput.addEventListener("input", (event)=>{
                this.SecondInput.value = this.FirstInput.value * ChfToEuros;
            })
            this.SecondInput.addEventListener("input", (event)=>{
                this.FirstInput.value = this.SecondInput.value * EuroToChf;
            })
        }
    }
    Wrapper = ()=>{
        
    }
} 
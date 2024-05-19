import { Wrapper } from "../tools/Create.js";
import { EuroToChf } from "../Constants.js";
import { ChfToEuros } from "../Constants.js";
import { css } from "../tools/addCss.js";

export default class Form{
    constructor(div, FirstInput,SecondInput){
        this.div = div;
        this.FirstInput = FirstInput;
        this.SecondInput = SecondInput;
        this.Render();
        this.addCss();
        this.swapper();
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

        const form = document.getElementById("form");
        form.addEventListener("submit",(event)=>{
            event.preventDefault();   // EVITE LE SUBMIT
        });

    }
    addCss(){
        const style = document.createElement('style');
        style.setAttribute("type", "text/css")
        style.innerHTML = css;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    swapper(){
        const button = document.getElementById("swap");
        const form = document.getElementById("form");
        let state = true;
        button.addEventListener("click", (e)=>{
            if(state){
                form.setAttribute("style","flex-direction : column-reverse;");
                state = false;
            }else{
                form.setAttribute("style","flex-direction : column;");
                state = true;
                console.log("= false");
            }
        });
    }
}
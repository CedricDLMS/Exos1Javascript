import { CreateSelectCommuneFinal } from "../tools/Create.js";
import fetchCommuneFinal from "../tools/FetchCommuneFinal.js";

export class selectCommuneFinal {
    constructor(code, parentDive) {
        this.parentDiv = document.body;
        this.code = code;
        this.displayDiv = this.CreateDisplayDiv();
    }

    async communeFinalGetter(code = this.code) {
        if (this.code === -1) {
            return;
        }
        
        await fetchCommuneFinal(code).then(communeInfo => {
            this.communeInfo = communeInfo;
        });
    }

    CreateDisplayDiv() {
        return CreateSelectCommuneFinal();
    }

    updateDisplay(communeFinalInfo = this.communeInfo) {
        const nameElement = document.getElementById("commune-final-name");
        const populationElement = document.getElementById("commune-final-population");
        const postalCodeElement = document.getElementById("commune-final-postalcode");
        nameElement.innerText = communeFinalInfo.nom;

        populationElement.innerText = `Population : ${communeFinalInfo.population}`;
        postalCodeElement.innerText = `Code postal : ${communeFinalInfo.codesPostaux}`;
    }

    async Wrapper() {
        const container = document.body.getElementsByClassName("container");
        const newC = container[0];

        console.log(this.parentDiv);
        await this.communeFinalGetter();
        newC.appendChild(this.displayDiv);
        this.CreateDisplayDiv();
        await this.updateDisplay();
    }

}

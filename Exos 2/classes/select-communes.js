import { CreateCommuneOptions, CreateDiv, CreateSelectCommune } from "../tools/Create.js";
import fetchCommunes from "../tools/FetchCommunes.js";
import { selectCommuneFinal } from "./select-commune-final.js";

export class selectCommunes {
    constructor(code, parentDiv) {
        this.parentDiv = parentDiv;
        this.communeListe = [];
        this.code = code;
        this.selectMenu = this.CreateSelectMenu();
        this.eventListener();
    }

    // Permet l'utilisation du fetch et l'assignation à la propriété communeListe de la classe
    async communeGetter(code = this.code) {
        if (this.code === -1) {
            return;
        }
        await fetchCommunes(code).then(communeList => {
            this.communeListe = communeList;
        });
    }

    // Permet la création d'une div avec le select menu et assignation à l'objet
    CreateSelectMenu() {
        return CreateSelectCommune();
    }

    // Permet la création de chaque option pour le select grâce à communeListe
    async CreateCommuneOptionsClass(code = this.code) { // Nom avec "Class" à la fin pour éviter la confusion dans le code
        if (this.code === -1) {
            return;
        }
        this.communeListe.forEach(element => {
            const newOption = CreateCommuneOptions(element.nom, element.code);
            this.selectMenu.appendChild(newOption);
        });
    }

    // Permet le wrapping à l'initialisation
    async Wrapper() {
        await this.communeGetter();
        await this.CreateCommuneOptionsClass();
        this.parentDiv.appendChild(this.selectMenu);
    }

    async communeFinalWrapper(code) {
        const previous = document.getElementById("display-commune-final");
        const container = document.body.getElementsByClassName("container");
        if (previous === null) {
            this.communeFinalSection = new selectCommuneFinal(code,container );
            console.log(this.communeFinalSection)
            this.communeFinalSection.Wrapper();
            return 0;
        }
        previous.remove();
        this.communeFinalSection = new selectCommuneFinal(code, container);
        await this.communeFinalSection.Wrapper();
    }

    getList() { // Ne sert pas à grand chose
        return this.communeListe;
    }

    eventListener() {
        this.selectMenu.addEventListener("change", (event) => {
            const selectElement = event.target;
            const selectedOption = selectElement.selectedOptions[0];
            const selectedOptionId = selectedOption.id;
            const parsedId = selectedOptionId.substring(0, 5);
            console.log(selectedOptionId);
            (async()=>{
                await this.communeFinalWrapper(parsedId);
            })();
        })
    }
}
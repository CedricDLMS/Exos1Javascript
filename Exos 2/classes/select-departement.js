import { CreateDepartementOptions, CreateSelectDeparement, CreateDiv } from "../tools/Create.js";
import fetchDepartements from "../tools/DepartementFetch.js";
import { selectCommunes } from "./select-communes.js";




// Creer une classe possédant tout les départements
export class selectDepartement{
    constructor(code,parentDiv){
        this.parentDiv = parentDiv;
        this.departementListe = [];
        this.code = code;
        this.selectMenu = this.CreateSelectMenu();
        this.eventListener();
    }
    // prermet l'utilisation du fetch creer et l'assignation à la propriété DEpartement de la classe
    async departementGetter(code = this.code){
        if(this.code === -1){
            return;
        }
        await fetchDepartements(code).then(departementList => {
            this.departementListe = departementList;
        })
    }
    // permet la creation d'une div avec le select menu et assaignation à l'objet
    CreateSelectMenu(){
        return CreateSelectDeparement();
    }
    // permet la creation de chaques options pour le select grace à departementList
    async CreateDepartementOptionsClass(code = this.code){ // nom avec class à la fin pour eviter confusion dans le code
        if(this.code === -1){
            return;
        }
        this.departementListe.forEach(Element=>{
            const newOption = CreateDepartementOptions(Element.nom,Element.code);
            this.selectMenu.appendChild(newOption);
        })
    }
    // permet le wrapping à l'initialisation
    async Wrapper(){
        await this.departementGetter();
        await this.CreateDepartementOptionsClass();
        this.parentDiv.appendChild(this.selectMenu);
    }
    getList(){ // sert pas a grand choses
        return this.departementListe;
    }
    async communeWrapper(code) {
        const previous = document.getElementById("select-commune");
        if (previous === null) {
            this.communeSection = new selectCommunes(code, document.getElementById("commune-container"));
            await this.communeSection.Wrapper();
            return 0;
        }
        this.departementSection.communeSection.communeFinalSection.remove();
        previous.remove();
        this.communeSection = new selectCommunes(code, document.getElementById("commune-container"));
        await this.communeSection.Wrapper();
    }

    eventListener(){
        this.selectMenu.addEventListener("change", (event)=>{
        const selectElement = event.target;
        const selectedOption = selectElement.selectedOptions[0]; // Get the first selected option
        const selectedOptionId = selectedOption.id;
        const parsedId = selectedOptionId.substring(0,2); // Get the id attribute of the selected option
        console.log(selectedOptionId); 
        (async()=>{
            await this.communeWrapper(parsedId);
        })();
        })
    }
    

}
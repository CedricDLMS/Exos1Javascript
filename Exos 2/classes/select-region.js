import fetchRegions from "../tools/RegionsFetch.js";
import { CreateDiv, CreateRegions } from "../tools/Create.js";
import { CreateSelectRegions } from "../tools/Create.js";
import { selectDepartement } from "./select-departement.js";
// Creer une classe possédant toutes les régions
export class selectRegion{
    constructor(){
        this.regionsListe = [];
        this.selectMenu = this.CreateSelectMenu();
        this.options = [];
    }
    // prermet l'utilisation du fetch creer et l'assignation à la propriété Regions de la classe
    async regionsGetter(){
        await fetchRegions().then(regionsList => {
            this.regionsListe = regionsList;
        })
    }
    // permet la creation d'une div avec le select menu et assaignation à l'objet
    CreateSelectMenu(){
        return CreateSelectRegions();
    }
    // permet la creation de chaques options pour le select grace à regionsList
    CreateRegionsOption(){
        this.regionsListe.forEach(Element=>{
            const newOption = CreateRegions(Element.nom,Element.code);
            this.selectMenu.appendChild(newOption);
            this.options.push(newOption);
        })
    }
    // permet le wrapping à l'initialisation
    async Wrapper(){
        this.parentDiv = document.getElementById("region-container");
        await this.regionsGetter();
        this.CreateRegionsOption();
        this.parentDiv.appendChild(this.selectMenu);
        
    }
    async departementWrapper(code){
        const previous = document.getElementById("select-departement");
        if(previous === null){
            this.departementSection = new selectDepartement(code,document.getElementById("departement-container"));
            await this.departementSection.Wrapper();
            return 0;
        }
        this.departementSection.selectMenu.remove();
        this.departementSection.communeSection.selectMenu.remove();
        this.departementSection.communeSection.communeFinalSection.displayDiv.remove();

        previous.remove();
        this.departementSection = new selectDepartement(code,document.getElementById("departement-container"));
        await this.departementSection.Wrapper();
        
    }
    async eventListener(){
        this.selectMenu.addEventListener("change", (event)=>{
        const selectElement = event.target;
        const selectedOption = selectElement.selectedOptions[0]; // Get the first selected option
        const selectedOptionId = selectedOption.id;
        const parsedId = selectedOptionId.substring(0,2); // Get the id attribute of the selected option
        console.log(selectedOptionId); 
        (async()=>{
            await this.departementWrapper(parsedId);
            
        })();
        })
    }
}
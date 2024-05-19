import fetchRegions from "../tools/RegionsFetch.js";
import { CreateDiv, CreateRegions } from "../tools/Create.js";
import { CreateSelectRegions } from "../tools/Create.js";
// Creer une classe possédant toutes les régions
export class selectRegion{
    constructor(){
        this.regionsListe = [];
        this.selectMenu = this.CreateSelectMenu();
        this.Wrapper();
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
        })
    }
    // permet le wrapping à l'initialisation
    async Wrapper(){
        this.parentDiv = CreateDiv();
        await this.regionsGetter();
        this.CreateRegionsOption();
        this.parentDiv.appendChild(this.selectMenu);
    }
}
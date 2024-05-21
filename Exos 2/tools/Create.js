/**
 * Crée un élément <div> et l'ajoute au corps du document.
 * 
 * @returns {HTMLElement} L'élément <div> nouvellement créé et ajouté au corps du document.
 */
export function CreateDiv(name = "parent", parentDive = document.body){
    // Création de l'élément <div>
    const newDiv = document.createElement("div");
    const parentDiv = parentDive;

    // Définition de l'attribut de classe pour l'élément <div>
    parentDiv.setAttribute("class", name);

    // Ajout de l'élément <div> au corps du document
    parentDiv.appendChild(parentDiv);

    // Retourne l'élément <div> nouvellement créé et ajouté au corps du document
    return newDiv;
}
// ------------------- PARTIE REGIONS ----------

/**
 * Creation du select des région avec une option par défault et le retourne
 * @returns {HTMLSelectElement}
 */
export function CreateSelectRegions(){
    // cree l'element
    const select = document.createElement("select");

    // set attributes
    select.setAttribute("id", "select-region");
    select.setAttribute("name", "region-select");
    select.setAttribute("class", "select region");
    // cree option default
    const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "");
    defaultOption.innerText = "Selectionnez une région";
    // ajoute option par default
    select.appendChild(defaultOption);

    return select;
}
/**
 * Creer une region dans le select avec un nom donné en paramètre et la retourne
 * @param {string} regionName  nom de la region
 * @returns {HTMLOptionElement}
 */
export function CreateRegions(regionName,code){

    const option = document.createElement("option");

    option.setAttribute("value", regionName);
    option.setAttribute("id",`${code}R`);
    option.innerText = regionName;
    return option;
}

// ----------------- PARTIE DEPARTEMENTS -------

// Creation du menu select pour les départements
export function CreateSelectDeparement(){
    // cree l'element
    const select = document.createElement("select");

    // set attributes
    select.setAttribute("id", "select-departement");
    select.setAttribute("name", "departement-select");
    select.setAttribute("class", "select departement");
    // cree option default
    const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "");
    defaultOption.innerText = "Selectionnez un departement";
    // ajoute option par default
    select.appendChild(defaultOption);

    return select;
}

// Creation des options du select departement
export function CreateDepartementOptions(departementName,code){

    const option = document.createElement("option");

    option.setAttribute("value", departementName);
    option.setAttribute("id",`${code}D`);
    option.innerText = departementName;
    return option;
}


// -------------------------- COMMUNE ---------------------------

export function CreateSelectCommune() {
    // Crée l'élément
    const select = document.createElement("select");

    // Définit les attributs
    select.setAttribute("id", "select-commune");
    select.setAttribute("name", "commune-select");
    select.setAttribute("class", "select commune");

    // Crée l'option par défaut
    const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "");
    defaultOption.innerText = "Sélectionnez une commune";

    // Ajoute l'option par défaut
    select.appendChild(defaultOption);

    return select;
}

export function CreateCommuneOptions(communeName, code) {
    const option = document.createElement("option");

    // Définit les attributs
    option.setAttribute("value", communeName);
    option.setAttribute("id", `${code}C`); // Utilise `${code}C` pour distinguer des départements
    option.innerText = communeName;

    return option;
}


// ---------------- COMMUNE FINAL ---------------------------

export function CreateSelectCommuneFinal() {
     // Crée l'élément conteneur principal
     const displayDiv = document.createElement("div");
     displayDiv.setAttribute("id", "display-commune-final");
     displayDiv.setAttribute("class", "commune-final-display");
 
     // Crée les éléments pour le nom, la population et le code postal
     const nameElement = document.createElement("h1");
     nameElement.setAttribute("id", "commune-final-name");
 
     const populationElement = document.createElement("p");
     populationElement.setAttribute("id", "commune-final-population");
 
     const postalCodeElement = document.createElement("p");
     postalCodeElement.setAttribute("id", "commune-final-postalcode");
 
     // Ajoute les éléments au conteneur principal
     displayDiv.appendChild(nameElement);
     displayDiv.appendChild(populationElement);
     displayDiv.appendChild(postalCodeElement);
 
     return displayDiv;
}



/**
 * Crée un élément <div> et l'ajoute au corps du document.
 * 
 * @returns {HTMLElement} L'élément <div> nouvellement créé et ajouté au corps du document.
 */
export function CreateDiv(){
    // Création de l'élément <div>
    const parentDiv = document.createElement("div");

    // Définition de l'attribut de classe pour l'élément <div>
    parentDiv.setAttribute("class", "parentDiv");

    // Ajout de l'élément <div> au corps du document
    document.body.appendChild(parentDiv);

    // Retourne l'élément <div> nouvellement créé et ajouté au corps du document
    return parentDiv;
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
    option.setAttribute("id",`region${code}`);
    option.innerText = regionName;
    return option;
}

// ----------------- PARTIE DEPARTEMENTS -------
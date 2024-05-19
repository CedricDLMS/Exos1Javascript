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

/**
 * Crée un élément <form> avec des attributs d'identifiant et de classe, puis le retourne.
 * 
 * @returns {HTMLFormElement} L'élément <form> nouvellement créé avec les attributs définis.
 */
export function CreateForm(){
    // Création de l'élément <form>
    const form = document.createElement("form");

    // Définition de l'attribut d'identifiant pour l'élément <form>
    form.setAttribute("id", "form");

    // Définition de l'attribut de classe pour l'élément <form>
    form.setAttribute("class", "parentForm");

    // Retourne l'élément <form> nouvellement créé avec les attributs définis
    return form;
}

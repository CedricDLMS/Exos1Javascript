const url = 'https://geo.api.gouv.fr/regions/';
// xx/departements
// Fonction pour récupérer les données et extraire les noms et codes des déparetements

export default async function fetchDepartements(codeDepartement) {
    return fetch(`${url}${codeDepartement}/departements`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Créer une liste pour stocker les noms et les codes des départements
            const departementList = data.map(departement => ({
                nom: departement.nom,
                code: departement.code,
                codeRegion: departement.codeRegion
            }));
            
            // Afficher la liste des régions dans la console pour du test , plus utile à présent
            // console.log('Liste des départements avec leur code:', departementList); 
            return departementList;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}
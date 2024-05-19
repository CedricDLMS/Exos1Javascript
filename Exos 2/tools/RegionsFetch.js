const url = 'https://geo.api.gouv.fr/regions';

// Fonction pour récupérer les données et extraire les noms et codes des régions

export default async function fetchRegions() {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Créer une liste pour stocker les noms et les codes des régions
            const regionsList = data.map(region => ({
                nom: region.nom,
                code: region.code
            }));
            
            // Afficher la liste des régions dans la console pour du test , plus utile à présent
            // console.log('Liste des régions avec leur code:', regionsList); 
            return regionsList;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}


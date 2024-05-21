const baseUrl = 'https://geo.api.gouv.fr/departements/';

export default async function fetchCommunes(codeDepartement) {
    return fetch(`${baseUrl}${codeDepartement}/communes`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Créer une liste pour stocker les noms et les codes des communes
            const communeList = data.map(commune => ({
                nom: commune.nom,
                code: commune.code,
                codeDepartement: commune.codeDepartement
            }));
            
            // Afficher la liste des communes dans la console pour du test
            // console.log('Liste des communes avec leur code:', communeList); 
            return communeList;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}
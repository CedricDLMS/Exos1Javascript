const communeFinalUrl = 'https://geo.api.gouv.fr/communes/';

export default async function fetchCommuneFinal(codeCommune) {
    return fetch(`${communeFinalUrl}${codeCommune}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Créer un objet pour stocker les informations de la commune
            const communeInfo = {
                nom: data.nom,
                code: data.code,
                codeDepartement: data.codeDepartement,
                siren: data.siren,
                codeEpci: data.codeEpci,
                codeRegion: data.codeRegion,
                codesPostaux: data.codesPostaux,
                population: data.population
                // Ajoutez d'autres propriétés si nécessaire
            };
            
            // Afficher les informations de la commune dans la console pour du test
            console.log('Informations de la commune:', communeInfo);
            return communeInfo;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}

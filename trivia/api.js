var API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx';

// récupérer les photos depuis l'API Pixabay
function getPicturesFromPixabay(query) {
    var url = 'https://pixabay.com/api/?key=' + API_KEY + '&q='+ query + '&pretty=true&image_type=photo';
    
    // ajax request
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                var response = JSON.parse(xmlhttp.responseText);
                // Retour de pixabay en json affiché dans la console
                console.log(response)
                // Exemple des caractéristiques renvoyés d'une photo à la position 0
                console.log(response.hits[0]);
                // Exemple d'un lien vers la photo
                console.log(response.hits[0].webformatURL);
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

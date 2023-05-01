// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//création des balises

for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les sheets
    const sectionSheets = document.querySelector(".sheets");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nameElement = document.createElement("h2");
    nameElement.innerText = article.name;
    const priceElement = document.createElement("p");
    priceElement.innerText = `price: ${article.price} € (${article.price < 35 ? "€" : "€€€"})`;
    const categoryElement = document.createElement("p");
    categoryElement.innerText = article.category ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibility ? "En stock" : "Rupture de stock";
    
    // On rattache la balise article a la section Fiches
    sectionSheets.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nameElement);
    pieceElement.appendChild(priceElement);
    pieceElement.appendChild(categoryElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
 }


//get a reference to the button sort ascending
const buttonSort = document.querySelector(".btn-sort");
//add an avent listener to the button sort
buttonSort.addEventListener("click", function() {
    const orderedPieces=Array.from(pieces);
    orderedPieces.sort(function(a,b){
        return a.price - b.price;
    });
    console.log(orderedPieces);
});
//get a reference to the button sort descending
const buttonSortD = document.querySelector(".btn-sort-d");
//add an avent listener to the button sort
buttonSortD.addEventListener("click", function() {
    const orderedPieces=Array.from(pieces);
    orderedPieces.sort(function(a,b){
        return b.price-a.price ;
    });
    console.log(orderedPieces);
});

//get reference to the button filter
const buttonFilter = document.querySelector(".btn-filter");
//add an avent listener to the button filter
buttonFilter.addEventListener("click", function(){
    const filteredPieces =pieces.filter(function(piece){
        return piece.price <= 35;
    });
    console.log(filteredPieces);
});

//get reference to the button filter description
const buttonFilterDescrip = document.querySelector(".btn-filter-description");
//add an avent listener to the button filter
buttonFilterDescrip.addEventListener("click", function(){
    const filteredPieces =pieces.filter(function(piece){
        return piece.description ;
    });
    console.log(filteredPieces);
});

// affordable pieces list
const names = pieces.map(piece => piece.name);
for(let i=pieces.lenght -1 ; i>=0 ; i--){
    if(pieces[i].price>35){
        names.splice(i,1);
    }
}
// list creation
const affordablePieces = document.createElement('ul');
// add list items
for(let i=0 ; i<names.length ; i++){
    const nameElement = document.createElement('li');
    nameElement.innerText = names[i];
    console.log(names[i]);
    affordablePieces.appendChild(nameElement);
}
document.querySelector('.affordable')
.appendChild(affordablePieces);

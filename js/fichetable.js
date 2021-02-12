//produits tables
//=========================================

class Table {
    constructor(tableImg ){
        this.tableImg = tableImg;
    }
}

let oak01 = new Table ("images/oak_1.jpg");
let oak02 = new Table ("images/oak_2.jpg");
let oak03 = new Table ("images/oak_3.jpg");
let oak04 = new Table ("images/oak_4.jpg");
let oak05 = new Table ("images/oak_5.jpg");

const lesTables = [oak01, oak02, oak03, oak04, oak05];

lesTables.forEach( refOak => {
    createFicheOak(refOak);
})


function createFicheOak(refOak){

    document.getElementById("table").addEventListener("click", function (){

    const newFicheOak = document.createElement("div");
    newFicheOak.classList = "col-lg-4 col-md-6 mb-4";
    let newficheOak = document.getElementById("ficheProduit");
    ficheProduit.appendChild(newFicheOak);
    
    const newCardOak = document.createElement("div");
    newCardOak.classList = "card h-100";
    newFicheOak.appendChild(newCardOak);
    
    const imageCardOak = document.createElement("img");
    imageCardOak.classList = "card-img-top";
    imageCardOak.src = refOak.tableImg;
    imageCardOak.setAttribute("alt", "nom de l'image");
    newCardOak.appendChild(imageCardOak);
    
    const newCardBodyOak = document.createElement("div");
    newCardBodyOak.classList = "card-body";
    newCardOak.appendChild(newCardBodyOak);
    
    const titreH4Oak = document.createElement("h4");
    titreH4Oak.classList = "card-title";
    titreH4Oak.innerText= "Table en chêne";
    newCardBodyOak.appendChild(titreH4Oak);
    
    const prixH5Oak = document.createElement("h5");
    prixH5Oak.innerText= "369,00€";
    newCardBodyOak.appendChild(prixH5Oak);
    
    const newCardFooterOak = document.createElement("div");
    newCardFooterOak.classList = "card-footer";
    newCardOak.appendChild(newCardFooterOak);
    
    const smallOak = document.createElement("small");
    smallOak.classList = "text-muted";
    smallOak.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
    newCardFooterOak.appendChild(smallOak);
    
    return newFicheOak;

    })
};  

 

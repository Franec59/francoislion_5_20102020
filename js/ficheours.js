//page ours en peluche
//====================================

class Teddy {
    constructor(teddyImg ){
        this.teddyImg = teddyImg;
    }
}

let teddy01 = new Teddy ("images/teddy_1.jpg");
let teddy02 = new Teddy ("images/teddy_2.jpg");
let teddy03 = new Teddy ("images/teddy_3.jpg");
let teddy04 = new Teddy ("images/teddy_4.jpg");
let teddy05 = new Teddy ("images/teddy_5.jpg");


const oursTeddy = [teddy01, teddy02, teddy03, teddy04, teddy05];
oursTeddy.forEach( refTeddy => {
    createFicheTeddy(refTeddy);
})

function createFicheTeddy(refTeddy){

document.getElementById("peluche").addEventListener("click", function(){
    
    const newFicheOurs = document.createElement("div");
    newFicheOurs.classList = "col-lg-4 col-md-6 mb-4";
    let newficheOurs = document.getElementById("ficheProduit");
    ficheProduit.appendChild(newFicheOurs);
    
    const newCardOurs = document.createElement("div");
    newCardOurs.classList = "card h-100";
    newFicheOurs.appendChild(newCardOurs);
    
    const imageCardOurs = document.createElement("img");
    imageCardOurs.classList = "card-img-top";
    imageCardOurs.src = refTeddy.teddyImg;
    imageCardOurs.setAttribute("alt", "nom de l'image");
    newCardOurs.appendChild(imageCardOurs);
    
    const newCardBodyOurs = document.createElement("div");
    newCardBodyOurs.classList = "card-body";
    newCardOurs.appendChild(newCardBodyOurs);
    
    const titreH4Ours = document.createElement("h4");
    titreH4Ours.classList = "card-title";
    titreH4Ours.innerText= "Ours en peluche";
    newCardBodyOurs.appendChild(titreH4Ours);
    
    const prixH5Ours = document.createElement("h5");
    prixH5Ours.innerText= "29,00€";
    newCardBodyOurs.appendChild(prixH5Ours);
    
    const newCardFooterOurs = document.createElement("div");
    newCardFooterOurs.classList = "card-footer";
    newCardOurs.appendChild(newCardFooterOurs);
    
    const smallOurs = document.createElement("small");
    smallOurs.classList = "text-muted";
    smallOurs.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
    newCardFooterOurs.appendChild(smallOurs);

    return newFicheOurs;
})
}
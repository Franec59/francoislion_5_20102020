//page cameras
//======================================================

//requete pour aller récuperer les infos sur les cameras
//=======================================================
class Cam {
    constructor(name, price, description, imageUrl, id) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

// Créer une nouvelle promesse avec le constructeur Promise () qui a comme argument resolve et reject

function getProducts(){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/api/cameras", true);
        xhr.responseType = "json";

        xhr.onreadystatechange = function(){
            console.log(this);
            
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhr.response);
                
            } else if (this.readyState == 4 && this.status == 404){
                reject(Error('erreur 404' + request.statusText)); 
            }
        }   
        xhr.send();
    })
};

getProducts("http://localhost:3000/api/cameras").then( response => {

    const lesCameras = response;
    let camerasUnparsed = response;
            
    var cameras = [];
    camerasUnparsed.forEach ( aCameraUnparsed => {
    const cam = new Cam(aCameraUnparsed.name, aCameraUnparsed.price, aCameraUnparsed.description, aCameraUnparsed.imageUrl, aCameraUnparsed._id); //bien mettre le_ avant id
    cameras.push(cam)
    })

    cameras.forEach( ref => {
    createFiche(ref);
    })
    
}).catch( error =>{
    console.log(error);
})

//fonction pour créer la page avec toutes les cameras
//======================================================

function createFiche(ref) {

    const newFiche = document.createElement("div");
    newFiche.classList = "col-lg-4 col-md-6 mb-4";
    let fiche = document.getElementById("pageProduit");
    fiche.appendChild(newFiche);

    const newCard = document.createElement("div");
    newCard.classList = "card h-100";
    newFiche.appendChild(newCard);

    const imageCard = document.createElement("img");
    imageCard.classList = "card-img-top";
    imageCard.src = ref.imageUrl;
    imageCard.setAttribute("alt", ref.name);
    newCard.appendChild(imageCard);

    const newCardBody = document.createElement("div");
    newCardBody.classList = "card-body";
    newCard.appendChild(newCardBody);

    const titreH4 = document.createElement("h4");
    titreH4.classList = "card-title";
    titreH4.innerText = ref.name;
    newCardBody.appendChild(titreH4);

    const prixH5 = document.createElement("h5");
    prixH5.innerText = ref.price/100 + "  €";
    newCardBody.appendChild(prixH5);

    const small = document.createElement("small");
    small.classList = "text-muted";
    small.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
    newCardBody.appendChild(small);

    const newCardFooter = document.createElement("div");
    newCardFooter.classList = "card-footer";
    newCard.appendChild(newCardFooter);

    const lienB = document.createElement("a");
    lienB.classList = "btn btn-primary stretched-link";
    lienB.href = "productsheet.html?productId=" + ref.id; // en utilisant URLSeachParams
    lienB.setAttribute("role", "button");
    lienB.textContent = "Voir le produit";
    newCardFooter.appendChild(lienB);

    return newFiche;
};

//compteur de panier
//=========================

function basketCount (){
    let basketCount1 = localStorage.getItem("panier");
    let basketCount2 = JSON.parse(basketCount1);
    basketCount = +basketCount2.length;
    
    if (basketCount > 1){
    
    document.querySelector(".basketcount").innerText =": " + basketCount + " articles";
    
    }else if(basketCount == 1){
        
        document.querySelector(".basketcount").innerText =": " + basketCount + " article";

    }else if (basketCount == 0) {
        document.querySelector(".basketcount").innerText =": 0 article";
    }  
};
basketCount();

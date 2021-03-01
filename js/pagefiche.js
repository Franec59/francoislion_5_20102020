//page des fiches produits
//=========================================

//je récupère l'Id du produit
//=====================================
const params = new URLSearchParams(window.location.search).get('productId')
console.log(params);


// je crée une nouvelle requete vers le serveur pour récupérer les infos sur le produit
//=======================================================================================

var requetProduct = new XMLHttpRequest();

requetProduct.onreadystatechange = function(){
    
    if (this.readyState == 4 && this.status == 200) {
        
        const found = this.response
        console.log(found);
        console.log(found._id);
        
//création de la fiche avec le produit ( 2 parties )
//==============================================================

//1ère partie de la fiche produit ( card gauche)
const newFicheProduit = document.createElement("div");
newFicheProduit.classList = "col-lg-5 col-md-6 mb-4";
let ficheProduit = document.getElementById("ficheProduit");
ficheProduit.appendChild(newFicheProduit);

const newCardProduit = document.createElement("div");
newCardProduit.classList = "card h-100";
newFicheProduit.appendChild(newCardProduit);

const imageCardProduit = document.createElement("img");
imageCardProduit.classList = "card-img-top";
imageCardProduit.src = found.imageUrl;
imageCardProduit.setAttribute("alt", found.name);
newCardProduit.appendChild(imageCardProduit);

const newCardBodyP = document.createElement("div");
newCardBodyP.classList = "card-body";
newCardProduit.appendChild(newCardBodyP);

const titreH4_P = document.createElement("h4");
titreH4_P.classList = "card-title";
titreH4_P.innerText = found.name;
newCardBodyP.appendChild(titreH4_P);

const prixH5_P = document.createElement("h5");
prixH5_P.innerText = found.price + " €";
newCardBodyP.appendChild(prixH5_P);

const newCardFooterP = document.createElement("div");
newCardFooterP.classList = "card-footer";
newCardProduit.appendChild(newCardFooterP);

const small_P = document.createElement("small");
small_P.classList = "text-muted";
small_P.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
newCardFooterP.appendChild(small_P);

//2ème partie de la fiche produit ( card droite avec description et btn panier)

const newFicheProduit2 = document.createElement("div");
newFicheProduit2.classList = "col-lg-7 col-md-6 mb-4";
let newficheProduit2 = document.getElementById("ficheProduit");
ficheProduit.appendChild(newFicheProduit2);

const newCardProduit2 = document.createElement("div");
newCardProduit2.classList = "card h-100";
newFicheProduit2.appendChild(newCardProduit2);

const titreH4_p2 = document.createElement("h4");
titreH4_p2.classList = "card-title text-primary";
titreH4_p2.innerText = "Description de votre produit";
newCardProduit2.appendChild(titreH4_p2);

const newCardBodyP2 = document.createElement("div");
newCardBodyP2.classList = "card-body";
newCardProduit2.appendChild(newCardBodyP2);

const description = document.createElement("h5");
description.innerText = found.description;
newCardBodyP2.appendChild(description);

const btn_option = document.createElement("select");
btn_option.classlist = "form-select ml-4";
btn_option.classList = "mt-5";
newCardBodyP2.appendChild(btn_option);

const option1 = document.createElement("option");
option1.setAttribute("selected", "selected")
option1.innerText = "Choississez vos options"
btn_option.appendChild(option1);

const option2 = document.createElement("option");
option2.setAttribute("value", "1")
option2.innerText = "Lentilles : " + found.lenses[0];
btn_option.appendChild(option2);

const option3 = document.createElement("option");
option3.setAttribute("value", "2")
if (found.lenses[1] == null){
    option3.innerText = " ";
}else{
    option3.innerText = "Lentilles : " + found.lenses[1];
}
btn_option.appendChild(option3);

const option4 = document.createElement("option");
option4.setAttribute("value", "3")
if (found.lenses[2] == null){
    option4.innerText = " ";
}else{
    option4.innerText = "Lentilles : " + found.lenses[2];
}
btn_option.appendChild(option4);

const bouton = document.createElement("div");
bouton.classList = "mt-5";
newCardBodyP2.appendChild(bouton);

const btn_ajouter = document.createElement("a");
btn_ajouter.classList = "btn btn-success mt-5 btnAjout";
btn_ajouter.href = "#";
btn_ajouter.setAttribute("role", "button");
btn_ajouter.textContent = "Ajouter au panier";
bouton.appendChild(btn_ajouter);


//partie ajouter le produit au panier
//=============================================

function ajoutAuPanier(){

    document.querySelector(".btnAjout").addEventListener("click", function (e){
        
        e.preventDefault();
        
        //panier
        let panierStringified = localStorage.getItem("panier");
        var myBasket = [] 
        if (panierStringified) {
            myBasket = JSON.parse(panierStringified)
        }
        let objArticle = {
            _id : found._id,
            name : found.name,
            price : found.price,
            description : found.description,
            imageUrl : found.imageUrl
        }
        
        myBasket.push(objArticle);
        localStorage.setItem("panier", JSON.stringify(myBasket));
        
    })  
}
ajoutAuPanier();

//reprise du code ======================================

    } else if (this.readyState == 4 && this.status == 404){
        alert("erreur 404 !");
    }
};

requetProduct.open("GET", "http://localhost:3000/api/cameras/"+params, true);
requetProduct.responseType = "json";
requetProduct.send();


//recuperation des données depuis le local storage pour les afficher dans le panier
//=====================================================================================

function recupPanier(){

    let stockArticle = localStorage.getItem("panier");
    let objArticle = JSON.parse(stockArticle);

    objArticle.forEach((tab, i) => {
        createTableau (tab, i);
        
    });

}
recupPanier();

function createTableau (tab, index){

    const newTr = document.createElement("tr");
    newTr.classList = `.row-${index}`;
    let ligne = document.querySelector("tbody");
    ligne.appendChild(newTr);

    const newTh = document.createElement("th");
    newTh.setAttribute("scope", "row")
    newTh.innerText = index + 1;
    newTr.appendChild(newTh);

    const newTd = document.createElement("td");
    newTd.innerHTML = tab.name;
    newTr.appendChild(newTd);

    const newTd2 = document.createElement("td");
    newTd2.classList = "prix";
    newTd2.innerHTML = tab.price/100;
    newTr.appendChild(newTd2);

    const newTd3 = document.createElement("td");
    newTr.appendChild(newTd3);

    const newInput = document.createElement("input");
    newInput.classList = `.row-remove-button-${index} btn btn-danger btn-sm`;
    newInput.setAttribute("type", "reset");
    newInput.setAttribute("value", "Supprimer");
    newInput.addEventListener('click', () => {
        
        let selectBasket = localStorage.getItem("panier");
        let initialBasket = JSON.parse(selectBasket);
        
        initialBasket.splice(index, 1);
        
        const returnBasket = JSON.stringify(initialBasket);
        const newBasket = localStorage.setItem("panier", returnBasket);
        
        location.reload();
           
    })

    newTd3.appendChild(newInput);

//Panier : calculer le prix total
//=================================

function calcul (){
    let prix = document.querySelectorAll(".prix");
    tableauPrix = [];

    for (let j = 0; j < prix.length ; j++){
    tableauPrix.push(+prix[j].innerText); //+ pour convertir le string en nombre
    };

    var total = tableauPrix.reduce((a, b)=> a + b,0); // additionner les valeurs du tableau

    document.getElementById("somme").innerHTML = total +" €";
}
calcul();

}//fin de la fonction createTableau

//validation mail
//======================================================
let form = document.getElementById("loginForm");
form.email.addEventListener("change", function(){
    validEmail(this)
});

const validEmail = function(varEmail){
    let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g");

    //ligne de test
    let testEmail = emailRegExp.test(varEmail.value)
    let validt = document.getElementById("validtext");
    

    if (testEmail){
        validt.textContent = "Adresse mail valide";
        validt.style.color = "green";
        return true;
    }else {
        validt.textContent = "Adresse mail non valide";
        validt.style.color = "red";
        return false;
    } 
};

//validation prenom
//======================================================
let form2 = document.getElementById("loginForm");
form2.prenom.addEventListener("change", function(){
    validPrenom(this)
});

const validPrenom = function(varPrenom){
    
    let prenomRegExp = new RegExp("^(?=.{1,70}$)[a-zA-ZéèîïÎÏéèêçàîïë]+(?:[-'_ ][a-zA-ZéèîïÎÏéèêçàîïë]+)*$");

    //ligne de test
    let testPrenom = prenomRegExp.test(varPrenom.value)
    let validPrenom = document.getElementById("valideprenom");
    
    if (testPrenom){
        valideprenom.textContent = "Prenom valide";
        valideprenom.style.color = "green";
        return true;
    }else {
        valideprenom.textContent = "Prenom non valide";
        valideprenom.style.color = "red";
        return false;
    } 
};


//validation nom
//======================================================
let form3 = document.getElementById("loginForm");
form3.nom.addEventListener("change", function(){
    validNom(this)
});

const validNom = function(varNom){
    let nomRegExp = new RegExp("^(?=.{1,70}$)[a-zA-ZéèîïÎÏéèêçàîïë]+(?:[-'_ ][a-zA-ZéèîïÎÏéèêçàîïë]+)*$");

    //ligne de test
    let testNom = nomRegExp.test(varNom.value)
    let validNom = document.getElementById("validenom");

    if (testNom){
        validenom.textContent = "Nom de famille valide";
        validenom.style.color = "green";
        return true;
    }else {
        validenom.textContent = "Nom de famille non valide";
        validenom.style.color = "red";
        return false;
    } 
};

//validation address
//======================================================
let form4 = document.getElementById("loginForm");
form4.adresse.addEventListener("change", function(){
    validAdresse(this)
});

const validAdresse = function(varAdresse){
    
    let adresseRegExp = new RegExp("^(?=.{1,70}$)[0-9a-zA-ZéèîïÎÏéèêçàîïë]+(?:[-'_ ][0-9a-zA-ZéèîïÎÏéèêçàîïë]+)*$");

    //ligne de test
    let testAdresse = adresseRegExp.test(varAdresse.value)
    let validAdresse = document.getElementById("valideadresse");

    if (testAdresse){
        valideadresse.textContent = "Adresse valide";
        valideadresse.style.color = "green";
        return true;
    }else {
        valideadresse.textContent = "Adresse non valide";
        valideadresse.style.color = "red";
        return false;
    } 
};

//validation ville
//======================================================
let form6 = document.getElementById("loginForm");
form6.ville.addEventListener("change", function(){
    validVille(this)
});

const validVille = function(varVille){
    
    let villeRegExp = new RegExp("^(?=.{1,70}$)[a-zA-ZéèîïÎÏéèêçàîïë]+(?:[-'_ ][a-zA-ZéèîïÎÏéèêçàîïë]+)*$");
    
    //ligne de test
    let testVille = villeRegExp.test(varVille.value)
    let validVille = document.getElementById("valideville");

    if (testVille){
        valideville.textContent = "Nom de ville valide";
        valideville.style.color = "green";
        return true;
    }else {
        valideville.textContent = "Nom de ville non valide";
        valideville.style.color = "red";
        return false;
    } 
};

//validation finale de la commande
//=================================================

form.addEventListener("submit", (e)=>{

    e.preventDefault();

//condition si champ valid !!
//=============================
if(validPrenom(form2.prenom) && validNom(form3.nom) && validAdresse(form4.adresse) && validVille(form6.ville) && validEmail(form.email)){

    
//stocker le formulaire saisi dans le localstorage
//=================================================

localStorage.setItem("prenom", document.getElementById("prenom").value);
localStorage.setItem("nom", document.getElementById("nom").value);
localStorage.setItem("adresse", document.getElementById("adresse").value);
localStorage.setItem("ville", document.getElementById("ville").value);
localStorage.setItem("Mail", document.getElementById("email").value);

//recuperation du panier et du formulaire depuis le local storage pour les stocker dans un objet
//===============================================================================================

const contact = {
    firstName : localStorage.getItem("prenom"),
    lastName : localStorage.getItem("nom"),
    address : localStorage.getItem("adresse"),
    city : localStorage.getItem("ville"),
    email : localStorage.getItem("Mail") ,
}

let panier = localStorage.getItem("panier");
const product = JSON.parse(panier);
    
//envoyer l'objet sur le serveur 
//===============================

var xhr2 = new XMLHttpRequest();

xhr2.open("POST", "http://localhost:3000/api/cameras/order", true);

xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4) {
      var reponse = JSON.parse(xhr2.responseText);
      
      var price = 0.0;
      reponse.products.forEach(product => {
        price += product.price;
      });
      
    }
    
    location.href = `confirmation.html?order=${reponse.orderId}&totalPrice=${price}`;
    
  };

xhr2.setRequestHeader("Content-Type", "application/json");

let body = {
    contact: contact,
    products: []
};

product.forEach(product => {
    body.products.push(product._id);
})
xhr2.send(JSON.stringify(body));

}else{
document.getElementById("alert").innerText = "Merci de renseigner un champ valide !";

    }//fin de la condition

});//fin de la function submit



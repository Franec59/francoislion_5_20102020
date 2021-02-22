//recuperation des données depuis le local storage pour les afficher dans le panier
//=====================================================================================

function recupPanier(){

    let stockArticle = localStorage.getItem("panier");
    let objArticle = JSON.parse(stockArticle);
        //console.log(objArticle);

    objArticle.forEach(tab => {
        createTableau (tab);
    });

}
recupPanier();

function createTableau (tab){

    const newTr = document.createElement("tr");
    let ligne = document.querySelector("tbody");
    ligne.appendChild(newTr);

    const newTh = document.createElement("th");
    newTh.setAttribute("scope", "row")
    newTh.innerText = "-";
    newTr.appendChild(newTh);

    const newTd = document.createElement("td");
    newTd.innerHTML = tab.name;
    newTr.appendChild(newTd);

    const newTd2 = document.createElement("td");
    newTd2.innerHTML = tab.price;
    newTr.appendChild(newTd2);

    const newTd3 = document.createElement("td");
    newTr.appendChild(newTd3);

    const newInput = document.createElement("input");
    newInput.classList = "btn btn-danger btn-sm";
    newInput.setAttribute("type", "reset");
    newInput.setAttribute("value", "Supprimer");
    newTd3.appendChild(newInput);

/*
//bouton supprimer dans le tableau panier
//==========================================
const lignePanier = document.querySelectorAll(".btn-danger");
//console.log(lignePanier);

for (let i = 0; i < lignePanier.length; i++){
lignePanier[i].addEventListener ("click", ()=>{
    lignePanier[i].parentNode.parentNode.parentNode.removeChild(newTr);
    localStorage.removeItem("panier");//comment selectionner l'index dans la clé ?
})
};
*/

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
    }else {
        validt.textContent = "Adresse mail non valide";
        validt.style.color = "red";
    } 
};


//validation prenom
//======================================================
let form2 = document.getElementById("loginForm");
form2.prenom.addEventListener("change", function(){
    validPrenom(this)
});

const validPrenom = function(varPrenom){
    let prenomRegExp = new RegExp("^[a-zA-ZéèîïÎÏ][a-zéèêçàîï]+([-/s][a-zA-ZéèîïÎÏ][a-zéèêçàîï]+)?", "g");

    //ligne de test
    let testPrenom = prenomRegExp.test(varPrenom.value)
    let validPrenom = document.getElementById("valideprenom");

    if (testPrenom){
        valideprenom.textContent = "Prenom valide";
        valideprenom.style.color = "green";
    }else {
        valideprenom.textContent = "Prenom non valide";
        valideprenom.style.color = "red";
    } 
};

//validation nom
//======================================================
let form3 = document.getElementById("loginForm");
form3.nom.addEventListener("change", function(){
    validNom(this)
});

const validNom = function(varNom){
    let nomRegExp = new RegExp("^[a-zA-ZéèîïÎÏ][a-zéèêçàîï]+([-/s][a-zA-ZéèîïÎÏ][a-zéèêçàîï]+)?", "g");

    //ligne de test
    let testNom = nomRegExp.test(varNom.value)
    let validNom = document.getElementById("validenom");

    if (testNom){
        validenom.textContent = "Nom de famille valide";
        validenom.style.color = "green";
    }else {
        validenom.textContent = "Nom de famille non valide";
        validenom.style.color = "red";
    } 
};

//validation address
//======================================================
let form4 = document.getElementById("loginForm");
form4.adresse.addEventListener("change", function(){
    validAdresse(this)
});

const validAdresse = function(varAdresse){
    let adresseRegExp = new RegExp("[0-9a-zA-Z]+[a-zA-ZéèîïÎÏ/s]", "g");

    //ligne de test
    let testAdresse = adresseRegExp.test(varAdresse.value)
    let validAdresse = document.getElementById("valideadresse");

    if (testAdresse){
        valideadresse.textContent = "Adresse valide";
        valideadresse.style.color = "green";
    }else {
        valideadresse.textContent = "Adresse non valide";
        valideadresse.style.color = "red";
    } 
};

//validation ville
//======================================================
let form6 = document.getElementById("loginForm");
form6.ville.addEventListener("change", function(){
    validVille(this)
});

const validVille = function(varVille){
    let villeRegExp = new RegExp("^[a-zA-ZéèîïÎÏéèêçàîï]", "g");

    //ligne de test
    let testVille = villeRegExp.test(varVille.value)
    let validVille = document.getElementById("valideville");

    if (testVille){
        valideville.textContent = "Nom de ville valide";
        valideville.style.color = "green";
    }else {
        valideville.textContent = "Nom de ville non valide";
        valideville.style.color = "red";
    } 
};

//validation finale de la commande
//=================================================

document.querySelector("button").addEventListener("click", (e)=>{

    e.preventDefault();


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
    //product_id : localStorage.getItem("panier_id")
}

console.log(contact);

let panier = localStorage.getItem("panier_id");
const productPanier = JSON.parse(panier);

const product_id = productPanier;


data = contact + product_id;
console.log(data);

//envoyer l'objet sur le serveur 
//===============================


var xhr2 = new XMLHttpRequest();
/*
xhr2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var retour = this.response;
        console.log(this.response)
    
    } else if (this.readyState == 4 && this.status == 404){
        alert("erreur 404 !");
    }
};
*/
xhr2.open("POST", "http://localhost:3000/api/cameras/order", true);
xhr2.setRequestHeader("Content-Type", "application/json");
//xhr2.send(JSON.stringify(contact + product_id));
//xhr2.send(JSON.stringify(data));
xhr2.send(data);


//localStorage.clear();
//window.location.assign(url="confirmation.html");


//fin de la fonction
});

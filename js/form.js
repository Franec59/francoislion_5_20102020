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

//validation numero et voie
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

//validation code postal
//======================================================
let form5 = document.getElementById("loginForm");
form5.codep.addEventListener("change", function(){
    validCodep(this)
});

const validCodep = function(varCodep){
    let codepRegExp = new RegExp("^(([0-9][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$", "g");

    //ligne de test
    let testCodep = codepRegExp.test(varCodep.value)
    let validCodep = document.getElementById("validecodep");

    if (testCodep){
        validecodep.textContent = "Code postal valide";
        validecodep.style.color = "green";
    }else {
        validecodep.textContent = "Code postal non valide";
        validecodep.style.color = "red";
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

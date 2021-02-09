//page produits des cameras vintages
//============================================================================================================


//définir une classe pour les cameras
//==============================================

class Cam {
    constructor(name, price, description, imageUrl ){
        this.name = name;
        this.price = price;
        this.description= description;
        this.imageUrl= imageUrl;
    }
}


//fiches produits des cameras vintages avec une id
//================================================
//id=cam01, cam02, etc.

let cam01 = new cam ("Fujifilm Instax Wide 300", 125, "Appareil Photo Argentique Instantané Noir", "images/Vcam_1.jpg");


//mettre les caméras dans un tableau global
//================================================

const cameras = [cam01];




//Mettre les fiches produits dans les cards sur html
//=============================================================



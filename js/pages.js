//page cameras
//======================================================

//requete

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        const lesCameras = (this.response);
        console.log(lesCameras);

        let camerasUnparsed = this.response;

        class Cam {
            constructor(name, price, description, imageUrl) {
                this.name = name;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
        }
        var cameras = [];
        camerasUnparsed.forEach ( aCameraUnparsed => {
            const cam = new Cam(aCameraUnparsed.name, aCameraUnparsed.price, aCameraUnparsed.description, aCameraUnparsed.imageUrl, aCameraUnparsed._id, );
            cameras.push(cam)
        })

        cameras.forEach( ref => {
            createFiche(ref);
        })

        
    } else if (this.readyState == 4 && this.status == 404){
        alert("erreur 404 !");
    }

};

xhr.open("GET", "http://localhost:3000/api/cameras", true);
xhr.responseType = "json";
xhr.send();


function createFiche(ref) {

    document.getElementById("camera").addEventListener("click", function(event){

    event.preventDefault();
    
    const newFiche = document.createElement("div");
    newFiche.classList = "col-lg-4 col-md-6 mb-4";
    let newfiche = document.getElementById("ficheProduit");
    ficheProduit.appendChild(newFiche);

    const newCard = document.createElement("div");
    newCard.classList = "card h-100";
    newFiche.appendChild(newCard);

    const lienA = document.createElement("a");
    lienA.href = "fichep1.html";
    newCard.appendChild(lienA);

    const imageCard = document.createElement("img");
    imageCard.classList = "card-img-top";
    imageCard.src = ref.imageUrl;
    imageCard.setAttribute("alt", "nom de l'image");
    lienA.appendChild(imageCard);

    const newCardBody = document.createElement("div");
    newCardBody.classList = "card-body";
    newCard.appendChild(newCardBody);

    const titreH4 = document.createElement("h4");
    titreH4.classList = "card-title";
    titreH4.innerText = ref.name;
    newCardBody.appendChild(titreH4);

    const prixH5 = document.createElement("h5");
    prixH5.innerText = ref.price + "  €";
    newCardBody.appendChild(prixH5);

    const small = document.createElement("small");
    small.classList = "text-muted";
    small.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
    newCardBody.appendChild(small);

    const newCardFooter = document.createElement("div");
    newCardFooter.classList = "card-footer";
    newCard.appendChild(newCardFooter);

    const lienB = document.createElement("a");
    lienB.classList = "btn btn-primary";
    lienB.href = "fichep1.html";
    lienB.setAttribute("role", "button");
    lienB.textContent = "Voir le produit";
    newCardFooter.appendChild(lienB);

    return newFiche;

    })
};













        

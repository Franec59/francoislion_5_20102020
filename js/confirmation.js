
var xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = function(){
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        const recapCommande = (this.response);
        console.log(recapCommande);

        
    } else if (this.readyState == 4 && this.status == 404){
        alert("erreur 404 !");
    }

};

xhr3.open("GET", "http://localhost:3000/api/cameras/order", true);
xhr3.responseType = "json";
xhr3.send();

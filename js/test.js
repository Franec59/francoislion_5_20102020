var xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function(){
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        const testo = (this.response);
        console.log(testo);

        
    } else if (this.readyState == 4 && this.status == 404){
        alert("erreur 404 !");
    }

};

xhr2.open("GET", "http://localhost:3000/api/cameras", true);
xhr2.responseType = "json";
xhr2.send();
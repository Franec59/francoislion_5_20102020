//recuperer le orderId
//=======================
const params2 = new URLSearchParams(window.location.search).get("order");
    console.log(params2);

document.querySelector(".order").innerHTML = params2;

//récupérer le total prix
//=============================
const params3 = new URLSearchParams(window.location.search).get("totalPrice");
    console.log(params3);

document.querySelector(".totalprice").innerHTML = params3/100 + " €";


//effacer le localStorage en fin de commande
//==========================================

localStorage.clear();
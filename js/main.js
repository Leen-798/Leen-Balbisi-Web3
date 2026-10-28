var totalPrice = 0;
var myCart = document.getElementById("cart");
var showPrice = document.getElementById("show");
var Products = document.querySelectorAll(".ul li");

Products.forEach(function(item) {
    item.onclick = function() {
        myCart.innerHTML += item.textContent ;
        totalPrice += +(item.getAttribute("price"));
    };
});

showPrice.onclick = function() {
    console.log(totalPrice);
    document.getElementById("total").innerHTML="Total Price =" +totalPrice 
};
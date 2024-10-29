const apiUrl = "https://fakestoreapi.com/products";

let productcontainer = document.getElementById("product-container");
let favouraiteContainer = document.getElementById("favouraiteContainer");

let promise = fetch(apiUrl);


let likedData = {};
let a;

promise.then(response => {
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    a = data;

  productcontainer.innerHTML = ""

    data.forEach(product => {
        
        //console.log(product);
        productcontainer.innerHTML += 

        `<div class="product-card" id="productcard">
            <div class="product-image">
                <img src=${product.image} alt="Product Image" id="image">
            </div>
                <div class="product-info">
                    <div class="product-id">id: ${product.id}</div>
                    <div class="product-name">${product.title}</div>
                        <div class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>97</span>   
                        </div>
                    <div class="product-price">
                        <span class="final-price">$: ${product.price}</span>
                    </div>
                    <div class="product-actions">
                        <button class="wishlist" id="btn1" onclick="addToWishlist(${product.id})"><i class="fa fa-heart"></i></button>
                        <button class="cart"><i class="fa fa-shopping-cart"></i></button>
                    </div>
            </div>
        </div>
        `
    });
}) 
.catch(error => {
    console.log("There was a problem with the fetch operation:",error);
})
function addToWishlist(productId) {
    console.log('Product ID:', productId);

    if(!likedData[productId]){
        const product = a.find(Element => Element.id === productId);
        if(product){
            likedData[productId] = product
            console.log(likedData)
        }
        else{
            console.log("Product already added", productId);
        }
    }
}
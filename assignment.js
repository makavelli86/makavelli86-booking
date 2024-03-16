const product = [
    {
        image: "images/safron.png",
        id: 1,
        productName: "The Safron Hotel",
        rate:"Rating",
        productTitle: "Lagos",
        productDescription: 'Located in Lagos, 3.1 km from Kalakuta Museum, The Safron Hotel provides accommodation with a garden, free private parking and a bar. With free WiFi, this 5-star hotel offers room service and a 24- hour front desk. The hotel features an indoor pool and a tour desk.',
        productShow: "Show more",
        productExceptional: "Exceptional",
        productReviews:"8 Reviews",
        productPricefrom: "price from",
        productPrice: "NGN 115,741",
        productPerNight:"per night",



    },
     
];


const productDetails = product.map((product, index)=>{
    return` <div key= ${index} class="product-display">
        <div class="image">
          <img src="${product.image}"/>
        </div>

        <div class="details-card">
           <div class= "details">
                <h3>${product.productName}</h3>
                <div class="stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </div>
                <br>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                <h4>${product.productTitle}</h4>
                <p>${product.productDescription}</p>

                <a href="">${product.productShow}</a>
            </div>
        </div>

        <div class="productInfo">
          <div class="one">
            <div class="on">
                <h3>${product.productExceptional}</h3>
                <p class="producReview">${product.productReviews}</p>
            </div>
            <button>9.5</button>
             
          </div>

          <div class="two">
            <p>${product.productPricefrom}</p>
            <p>${product.productPrice}</p>
            <p>${product.productPerNight}</p>

            <button>Check availability</button>
          </div>
        </div>
          
    </div>`;
});

document.getElementById('container').innerHTML = productDetails;
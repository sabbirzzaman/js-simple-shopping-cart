const cartOpenBtn = document.getElementById('cart-open-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const allProduct = document.getElementById('all-product');
const cartSlider = document.getElementById('cart-slider');
const cartProducts = document.getElementById('cart-products');

cartOpenBtn.addEventListener('click', function () {
  cartSlider.classList.add('slider-open');
  document.body.classList.add('no-scroll');
});

cartCloseBtn.addEventListener('click', function () {
  cartSlider.classList.remove('slider-open');
  document.body.classList.remove('no-scroll');
});

allProduct.addEventListener('click', function (event) {
  // Get product text, pricing, image
  const productTitle = event.target.parentElement.parentElement.firstElementChild;
  const productPrice = event.target.parentElement.firstElementChild;

  const productImageTag = event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
  const productImageSrc = productImageTag.getAttribute("src");
  console.log(productImageSrc)


  if (event.target.matches('button')) {
    // Create Elements
    const cartItem = document.createElement('div');
    const cartProduct = document.createElement('div');

    const cartArrow = document.createElement('div');
    const cartUpArrow = document.createElement('i');
    const cartDownArrow = document.createElement('i');

    const cartImage = document.createElement('img');

    const cartDetails = document.createElement('div');
    const cartHeading = document.createElement('h4');
    const cartPrice = document.createElement('p');

    const cartQuantity = document.createElement('div');
    const quantity = document.createElement('span');
    const cartRemoveBtn = document.createElement('button');

    // Add class to the elements
    cartItem.classList.add('cart-item');
    cartProduct.classList.add('cart-product');

    cartArrow.classList.add('cart-arrow');
    cartUpArrow.classList.add('fa-solid', 'fa-angle-up');
    cartDownArrow.classList.add('fa-solid', 'fa-angle-down');

    cartImage.setAttribute('src', productImageSrc);

    cartDetails.classList.add('cart-details');

    cartQuantity.classList.add('cart-quantity');
    quantity.setAttribute('id', 'quantity');
    cartRemoveBtn.classList.add('remove-product');

    // Add Inner text
    cartHeading.innerText = productTitle.innerText;
    cartPrice.innerText = productPrice.innerText;
    quantity.innerText = parseInt(1);
    cartRemoveBtn.innerText = 'Remove';

    // Append child
    cartItem.appendChild(cartProduct);
    cartItem.appendChild(cartQuantity);

    cartProduct.appendChild(cartArrow);
    cartArrow.appendChild(cartUpArrow);
    cartArrow.appendChild(cartDownArrow);

    cartProduct.appendChild(cartImage);

    cartProduct.appendChild(cartImage);

    cartProduct.appendChild(cartDetails);
    cartDetails.appendChild(cartHeading);
    cartDetails.appendChild(cartPrice);

    cartProduct.appendChild(cartDetails);

    cartQuantity.appendChild(quantity);
    cartQuantity.appendChild(cartRemoveBtn);

    cartProducts.appendChild(cartItem);
  }
});

cartProducts.addEventListener('click', function (event) {
  const allProducts = event.target;
  if (allProducts.matches('button')) {
    const removeBtnParent = allProducts.parentNode;
    removeBtnParent.parentNode.remove();
  }
});

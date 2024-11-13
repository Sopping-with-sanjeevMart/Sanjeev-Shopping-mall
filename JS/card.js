// Catch ELement
let productsContainer = document.querySelector(".products-container");
const tabs = document.querySelectorAll("[data-target]");

let products = [
  {
    imgDefault: "image/product-1-1.jpg",
    imgHover: "image/product-1-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-2-1.jpg",
    imgHover: "image/product-2-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-3-1.jpg",
    imgHover: "image/product-3-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-4-1.jpg",
    imgHover: "image/product-4-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-5-1.jpg",
    imgHover: "image/product-5-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-6-1.jpg",
    imgHover: "image/product-6-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-7-1.jpg",
    imgHover: "image/product-7-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-8-1.jpg",
    imgHover: "image/product-8-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-9-1.jpg",
    imgHover: "image/product-9-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-10-1.jpg",
    imgHover: "image/product-10-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-11-1.jpg",
    imgHover: "image/product-11-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-12-1.jpg",
    imgHover: "image/product-12-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
  {
    imgDefault: "image/product-13-1.jpg",
    imgHover: "image/product-13-2.jpg",
    productBadge: "Hot",
    productCat: "Clothing",
    productTitle: "Colorful Pattern Shirts",
    newPrice: "$238.85",
    oldPrice: "$245.8",
  },
];

// Create Carde
function createCards(productss) {
  let products = document.querySelector("section.products");
  let productsContainer = document.querySelector(".products-container");
  for (let i in productss) {
    let productItem = document.createElement("div");
    productItem.classList.add("product-item");
    let productBanner = document.createElement("div");
    productBanner.classList.add("product-banner");
    let productContent = document.createElement("div");
    productContent.classList.add("product-content");

    let anchorForImage = document.createElement("a");
    anchorForImage.href = `details.html?src=${productss[i].imgDefault}&hover=${productss[i].imgHover}`;
    anchorForImage.classList.add("product-image");
    let anchorImageOne = document.createElement("img");
    let anchorImageTwo = document.createElement("img");
    anchorImageOne.src = `${productss[i].imgDefault}`;
    anchorImageOne.alt = `${productss[i].imgDefault}`;
    anchorImageOne.classList.add("product-img", "default");
    anchorImageTwo.src = `${productss[i].imgHover}`;
    anchorImageTwo.alt = `${productss[i].imgDefault}`;
    anchorImageTwo.classList.add("product-img", "hover");

    let productActions = document.createElement("div");
    productActions.classList.add("product-actions");

    let anchorForIconOne = document.createElement("a");
    anchorForIconOne.href = `details.html?src=${productss[i].imgDefault}&hover=${productss[i].imgHover}`;
    anchorForIconOne.classList.add("action-btn");
    anchorForIconOne.setAttribute("aria-label", "Quick View");
    anchorForIconOne.innerHTML = `<i class="fi fi-rs-eye"></i>`;

    let anchorForIconTwo = document.createElement("a");
    anchorForIconTwo.href = "#";
    anchorForIconTwo.classList.add("action-btn");
    anchorForIconTwo.setAttribute("aria-label", "Add to wishlist");
    anchorForIconTwo.setAttribute("onclick", "changeHeartColor(event)");
    anchorForIconTwo.innerHTML = `<i class="fa-solid fa-heart"></i>`;

    let anchorForIconThree = document.createElement("a");
    anchorForIconThree.href = "#";
    anchorForIconThree.classList.add("action-btn");
    anchorForIconThree.setAttribute("aria-label", "Compare");
    anchorForIconThree.innerHTML = `<i class="fi fi-rs-shuffle"></i>`;

    let productBadge = document.createElement("div");
    productBadge.classList.add("product-badge", "light-pink");
    productBadge.innerHTML = `${productss[i].productBadge}`;

    // Product Content
    let productCategory = document.createElement("span");
    productCategory.classList.add("product-category");
    productCategory.innerHTML = `${productss[i].productCat}`;

    let anchorForTitle = document.createElement("a");
    anchorForTitle.href = `details.html?src=${productss[i].imgDefault}&hover=${productss[i].imgHover}`;

    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.innerHTML = `${productss[i].productTitle}`;

    let productRating = document.createElement("div");
    productRating.classList.add("product-rating");

    productRating.innerHTML = `
      <i class="fi fi-rs-star"></i>
      <i class="fi fi-rs-star"></i>
      <i class="fi fi-rs-star"></i>
      <i class="fi fi-rs-star"></i>
      <i class="fi fi-rs-star"></i>
    `;

    let productPrice = document.createElement("product-price");
    productPrice.classList.add("product-price", "flex");

    let newPrice = document.createElement("span");
    newPrice.classList.add("new-price");
    newPrice.innerHTML = `${productss[i].newPrice}`;

    let oldPrice = document.createElement("span");
    oldPrice.classList.add("old-price");
    oldPrice.innerHTML = `${productss[i].oldPrice}`;

    let anchorBag = document.createElement("a");
    anchorBag.href = "#";
    anchorBag.classList.add("action-btn", "cart-btn");
    anchorBag.setAttribute("aria-label", "Add To Cart");
    anchorBag.setAttribute("onclick", "changeCart(event)");
    anchorBag.innerHTML = `<i class="fi fi-rs-shopping-bag-add"></i>`;

    anchorForImage.appendChild(anchorImageOne);
    anchorForImage.appendChild(anchorImageTwo);
    productActions.appendChild(anchorForIconOne);
    productActions.appendChild(anchorForIconTwo);
    productActions.appendChild(anchorForIconThree);

    productBanner.appendChild(anchorForImage);
    productBanner.appendChild(productActions);
    productBanner.appendChild(productBadge);

    productContent.appendChild(productCategory);
    anchorForTitle.appendChild(productTitle);
    productContent.appendChild(anchorForTitle);
    productContent.appendChild(productRating);
    productPrice.appendChild(newPrice);
    productPrice.appendChild(oldPrice);
    productContent.appendChild(productPrice);
    productContent.appendChild(anchorBag);

    productItem.appendChild(productBanner);
    productItem.appendChild(productContent);
    productsContainer.appendChild(productItem);
  }
}

let subProduct = products.slice(0, 8);
createCards(subProduct);
// card(subProduct);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");

    let productRandom = [];
    for (let i in subProduct) {
      productRandom.push(products[Math.floor(Math.random() * products.length)]);
    }

    if (tab.classList.contains("active-tab")) {
      productsContainer.innerHTML = "";
      createCards(productRandom);
    }
  });
});

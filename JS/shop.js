/* START pagination */
document.addEventListener("DOMContentLoaded", function () {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const paginationLinks = document.querySelector(".pagination");
  const productContainer = document.querySelector(".products-container");
  const productItems = document.querySelectorAll(".product-item");
  const itemsPerPage = 12;
  let currentPage = 1;

  function updatePagination() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    productItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    generatePaginationLinks();

    const pageLinks = paginationLinks.querySelectorAll(".pagination-link");
    pageLinks.forEach((link, index) => {
      if (index === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function generatePaginationLinks() {
    const totalItems = productItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    paginationLinks.innerHTML = "";

    const prevPageLink = document.createElement("li");
    const prevPageAnchor = document.createElement("a");
    prevPageAnchor.href = "#";
    prevPageAnchor.classList.add("pagination-link", "icon-left");
    prevPageAnchor.innerHTML = '<i class="fi-rs-angle-double-small-left"></i>';
    prevPageLink.appendChild(prevPageAnchor);
    paginationLinks.appendChild(prevPageLink);

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("li");
      const pageAnchor = document.createElement("a");
      pageAnchor.href = "#";
      pageAnchor.classList.add("pagination-link");
      pageAnchor.textContent = i;
      pageLink.appendChild(pageAnchor);
      paginationLinks.appendChild(pageLink);

      pageAnchor.addEventListener("click", () => {
        currentPage = i;
        updatePagination();
      });
    }

    const nextPageLink = document.createElement("li");
    const nextPageAnchor = document.createElement("a");
    nextPageAnchor.href = "#";
    nextPageAnchor.classList.add("pagination-link", "icon-right");
    nextPageAnchor.innerHTML = '<i class="fi-rs-angle-double-small-right"></i>';
    nextPageLink.appendChild(nextPageAnchor);
    paginationLinks.appendChild(nextPageLink);

    prevPageAnchor.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    nextPageAnchor.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });
  }

  if (paginationLinks) {
    updatePagination();
  }
});

/* END pagination */

let numberFound = (document.querySelector(".number-found").innerHTML =
  products.length);

subProduct = products.slice(0, products.length);
productsContainer.innerHTML = "";
createCards(subProduct);

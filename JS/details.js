/* START IMAGE GALLERY */
function imgGallery() {
  const mainImg = document.querySelector(".details-img"),
    smallimg = document.querySelectorAll(".details-small-img");

  smallimg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();
/* End IMAGE GALLERY */

/* START IMAGE DETAILS */
window.addEventListener("DOMContentLoaded", (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const srcParam = urlParams.get("src");
  const hoverParam = urlParams.get("hover");

  const detailsImage = document.querySelector(".details-img.main");
  const detailsImagemain = document.querySelector(".details-small-img.main");
  const detailsImagesub = document.querySelectorAll(".details-small-img.sub");

  if (srcParam) {
    detailsImage.src = srcParam;
    detailsImagemain.src = srcParam;
  }

  if (hoverParam) {
    detailsImagesub.forEach((img) => {
      img.src = hoverParam;
    });
  }
});
/* END IMAGE DETAILS */

  document.addEventListener('DOMContentLoaded', function () {
    // Get all the size links
    const sizeLinks = document.querySelectorAll('.size-link');

    // Add click event listener to each size link
    sizeLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'size-active' class from all size links
        sizeLinks.forEach(link => link.classList.remove('size-active'));

        // Add 'size-active' class to the clicked link
        this.classList.add('size-active');

        // Optionally, you can do something else here, like updating the displayed size or price
        const selectedSize = this.getAttribute('data-size');
        console.log('Selected Size:', selectedSize); // You can use this value to update other parts of your page, like price or description
      });
    });
  });


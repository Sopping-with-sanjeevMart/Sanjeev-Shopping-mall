/* START FOOTER*/
const footer = document.createElement("footer");
footer.classList.add("footer", "container");

const footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container", "grid");

const footerContent1 = document.createElement("div");
footerContent1.classList.add("footer-content");

const footerLogo = document.createElement("a");
footerLogo.href = "index.html";
footerLogo.classList.add("footer-logo");

const logoImg = document.createElement("img");
logoImg.src = "image/logo.svg";
logoImg.alt = "";
logoImg.classList.add("footer-logo-img");

footerLogo.appendChild(logoImg);

const footerSubtitle1 = document.createElement("h4");
footerSubtitle1.classList.add("footer-subtitle");
footerSubtitle1.textContent = "Contact";

const addressPara = document.createElement("p");
addressPara.classList.add("footer-description");
addressPara.innerHTML =
  "<span>Address:</span> khalsa college of engineering and technology ,Amritsar (Punjab)";

const phonePara = document.createElement("p");
phonePara.classList.add("footer-description");
phonePara.innerHTML = "<span>Phone:</span> +9905972730";

const hoursPara = document.createElement("p");
hoursPara.classList.add("footer-description");
hoursPara.innerHTML = "<span>Hours:</span> 10:00 - 18:00, Mon - Sat";

const footerSocial = document.createElement("div");
footerSocial.classList.add("footer-social");

const footerSubtitle2 = document.createElement("h4");
footerSubtitle2.classList.add("footer-subtitle");
footerSubtitle2.textContent = "Follow Me";

const socialLinks = document.createElement("div");
socialLinks.classList.add("footer-social-links", "flex");

const socialIcons = [
  "icon-facebook.svg",
  "icon-twitter.svg",
  "icon-instagram.svg",
  "icon-pinterest.svg",
  "icon-github.svg",
];
for (const icon of socialIcons) {
  const link = document.createElement("a");
  switch (icon) {
    case "icon-facebook.svg":
      link.href = "#";
      break;
    case "icon-twitter.svg":
      link.href = "#";
      break;
    case "icon-instagram.svg":
      link.href = "#";
      break;
    case "icon-pinterest.svg":
      link.href = "#";
      break;
    case "icon-github.svg":
      link.href = "";
      break;

    default:
      link.href = "";
      break;
  }
  link.href = "";
  const iconImg = document.createElement("img");
  iconImg.src = `image/${icon}`;
  iconImg.alt = "";
  iconImg.classList.add("footer-social-icon");
  link.appendChild(iconImg);
  socialLinks.appendChild(link);
}

footerContent1.appendChild(footerLogo);
footerContent1.appendChild(footerSubtitle1);
footerContent1.appendChild(addressPara);
footerContent1.appendChild(phonePara);
footerContent1.appendChild(hoursPara);
footerContent1.appendChild(footerSocial);
footerSocial.appendChild(footerSubtitle2);
footerSocial.appendChild(socialLinks);

const footerContent2 = document.createElement("div");
footerContent2.classList.add("footer-content");

const footerTitle1 = document.createElement("h3");
footerTitle1.classList.add("footer-title");
footerTitle1.textContent = "Address";

const addressList = document.createElement("ul");
addressList.classList.add("footer-links");

const addressLinks = [
  "About Us",
  "Delivery Information",
  "Privacy Policy",
  "Terms & Conditions",
  "Contact Us",
  "Support Center",
];
for (const linkText of addressLinks) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "";
  link.classList.add("footer-link");
  link.textContent = linkText;
  listItem.appendChild(link);
  addressList.appendChild(listItem);
}

footerContent2.appendChild(footerTitle1);
footerContent2.appendChild(addressList);

const footerContent3 = document.createElement("div");
footerContent3.classList.add("footer-content");

const footerTitle2 = document.createElement("h3");
footerTitle2.classList.add("footer-title");
footerTitle2.textContent = "My Account";

const accountList = document.createElement("ul");
accountList.classList.add("footer-links");

const accountLinks = [
  "Sign In",
  "View Cart",
  "My Wishlist",
  "Track My Order",
  "Help",
  "Order",
];

for (const linkText of accountLinks) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  switch (linkText) {
    case "Sign In":
      link.href = "login-register.html";
      break;
    case "View Cart":
      link.href = "cart.html";
      break;
    case "My Wishlist":
      link.href = "wishlist.html";
      break;
    case "Track My Order":
      link.href = "cart.html";
      break;
    case "Help":
      link.href = "";
      break;
    case "Order":
      link.href = "cart.html";
      break;

    default:
      link.href = "";
      break;
  }
  link.classList.add("footer-link");
  link.textContent = linkText;
  listItem.appendChild(link);
  accountList.appendChild(listItem);
}

footerContent3.appendChild(footerTitle2);
footerContent3.appendChild(accountList);

const footerContent4 = document.createElement("div");
footerContent4.classList.add("footer-content");

const footerTitle3 = document.createElement("h3");
footerTitle3.classList.add("footer-title");
footerTitle3.textContent = "Secured Payment Gateways";

const paymentImg = document.createElement("img");
paymentImg.src = "image/payment-method.png";
paymentImg.alt = "payment-method";
paymentImg.setAttribute("loading", "lazy");
paymentImg.classList.add("payment-img");

footerContent4.appendChild(footerTitle3);
footerContent4.appendChild(paymentImg);

const footerBottom = document.createElement("div");
footerBottom.classList.add("footer-bottom");

const copyrightPara = document.createElement("p");
copyrightPara.classList.add("copyright");
let date = new Date();
copyrightPara.textContent = `\u00A9 ${date.getFullYear()} Sanjeev. All rights reserved`;

const designerSpan = document.createElement("span");
designerSpan.classList.add("designer");
designerSpan.textContent = "Designed By Sanjeev kumar";

footerBottom.appendChild(copyrightPara);
footerBottom.appendChild(designerSpan);

footer.appendChild(footerContainer);
footerContainer.appendChild(footerContent1);
footerContainer.appendChild(footerContent2);
footerContainer.appendChild(footerContent3);
footerContainer.appendChild(footerContent4);
footer.appendChild(footerBottom);

document.body.appendChild(footer);
/* END FOOTER*/

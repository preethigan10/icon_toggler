const gallerItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

gallerItem.forEach(item => {
  item.addEventListener("click", (e) => {
  e.preventDefault();
  let imageClicked = e.target.src; 
  lightbox.style.display = "flex";
  lightboxImage.setAttribute('src', imageClicked);
  });
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}); 
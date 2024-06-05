let currentIndex = 0; // This is for tracking the current image in the lightbox
const images = document.querySelectorAll(".gallery .card img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".close-btn");
const lightboxPrev = document.querySelector(".prev");
const lightboxNext = document.querySelector(".next");

// This is for opening the lightbox with a specified image
function openLightbox(index) {
  currentIndex = index;
  showImage(index);
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// This is for closing the lightbox
function closeLightbox() {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
}

// This is for changing the image in the lightbox
function changeImage(delta) {
  currentIndex = (currentIndex + delta + images.length) % images.length;
  showImage(currentIndex);
}

// This is for showing the image in the lightbox
function showImage(index) {
  lightboxImage.src = images[index].src;
}

// This is for adding event listeners to the images
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
  });
});

// This is for adding event listeners to the navigation allows and closing arrow
lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => changeImage(-1));
lightboxNext.addEventListener("click", () => changeImage(1));

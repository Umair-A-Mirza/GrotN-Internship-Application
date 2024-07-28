document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".glide__slide");

  //   To enforce width as glide_slide--active overrides the width.
  slides.forEach((slide) => {
    slide.classList.remove("glide__slide--active");
    slide.style.width = "100%";
    slide.style.marginLeft = "0";
    slide.style.marginRight = "0";
  });

  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 0,
  }).mount();

  const defaultSection = document.getElementById("shortlisted_section");
  defaultSection.classList.add("selected");
});

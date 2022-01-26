const images = document.querySelectorAll(".image");

images.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    images.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");
  });
});

$(".image").click(function () {
  $(".image").removeClass("active");
  $(this).addClass("active");
});

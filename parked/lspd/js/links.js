document.getElementById("linkFilter").addEventListener("change", function () {
  const selected = this.value;
  const links = document.querySelectorAll(".links a");

  links.forEach((link) => {
    const categories = link.getAttribute("data-category").split(" ");
    const show = selected === "all" || categories.includes(selected);
    if (show) {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
  });
});

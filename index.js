function goToPage(page) {
  if (page !== "") {
    window.location.href = page;
  }
}

function scrollToFooter() {
  const footer = document.querySelector(".footer-upper");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
}

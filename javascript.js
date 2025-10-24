document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("support-btn");
  const popup = document.getElementById("popup");

  button.addEventListener("click", () => {
    // Show popup
    popup.classList.add("show");

    // Hide popup after 2.5 seconds
    clearTimeout(popup._hideTimeout);
    popup._hideTimeout = setTimeout(() => {
      popup.classList.remove("show");
    }, 2500);
  });
});

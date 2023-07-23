const heartIcon = document.querySelector(".heart-icon");
const likeCount = document.querySelector(".like-count");

heartIcon.addEventListener("click", function () {
  heartIcon.classList.toggle("clicked");
  if (heartIcon.classList.contains("clicked")) {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
    // heartIcon.style.backgroundColor = "#FF1966"; // tambahkan baris ini
  } else {
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
    heartIcon.style.backgroundColor = ""; // tambahkan baris ini
  }
});

// darkmode
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// like icon
// const heartIcon = document.querySelector(".heart-icon");
// const likeCount = document.querySelector(".like-count");

// heartIcon.addEventListener("click", function () {
//   heartIcon.classList.toggle("bi-heart-fill");
//   heartIcon.classList.toggle("bi-heart");
//   if (heartIcon.classList.contains("bi-heart-fill")) {
//     likeCount.textContent = parseInt(likeCount.textContent) + 1;
//   } else {
//     likeCount.textContent = parseInt(likeCount.textContent) - 1;
//   }
// });

const heartIcon = document.querySelector(".heart-icon");
const likeCount = document.querySelector(".like-count");

// Load initial status from localStorage, or set to false if not found
let isLiked = localStorage.getItem("isLiked") === "true" ? true : false;

// Update heart icon and like count based on initial status
if (isLiked) {
  heartIcon.classList.add("bi-heart-fill");
  heartIcon.classList.remove("bi-heart");
  likeCount.textContent = parseInt(likeCount.textContent) + 1;
}

// Add click event listener to heart icon
heartIcon.addEventListener("click", function () {
  // Toggle isLiked value and update localStorage
  isLiked = !isLiked;
  localStorage.setItem("isLiked", isLiked.toString());

  // Update heart icon and like count based on new status
  heartIcon.classList.toggle("bi-heart-fill");
  heartIcon.classList.toggle("bi-heart");
  likeCount.textContent = parseInt(likeCount.textContent) + (isLiked ? 1 : -1);
});

// like icon end

// update time end
function updateTime() {
  const currentTimeElem = document.getElementById("current-time");
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateString = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  currentTimeElem.textContent = timeString + " – " + dateString;
}

// Update time every second
setInterval(updateTime, 1000);

// Call updateTime once immediately to avoid initial delay
updateTime();
// update time end

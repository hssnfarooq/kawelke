// // Initialize Swiper
// const swiper = new Swiper(".swiper-container", {
//   loop: true, // Infinite loop mode
//   slidesPerView: 3, // Show 3 logos at a time
//   spaceBetween: 30, // Adjust space between slides if necessary

//   // Use your custom buttons as navigation controls
//   navigation: {
//     nextEl: ".swiper-button-next", // Your custom next button
//     prevEl: ".swiper-button-prev", // Your custom previous button
//   },

//   // Optional: Disable Swiper's default navigation buttons behavior
//   allowSlidePrev: true,
//   allowSlideNext: true,
// });

document.addEventListener("DOMContentLoaded", () => {
  const logoBox = document.querySelector(".partners__logo-box");
  const partnersData = [
    "./imgs/partner-1.svg",
    "./imgs/partner-2.svg",
    "./imgs/partner-3.svg",
    "./imgs/partner-1.svg",
    "./imgs/partner-2.svg",
    "./imgs/partner-3.svg",
    "./imgs/partner-1.svg",
    "./imgs/partner-2.svg",
    "./imgs/partner-3.svg",
    "./imgs/partner-1.svg",
    "./imgs/partner-2.svg",
    "./imgs/partner-3.svg",

    // Add more partner images as needed
  ];

  function createPartnerElements(images) {
    return images.map((src) => {
      const partner = document.createElement("div");
      partner.classList.add("partner");
      const img = document.createElement("img");
      img.classList.add("partner__logo");
      img.src = src;
      img.alt = "Partner logo";
      partner.appendChild(img);
      return partner;
    });
  }

  // Create initial set of partners
  const partners = createPartnerElements(partnersData);
  partners.forEach((partner) => logoBox.appendChild(partner));

  // Clone partners for infinite scrolling
  const partnersCloneBefore = createPartnerElements(partnersData);
  const partnersCloneAfter = createPartnerElements(partnersData);
  partnersCloneBefore.forEach((partner) =>
    logoBox.insertBefore(partner, logoBox.firstChild)
  );
  partnersCloneAfter.forEach((partner) => logoBox.appendChild(partner));

  const totalPartners = partners.length;
  const partnerWidth =
    partners[0].offsetWidth +
    parseFloat(getComputedStyle(partners[0]).marginRight); // Width + margin
  let currentIndex = totalPartners;

  // Set initial position to show the first real partner
  logoBox.style.transform = `translateX(-${currentIndex * partnerWidth}px)`;

  let isDragging = false;
  let startX = 0;
  let dragStartX = 0;
  let dragOffset = 0;

  // Arrow button functionality
  document.querySelector(".arrow__left").addEventListener("click", () => {
    currentIndex--;
    updateSlider();
  });

  document.querySelector(".arrow__right").addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });

  function updateSlider() {
    logoBox.style.transition = "transform 0.3s ease";
    logoBox.style.transform = `translateX(-${currentIndex * partnerWidth}px)`;

    // Handle looping for infinite scrolling
    if (currentIndex < 0) {
      currentIndex += totalPartners;
      setTimeout(() => {
        logoBox.style.transition = "none";
        logoBox.style.transform = `translateX(-${
          currentIndex * partnerWidth
        }px)`;
      }, 300);
    } else if (currentIndex >= totalPartners * 2) {
      currentIndex -= totalPartners;
      setTimeout(() => {
        logoBox.style.transition = "none";
        logoBox.style.transform = `translateX(-${
          currentIndex * partnerWidth
        }px)`;
      }, 300);
    }
  }
});

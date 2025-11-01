// ==================== WAIT FOR DOM READY ====================
document.addEventListener("DOMContentLoaded", () => {
  // ==================== NAVBAR TOGGLE ====================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  // ==================== LOGO SLIDER ====================
  const slider = document.getElementById("sliderTrack");
  if (slider) {
    const logos = slider.children;
    const visibleCount = 5; // always show 5
    const total = logos.length;
    let index = 0;

    // Clone first few logos to loop seamlessly
    for (let i = 0; i < visibleCount; i++) {
      slider.appendChild(logos[i].cloneNode(true));
    }

    const logoWidth = logos[0].offsetWidth + 60; // width + gap

    function slideNext() {
      index++;
      slider.style.transform = `translateX(-${index * logoWidth}px)`;

      if (index >= total) {
        setTimeout(() => {
          slider.style.transition = "none";
          index = 0;
          slider.style.transform = `translateX(0)`;
          setTimeout(() => {
            slider.style.transition = "transform 0.6s ease-in-out";
          }, 100);
        }, 600);
      }
    }

    setInterval(slideNext, 2000);
  }

  // ==================== SPECIALIZATION MODAL ====================
  const modal = document.getElementById("specializationModal");

  if (modal) {
    const closeModal = document.getElementById("closeModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const cards = document.querySelectorAll(".specialization-card");

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const imgSrc = card.querySelector("img")?.src || "";
        const title = card.querySelector(".card-label")?.textContent || "";
        const learnMoreBtn = card.querySelector(".learn-more");
        const fullDesc =
          learnMoreBtn?.getAttribute("data-description") ||
          card.querySelector(".card-text")?.textContent ||
          "";

        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalText.textContent = fullDesc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });

    // Close modal
    closeModal?.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    // Close when clicking outside modal
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // ==================== GALLERY SECTION ====================
  const patientBtn = document.getElementById("patient-btn");
  const functionBtn = document.getElementById("function-btn");
  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (patientBtn && functionBtn && gallery && lightbox && lightboxImg) {
    const patientImages = [
      "./img/galary/g (53).webp",
      "./img/galary/g (54).webp",
      "./img/galary/g (57).webp",
      "./img/galary/g (58).webp",
      "./img/galary/g (59).webp",
    ];

    const functionImages = [
      "./img/galary/g (10).webp",
      "./img/galary/g (1).webp",
      "./img/galary/g (2).webp",
      "./img/galary/g (3).webp",
      "./img/galary/g (4).webp",
      "./img/galary/g (5).webp",
      "./img/galary/g (6).webp",
      "./img/galary/g (7).webp",
      "./img/galary/g (8).webp",
      "./img/galary/g (9).webp",
      "./img/galary/g (11).webp",
      "./img/galary/g (12).webp",
      "./img/galary/g (13).webp",
      "./img/galary/g (14).webp",
      "./img/galary/g (15).webp",
      "./img/galary/g (16).webp",
      "./img/galary/g (17).webp",
      "./img/galary/g (18).webp",
      "./img/galary/g (19).webp",
      "./img/galary/g (20).webp",
      "./img/galary/g (21).webp",
      "./img/galary/g (22).webp",
      "./img/galary/g (23).webp",
      "./img/galary/g (24).webp",
      "./img/galary/g (25).webp",
      "./img/galary/g (26).webp",
      "./img/galary/g (27).webp",
      "./img/galary/g (28).webp",
      "./img/galary/g (29).webp",
      "./img/galary/g (30).webp",
      "./img/galary/g (31).webp",
      "./img/galary/g (32).webp",
      "./img/galary/g (33).webp",
      "./img/galary/g (34).webp",
      "./img/galary/g (35).webp",
      "./img/galary/g (36).webp",
      "./img/galary/g (37).webp",
      "./img/galary/g (38).webp",
      "./img/galary/g (39).webp",
      "./img/galary/g (40).webp",
      "./img/galary/g (41).webp",
      "./img/galary/g (42).webp",
      "./img/galary/g (43).webp",
      "./img/galary/g (44).webp",
      "./img/galary/g (45).webp",
      "./img/galary/g (46).webp",
      "./img/galary/g (47).webp",
      "./img/galary/g (48).webp",
      "./img/galary/g (49).webp",
      "./img/galary/g (50).webp",
      "./img/galary/g (51).webp",
      "./img/galary/g (52).webp",
      "./img/galary/g (53).webp",
      "./img/galary/g (54).webp",
      "./img/galary/g (55).webp",
      "./img/galary/g (56).webp",
      "./img/galary/g (57).webp",
      "./img/galary/g (58).webp",
      "./img/galary/g (59).webp",
      "./img/galary/g (60).webp",
      "./img/galary/g (61).webp",
      "./img/galary/g (62).webp",
      "./img/galary/g (63).webp",
      "./img/galary/g (64).webp",
      "./img/galary/g (65).webp",
      "./img/galary/g (66).webp",
      "./img/galary/g (67).webp",
      "./img/galary/g (68).webp",
      "./img/galary/g (69).webp",
      "./img/galary/g (70).webp",
      "./img/galary/g (71).webp",
      "./img/galary/g (72).webp",
      "./img/galary/g (73).webp",
      "./img/galary/g (74).webp",
      "./img/galary/g (75).webp",
      "./img/galary/g (76).webp",
      "./img/galary/g (77).webp",
      "./img/galary/g (78).webp",
      "./img/galary/g (79).webp",
      "./img/galary/g (80).webp",
      "./img/galary/g (81).webp",
      "./img/galary/g (82).webp",
      "./img/galary/g (83).webp",
      "./img/galary/g (84).webp",
      "./img/galary/g (85).webp",
      "./img/galary/g (86).webp",
      "./img/galary/g (87).webp",
      "./img/galary/g (88).webp",
      "./img/galary/g (89).webp",
      "./img/galary/g (90).webp",
      "./img/galary/g (91).webp",
      "./img/galary/g (92).webp",
      "./img/galary/g (93).webp",
      "./img/galary/g (94).webp",
      "./img/galary/g (95).webp",
      "./img/galary/g (96).webp",
    ];

    // Function to load selected image set
    function loadImages(images) {
      gallery.innerHTML = images
        .map(
          (img) => `
          <div class="gallery-item">
            <img src="${img}" alt="Gallery Image">
            <div class="zoom-icon">&#128269;</div>
          </div>`
        )
        .join("");

      attachLightboxEvent();
    }

    // Lightbox click setup
    function attachLightboxEvent() {
      const allImgs = document.querySelectorAll(".gallery-item img");
      allImgs.forEach((img) => {
        img.addEventListener("click", () => {
          lightboxImg.src = img.src;
          lightbox.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      });
    }

    // Close lightbox
    closeBtn?.addEventListener("click", () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });

    // Button switching
    patientBtn.addEventListener("click", () => {
      patientBtn.classList.add("active");
      functionBtn.classList.remove("active");
      loadImages(patientImages);
    });

    functionBtn.addEventListener("click", () => {
      functionBtn.classList.add("active");
      patientBtn.classList.remove("active");
      loadImages(functionImages);
    });

    // Default: load patient images
    loadImages(patientImages);
  }
  function setupTabs(tabContainerId, contentContainerId) {
    const tabs = document
      .getElementById(tabContainerId)
      .querySelectorAll(".abnormal-tab");
    const contents = document
      .getElementById(contentContainerId)
      .querySelectorAll(".abnormal-content-box");

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        tab.classList.add("active");
        contents[i].classList.add("active");
      });
    });
  }

  setupTabs("causeTabs", "causeContents");
  setupTabs("investigationTabs", "investigationContents");
});
const items = document.querySelectorAll(".contracept-item");

items.forEach((item) => {
  const btn = item.querySelector(".contracept-title");
  btn.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

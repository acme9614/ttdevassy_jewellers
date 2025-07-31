   const menuToggle = document.getElementById("menu-toggle");
    const drawer = document.getElementById("drawer");
    const closeDrawer = document.getElementById("close-drawer");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", () => {
      drawer.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    });

    closeDrawer.addEventListener("click", () => {
      drawer.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", () => {
      drawer.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    });


// drawers menu
function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToCatalogues() {
  Toaster.postMessage("navigateToCatalogues");
}

function navigateToQuickPurchase() {
  Toaster.postMessage("navigateToQuickPurchase");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}


// BrandingSlider 

 const swiper = new Swiper(".BrandingSwiper", {
      loop: true,
      effect: "cube",
      grabCursor: true,
      speed : 2000,
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    document.getElementById('prevBtn').addEventListener('click', () => swiper.slidePrev());
    document.getElementById('nextBtn').addEventListener('click', () => swiper.slideNext());


    
  // services 

   AOS.init({
    duration: 800,
    once: false,
    disable: false, // 👈 Add this line
  });
  

  let expanded = false;
  function toggleBoxes() {
    const container = document.getElementById("boxContainer");
    const arrow = document.getElementById("arrowIcon");

    if (!expanded) {
      container.classList.remove("max-h-[15.5rem]");
      arrow.classList.add("rotate-180");
      expanded = true;
    } else {
      container.classList.add("max-h-[15.5rem]");
      arrow.classList.remove("rotate-180");
      expanded = false;
    }
  }

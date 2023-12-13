const faqelements = document.getElementsByClassName("qsn_cross");

const toggleFaq = function () {
  let isopen = parseInt(this.getAttribute("data-open"));

  // close all faq's
  const descriptions = document.getElementsByClassName("description");
  for (var i = 0; i < descriptions.length; i++) {
    faqelements[i].setAttribute("data-open", "0");
    descriptions[i].style.height = "0px";
  }

  //set current clicked item either open or close
  this.setAttribute("data-open", isopen ? "0" : "1");

  // get get item of the click element
  let nextElement = this.nextElementSibling;

  // get height of the next element
  const height = nextElement.scrollHeight;

  // if open, then set height to max
  if (!isopen) {
    setTimeout(() => {
      nextElement.style.height = height + "px";
    }, 40);
  }
};

for (var i = 0; i < faqelements.length; i++) {
  faqelements[i].addEventListener("click", toggleFaq, false);
}

var primeWrapper = document.querySelector(".intro .prime");
primeWrapper.innerHTML = primeWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var primeWrapper = document.querySelector(".intro .grime");
primeWrapper.innerHTML = primeWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var secondWrapper = document.querySelector(".second");
secondWrapper.innerHTML = secondWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".intro .letter",
  translateY: ["1.1em", 0],
  translateZ: 0,
  duration: 750,
  delay: (el, i) => 50 * i,
});

// Select the target element to animate
var targetElement = document.querySelector(".deee");

// Observer options
var options = {
  threshold: 0.5, // Adjust the threshold as needed
};

// Intersection Observer callback function
var callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { opacity: 1, y: 0, duration: 1 }); // Fade in animation
    } else {
      gsap.to(entry.target, { opacity: 0, y: 50, duration: 1 }); // Fade out animation
    }
  });
};

// Create the Intersection Observer
var observer = new IntersectionObserver(callback, options);

// Start observing the target element
observer.observe(targetElement);

const thumbnail = document.getElementById("thumbnail");
const overlay = document.getElementById("video-overlay");
const videoFrame = document.getElementById("youtube-video");

thumbnail.addEventListener("click", () => {
  overlay.style.display = "flex";
  videoFrame.src = "https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=1";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
    videoFrame.src = "";
  }
});
// ==================Nabbar============================
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("#navbar a");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll.call(this);
      toggleActiveClass();
      closeMenu();
    });
  });

  menuIcon.addEventListener("click", function () {
    console.log("clicked");
    navbar.classList.toggle("active");

    toggleOverlay();
  });

  overlay.addEventListener("click", function () {
    closeMenu();
  });

  // function toggleActiveClass() {
  //   navbarLinks.forEach((link) => {
  //     link.classList.remove("active");
  //   });

  //   this.classList.add("active");
  // }

  function closeMenu() {
    navbar.classList.remove("active");
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 300); // Matches the transition duration
  }

  function toggleOverlay() {
    if (navbar.classList.contains("active")) {
      overlay.style.display = "block";
      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 10); // Adding a small delay for display to take effect
    } else {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300); // Matches the transition duration
    }
  }
});

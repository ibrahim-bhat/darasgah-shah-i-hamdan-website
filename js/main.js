(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    var timeout = 1000; // Default timeout for other pages

    if (window.location.pathname.includes("index.html")) {
      timeout = 2000; // Set 3 seconds timeout for index.html
    }

    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, timeout);
  };

  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 300) {
  //         $('.back-to-top').fadeIn('slow');
  //     } else {
  //         $('.back-to-top').fadeOut('slow');
  //     }
  // });
  // $('.back-to-top').click(function () {
  //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  //     return false;
  // });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

//formspree blocker
async function submitForm() {
  // Get form element
  var form = document.getElementById("myForm");

  // Get form data
  var formData = new FormData(form);

  // Send form data to Formspree using fetch
  await fetch("https://formspree.io/f/xyyrznyp", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  // Display the thank-you message
  document.getElementById("thankYouMessage").style.display = "block";

  // Reset the form
  form.reset();
}

// Function to animate number counting
function animateCounting(target, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let element = document.getElementById(target);
  let timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Intersection Observer for scrolling
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the counting animation when the element is in the viewport
        animateCounting("count1", 9300, 9950, 1000);
        animateCounting("count2", 0, 120, 2000);
        animateCounting("count3", 0, 49, 3000);
        observer.unobserve(entry.target); // Stop observing once triggered
      }
    });
  },
  { threshold: 0.5 }
);

// Target elements for observation
const targets = document.querySelectorAll(".students-card");
targets.forEach((target) => {
  observer.observe(target);
});

// read more
function toggleAdditionalContent() {
  var additionalContent = document.getElementById("additional-content");
  var readMoreLink = document.getElementById("read-more-link");

  if (additionalContent.style.display === "none") {
    additionalContent.style.display = "inline";
    readMoreLink.innerHTML = "Read Less";
  } else {
    additionalContent.style.display = "none";
    readMoreLink.innerHTML = "Read More";
  }
}

 // Get the modal
  var modal = document.getElementById("photoModal");

  // Get the image and insert it inside the modal
  var images = document.querySelectorAll(".tm-gallery img");
  var modalImg = document.getElementById("modalImg");
  images.forEach(function(img) {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when clicking outside of the image or the close button
  modal.addEventListener('click', function(event) {
    if (event.target === this) {
      modal.style.display = "none";
    }
  });
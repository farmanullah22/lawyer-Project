
// Starting the below section of Our Vision
// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        button.classList.toggle("active");

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {
            const speed = 50;
            if (count < target) {
                count += Math.ceil(target / speed);
                counter.innerText = count;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(counter => observer.observe(counter));
});
// ending of the Faq-Question sectoin etc


//    This is Slider 
let index = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    index = n;
    const offset = -index * 100; // Move slider
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Manual slide selection
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
});



// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    let heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
});
// the end of slider



// starting of Our Vision Picture animatoin
const aboutImages = document.querySelectorAll(".about-image");
const containerContent = document.querySelectorAll(".container-content");
const studentImage = document.querySelector(".student-image");
const faqHeading = document.querySelector(".faq-heading-info");
const faqItem = document.querySelectorAll(".faq-item");
const thinkingSvg = document.querySelector(".home-about-text svg");
const homeClassRoom = document.querySelector(".home-classroom-svg svg");

  const options = {
    root: null,
    threshold: 0.2,
  };

  const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 1000);
        threshold = 0;
      }else if(threshold === 0){
        entry.target.classList.remove("visible");
      }
    });
  }, options);

  containerContent.forEach((content) => observe.observe(content));
  aboutImages.forEach((image) => observe.observe(image));
  observe.observe(studentImage);
  observe.observe(faqHeading)
  faqItem.forEach((item) => observer.observe(item));
  observe.observe(thinkingSvg);

/* end of Our Vision  animation area*/


//  start of Booking Appointment section
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointment-form");
    const confirmationMessage = document.getElementById("confirmation");
    const submitButton = document.querySelector(".btn-submit");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload

        submitButton.textContent = "Submitting...";
        submitButton.style.background = "#ccc";

        setTimeout(() => {
            submitButton.textContent = "Book Now";
            submitButton.style.background = "#007bff";
            confirmationMessage.classList.remove("hidden");

            setTimeout(() => {
                confirmationMessage.classList.add("hidden");
            }, 3000);
        }, 2000);
    });
});
// end of Booking Appointment section
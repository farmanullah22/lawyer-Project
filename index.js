const carousel = new bootstrap.Carousel('#myCarousel')
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        
        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            event.preventDefault(); // Stop form submission
        } else {
            alert("Form submitted successfully!");
        }
    });



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




document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("read-more");
    const extraContent = document.getElementById("extra-content");

    readMoreBtn.addEventListener("click", function () {
        if (extraContent.style.display === "none" || extraContent.style.display === "") {
            extraContent.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            extraContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {

    // Case Counter Animation
    function animateCounter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start;
        let step = (end - start) / (duration / 10);

        function updateCounter() {
            current += step;
            obj.textContent = Math.floor(current);
            if (current < end) {
                requestAnimationFrame(updateCounter);
            }
        }
        updateCounter();
    }

    animateCounter("cases-won", 0, 500, 2000);
    animateCounter("clients", 0, 200, 2000);
    animateCounter("success-rate", 0, 95, 2000);

    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", function () {
            let answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    });

    // Consultation Form Validation
    document.getElementById("eligibility-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
            return;
        }
        alert("Eligibility check submitted!");
        this.reset();
    });

    // Dark Mode Toggle
    document.getElementById("dark-mode-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});


// The successfull and expirence
// Counter Animation Function
const counters = document.querySelectorAll('.counter');
const speed = 100; // Animation speed

const runCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Get target number
        const increment = target / speed;
        
        let count = 0;
        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
};

// Run counter animation when section is visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter();
            observer.disconnect(); // Stops observing after first animation
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.success-rate'));

// This is for the Frequently Question
document.addEventListener("DOMContentLoaded", function() {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(faq => {
        const question = faq.querySelector(".faq-question");
        const answer = faq.querySelector(".faq-answer");
        const icon = question.querySelector(".icon");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            // Close all answers first
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".icon").forEach(ic => ic.textContent = "+");

            // Toggle selected answer
            answer.style.display = isOpen ? "none" : "block";
            icon.textContent = isOpen ? "+" : "−";
        });
    });
});

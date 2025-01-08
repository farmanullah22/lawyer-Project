

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


// The lawyer card image slider
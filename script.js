
    // Wait for the entire page to load
    window.addEventListener('load', function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = 0; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide completely after fade-out
        }, 500); // Duration matches the CSS transition
    });





    document.addEventListener("DOMContentLoaded", function () {
        // Hide Loading Screen After Page Loads
        let loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => loadingScreen.style.display = "none", 500);
            }, 1000);
        }
    
        // Smooth Scroll for Internal Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                let target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });
    
        // Fade-in Animation for Sections
        let sections = document.querySelectorAll(".highlights .card, .hero");
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        }, { threshold: 0.3 });
    
        sections.forEach(section => observer.observe(section));
    });
    
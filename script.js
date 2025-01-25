
    // Wait for the entire page to load
    window.addEventListener('load', function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = 0; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide completely after fade-out
        }, 500); // Duration matches the CSS transition
    });


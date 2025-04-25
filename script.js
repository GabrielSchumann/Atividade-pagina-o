document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
    const currentURL = window.location.href;
    links.forEach(link => {
        if (currentURL === link.href) {
            link.classList.add('active');
        }
    });
});

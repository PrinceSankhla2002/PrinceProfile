const socialButtons = document.querySelectorAll(".social-btn");

socialButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const link = this.dataset.link;

        if (link.startsWith("mailto:")) {
            window.location.href = link;
        } else {
            window.open(link, "_blank");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".mini-nav button");
    const pages = document.querySelectorAll(".fullpage-section");

    function showPage(id) {
        pages.forEach(page => {
            page.classList.toggle("active", page.id === id);
        });

        buttons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.page === id);
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            showPage(btn.dataset.page);
        });
    });

    showPage("home");
});

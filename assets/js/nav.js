document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuToggle.addEventListener('click', function () {
        sideMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        sideMenu.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
});

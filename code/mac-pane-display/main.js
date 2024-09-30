document.addEventListener('DOMContentLoaded', () => {
    const panes = document.querySelectorAll('.pane');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenContent = document.getElementById('fullscreen-content');
    const fullscreenClose = document.getElementById('fullscreen-close');
    const windowClose = document.querySelector('.title-bar .close');
    const windowElement = document.querySelector('.window');

    panes.forEach(pane => {
        pane.addEventListener('click', () => {
            fullscreenContent.textContent = pane.textContent + ' Content';
            fullscreen.classList.add('active');
        });
    });

    fullscreenClose.addEventListener('click', () => {
        fullscreen.classList.remove('active');
    });

    windowClose.addEventListener('click', () => {
        windowElement.style.display = 'none';
    });
});

document.querySelectorAll('.color-btn').forEach(button => {
    const color = button.getAttribute('data-color');
    button.style.backgroundColor = color.toLowerCase();

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = color.toLowerCase();
    });
});

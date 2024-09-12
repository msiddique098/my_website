window.addEventListener('scroll', function () {
    const button = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show');
    document.querySelector('.all-over-bkg').classList.toggle('is-visible');
})

addEventListener("resize", () => {
    document.querySelector('nav').classList.remove('show');
    document.querySelector('.all-over-bkg').classList.remove('is-visible');
});
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

const faders = document.querySelectorAll('.fade-in')
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -10px 0px"
}

const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        })
    }, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})
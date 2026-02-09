// Bootstrap Carousel Auto (3 segundos)
new bootstrap.Carousel('#carouselApp', {
    interval: 3000,
    ride: 'carousel',
    pause: false
});

// Animated Metrics Counter
const counters = document.querySelectorAll('.counter');
let triggered = false;

window.addEventListener('scroll', () => {
    const section = document.getElementById('metrics');

    if (section.getBoundingClientRect().top < window.innerHeight && !triggered) {

        counters.forEach(counter => {
            const update = () => {
                const target = +counter.dataset.target;
                const current = +counter.innerText;
                const increment = target / 100;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(update, 20);
                } else {
                    counter.innerText = target;
                }
            };

            update();
        });

        triggered = true;
    }
});

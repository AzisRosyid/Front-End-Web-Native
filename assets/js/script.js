const profileItems = [
    'geforce-1630-1.jpg',
    'geforce-1630-2.jpg',
    'geforce-1630-3.jpg',
    'geforce-1630-4.jpg'
];

const benchmarkItems = [
    'benchmark-1.jpg',
    'benchmark-2.jpg',
    'benchmark-3.jpg',
    'benchmark-4.jpg',
    'benchmark-5.jpg',
    'benchmark-6.jpg',
    'benchmark-7.jpg',
    'benchmark-8.jpg',
    'benchmark-9.jpg',
    'benchmark-10.jpg',
    'benchmark-11.jpg',
    'benchmark-12.jpg',
    'benchmark-average.jpg',
]

setupCarousel('carousel-profile', profileItems);
setupCarousel('carousel-benchmark', benchmarkItems);

document.querySelector('.about-author').addEventListener('click', function() {
    const about = document.querySelector('.flex-column');
    if (about.style.display === 'none') {
        about.style.display = 'block';
        document.querySelector('.about-author-icon').innerHTML = `<svg  width="24" height="24" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>`;
    } 
    else {
        about.style.display = 'none';
        document.querySelector('.about-author-icon').innerHTML = `<svg width="24" height="24" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`;
    } 
});
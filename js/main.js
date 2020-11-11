let i = 0;
let images = [];
let time = 3000;
let slider = document.getElementById('slider');
let slide = document.getElementById('currentSlide');
let prev = document.getElementById('prevButton');
let next = document.getElementById('nextButton');

images = ['img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg'];

slider.onclick = function (e) {
    let target = e.target;
    if (target == next) {
        if (i < images.length - 1) {
            ++i;
        } else {
            i = 0;
        }
        slide.src = images[i];
    }

    if (target == prev) {
        --i;
        if (i < 0) {
            i = images.length - 1;
        } 
        slide.src = images[i];
    }
}




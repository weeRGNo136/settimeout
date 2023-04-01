let i = 0;
let images = ['image1.webp', 'image2.webp', 'image3.webp', 'image4.webp'];

setInterval(function () {
    document.getElementById('slider').src = images[i];
    i = (i + 1) % images.length;
}, 3000);

// Functions for slideshow on homepage
var index = 1;

var myTimer = setInterval(function() {incSlides(1)}, 4000)
window.addEventListener("load", function() {
    slideShow(index);  
})

function incSlides(num) {
    clearInterval(myTimer);
    if (num < 1) {
        slideShow(index -= 1);
    } else {
        slideShow(index += 1);
    }
    if (num === -1) {
        myTimer = setInterval(function(){incSlides(num + 2)}, 4000);
    } else (
        myTimer = setInterval(function(){incSlides(num + 1)}, 4000)
    )
}

function slideShow(num) {
    var i;
    var photos = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (num > photos.length) {
        index = 1
    }
    
    if (num < 1) {
        index = photos.length
    }

    for (i = 0; i < photos.length; i++ ) {
        photos[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }

    photos[index - 1].style.display = "block";
    dots[index - 1].className += " current";
}

function currentSlide(num) {
    clearInterval(myTimer);
    myTimer = setInterval(function(){incSlides(num + 1)}, 4000);
    slideShow(index = num);
}
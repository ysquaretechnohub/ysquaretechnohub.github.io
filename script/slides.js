const slideshow_container = document.querySelector('.slideshow-container');
let slideIndex = 0;
let imageIndex = 0;
let x = 10;

function showSlides() {
    let i;
    let timeout;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    imageIndex++
    if (x == 10 && slideIndex > x) { x = 5; slideIndex = 1 }
    else if (x == 5 && slideIndex > x) { x = 4; slideIndex = 1 }
    else if (x == 4 && slideIndex > x) { x = 10; slideIndex = 1 }
    if (imageIndex > slides.length) { imageIndex = 1 }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[imageIndex - 1].style.display = "block";
    if (x == 10) {
        dots[0].className += " active"
    }
    else if (x == 5) {
        dots[1].className += " active"
    } else {
        dots[2].className += " active"
    }
    timeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function changeSlide(input, i) {

    x = input;
    imageIndex = i;
    slideIndex = 0;
}

const loadSlidesContent = (e) => {
    console.log(slideshow_container)
    if (slideshow_container) {
        for (i = 1; i < 11; i++) {
            slideshow_container.innerHTML += `
                <div class="mySlides ifade">
                    <div class="numbertext">${i} / 10</div>
                    <img src="./assets/cmkky/${i}.jpg" alt="CMKKY ${i}" style="width:100%;">
                    <div class="text">CMKKY</div>
                </div>`;
        }
        for (i = 1; i < 6; i++) {
            slideshow_container.innerHTML += `
                <div class="mySlides ifade">
                    <div class="numbertext">${i} / 5</div>
                    <img src="./assets/niit_vijayanagara/${i}.jpg" alt="NIIT Vijayanagara ${i}" style="width:100%;">
                    <div class="text">NIIT Vijayanagara</div>
                </div>`;
        }
        for (i = 1; i < 5; i++) {
            if(i==4){
                slideshow_container.innerHTML += `
                <div class="mySlides ifade">
                    <div class="numbertext">${i} / 4</div>
                    <img src="./assets/cadd_centre/${i}.png" alt="CADD Centre ${i}" style="width:100%;">
                    <div class="text">CADD Centre</div>
                </div>`; 
            }else{
            slideshow_container.innerHTML += `
                <div class="mySlides ifade">
                    <div class="numbertext">${i} / 4</div>
                    <img src="./assets/cadd_centre/${i}.jpg" alt="CADD Centre ${i}" style="width:100%;">
                    <div class="text">CADD Centre</div>
                </div>`;
            }
        }
    }
}

window.addEventListener ?
    window.addEventListener("load", (e) => {
        loadSlidesContent(e);
        showSlides();
    }, false) :
    window.attachEvent && window.attachEvent("onload", (e) => {
        loadSlidesContent(e);
        showSlides();
    });
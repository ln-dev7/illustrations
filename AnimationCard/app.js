const card = document.querySelector('.container-card');
const imageZoom = document.querySelector('.container-card-image-zoom');
const blocFocusTop = document.querySelector('.container-focus-top');
const blocFocusBottom = document.querySelector('.container-focus-bottom');
const blocContent = document.querySelector('.container-card-show');
const title = document.querySelector('.container-card-show h2');
const allText = document.querySelectorAll('.container-card-show p');
const hr = document.querySelectorAll('.container-card-show hr');

const TLANIM = gsap.timeline({paused: true});

TLANIM
.fromTo(imageZoom, {scale: 1}, {scale: 2, y:120, x:100, duration: 0.4, ease:ExpoScaleEase.config(1,2, 'power2.inOut')})
.to(blocFocusTop, {top: -30, left: -30, duration: 0.1}, 0.5)
.to(blocFocusBottom, {bottom: -30, right: -30, duration: 0.1}, '-=0.1')
.to(blocContent, {bottom: 200, duration: 0.2}, '-=0.1')
.from(title, {opacity: 0, duration: 0.2}, '-=0.1')
.from(allText, {opacity: 0, duration: 0.2}, '-=0.2') // Parcequ'on retourne un tableau
.from(hr, {width: 0, duration: 0.3, stagger: 0.2})

card.addEventListener('mouseenter', (e)=>{
    TLANIM.play();
})

card.addEventListener('mouseleave', (e)=>{
    TLANIM.reverse();
})

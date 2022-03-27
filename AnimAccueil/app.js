window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4, ease: 'power2.out'})
    .to('.bloc-txt', {height: 'auto', duration: 0.6, ease: 'power2.out'}, '-=0.8')
    .to('.bloc-txt h2', {y: 0, ease: 'power2.out'}, '-=0.6')

    .to('.f2', {y: 0, duration: 0.7, ease: 'power2.out'})
    .to('.f2 h2', {y: 0, ease: 'power2.out'}, '-=0.2')
    .add(() => {
        document.querySelector('.flip-img1').style.backgroundImage = "url('ressources/image1.jpg')";
    })
    .to('.f2', {y: '-100%'})

    .to('.f3', {y: 0, duration: 0.7, ease: 'power2.out'})
    .to('.f3 h2', {y: 0, ease: 'power2.out'}, '-=0.2')
    .add(() => {
        document.querySelector('.flip-img1').style.backgroundImage = "url('ressources/image2.png')";
    })
    .to('.f3', {y: '-100%'})

    .to('.load-container', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })

    .add(() => {
        document.querySelector('video').play()
    }, '-=0.8')

}
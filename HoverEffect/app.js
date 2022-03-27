const cursor = document.querySelector('.cursor');
document.addEventListener('mouseover',(e)=>{
    cursor.style.top = `${e.pageY - 30}px`
    cursor.style.left = `${e.pageX - 30}px`
})

const allLinks = document.querySelectorAll('.slide-image');
allLinks.forEach(link => {
    const location = link.getAttribute('data-loc');
    link.addEventListener('mouseenter', (e)=>{
        cursor.classList.add('hovered');
        cursor.style.backgroundImage = `url(img/${location}.jpg)`;
    });
    link.addEventListener('mouseout', (e)=>{
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = 'none';
    })
});
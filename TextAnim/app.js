const textAnim = document.querySelector('h1');

new Typewriter(textAnim, {
    loop: true,
    //deleteSpeed: 20 // Vitesse a laquelle le text s'efface
})
//.changeDelay(20) 
.typeString("Hey moi c'est LN,")
.pauseFor(1000)
.typeString('<span style="color: #eb0404"> Dev FrontEnd.</span>')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #04eb51"> Passioné de la programmation.</span>')
.pauseFor(1000)
.deleteChars(30)
.typeString('<span style="color: #04ebdf"> Gamer PES.</span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: #edf104"> super social :).</span>')
.pauseFor(10000)
.start()
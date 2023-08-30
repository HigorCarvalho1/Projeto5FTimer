import {state} from "./state.js"
import * as focustimer from './focustimer.js'
import * as sounds from './audio.js'
import * as timer from './timer.js'

export const actions = {
 minutes : document.querySelector(".minutos"),
 seconds: document.querySelector('.seconds'),
 html : document.querySelector(".html"),
 play: document.querySelector(".play"),
 stop: document.querySelector(".stop"),
 timer: document.querySelector(".timer"),
 audio:document.querySelector(".audio"),
 notAudio: document.querySelector(".notAudio"),
 pause: document.querySelector(".pause"),


toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    sounds.buttonPressAudio.play()
},

music(){
    actions.html.classList.add('music-on')
    sounds.bgAudio.play()
},
music2(){
    actions.html.classList.remove("music-on")
    sounds.bgAudio.pause()
},

updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    actions.minutes.textContent = String(minutes).padStart(2, "0")// este padStart esta dizendo que o minutes tem que ter dois caracteres , e quando tiver só um , preencher com "0"
    actions.seconds.textContent = String(seconds).padStart(2, "0")    
},

reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.start(5, 0)
    sounds.buttonPressAudio.play()
},

set(){
    

    actions.minutes.onkeypress = (event) => /\d/.test(event.key)
    actions.seconds.onkeypress = (event) => /\d/.test(event.key)
    actions.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        

        actions.updateDisplay()
        actions.minutes.removeAttribute('contenteditable')
    })
    actions.seconds.addEventListener('blur', (event) => {
        let timeSeconds = event.currentTarget.textContent
        timeSeconds = timeSeconds > 59 ? 59 : timeSeconds

        state.seconds = timeSeconds
        

        
        actions.seconds.removeAttribute('contenteditable')
    })
    actions.minutes.addEventListener('keydown', (e) =>{
        if(e.key == "Enter"){
            let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        

        actions.updateDisplay()
        actions.minutes.removeAttribute('contenteditable')
        }
       
    
    actions.seconds.addEventListener('keydown', (e) =>{
        if(e.key == "Enter"){
            let timeSeconds = event.currentTarget.textContent
        timeSeconds = timeSeconds > 59 ? 59 : timeSeconds

        state.seconds = timeSeconds
        

        actions.updateDisplay()
        actions.seconds.removeAttribute('contenteditable')
        }

    } )
    })

},
set2(){
       if(state.minutes < 60){
        let acrescente = state.minutes + 5
        state.minutes = acrescente
        actions.updateDisplay()
        sounds.buttonPressAudio.play()
    }
}
}

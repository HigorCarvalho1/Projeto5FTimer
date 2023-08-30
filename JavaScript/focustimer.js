import {actions} from './action.js'
import { state } from './state.js'
import * as timer from './timer.js'
import * as sounds from './audio.js'


export function countdown() {
    if(!state.isRunning){
        return
    }
    
    let minutes = Number(actions.minutes.textContent)
    let seconds = Number(actions.seconds.textContent)
    seconds--

    
    
    if (seconds < 0) {
        seconds = 59
        minutes--
    } 
    actions.updateDisplay(minutes, seconds)
    
    
    if (minutes < 0){
        actions.reset()
        sounds.kitchenTimer.play()

    }

    setTimeout(() => countdown(), 1000)
}


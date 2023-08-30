import {state} from './state.js'
import {actions} from './action.js'

export function  start (minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    actions.updateDisplay()
}


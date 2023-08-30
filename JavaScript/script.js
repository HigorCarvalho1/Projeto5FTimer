import { Modal } from './modal.js'
import * as timer from './timer.js'
import { actions } from './action.js'
import * as focustimer from './focustimer.js'


timer.start(5,0)


actions.timer.addEventListener('click', actions.set2)
actions.notAudio.addEventListener('click', actions.music)
actions.audio.addEventListener('click', actions.music2)
actions.stop.addEventListener('click', actions.reset)
actions.pause.addEventListener('click',actions.toggleRunning)
actions.play.addEventListener('click',actions.toggleRunning)
actions.pause.addEventListener('click', focustimer.countdown)
actions.play.addEventListener('click',focustimer.countdown)
Modal.sol.addEventListener('click', Modal.open)
Modal.lua.addEventListener('click', Modal.open)




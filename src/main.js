import { changeView } from './view-controler/index.js'


const init = () => {
window.addEventListener('hashchange',() => changeView (window.location.hash))
}


window.addEventListener('load', init);
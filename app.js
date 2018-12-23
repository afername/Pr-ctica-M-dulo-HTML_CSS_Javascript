import { setMenu } from './menu.js'
import { setForm } from './form.js'

function app() {
    setMenu()
    setForm()
}

document.addEventListener('DOMContentLoaded', app)

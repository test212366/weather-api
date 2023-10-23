import {createWeather} from "./model";

document.body.addEventListener('submit', e => {
    if (e.target.classList.contains('form')) {
        e.preventDefault()
        const $input = document.querySelector('.input')
      createWeather($input.value)
    }
})
import {responce, weather} from "./fetch";
import {createElement, customAppendChild} from "./utils";

export async function createWeather(location) {
    await weather(location)
    const c = Math.ceil (responce.main.temp - 273.15)

    const itemW = document.createElement('div'),
        $wrap = document.querySelector('.wrapper'),
        $form = document.querySelector('.form')
    itemW.classList.add('weather')
    customAppendChild([createElement('div', 'location', responce.name),
        createElement('div', 'deg', c),
        createElement('div', 'weatherClear', responce.weather.[0].main)],
        itemW)
    $wrap.appendChild(itemW)
    $form.style.display = 'none'
}
import { getWeather } from "./get_weather.js";
import { setLocalStorage, getLocalStorage } from './util.js';

const city = document.querySelector('.city');
city.value = 'Минск';

window.addEventListener('beforeunload', () => setLocalStorage('city', city));

window.addEventListener('load', () => getLocalStorage('city', city));

city.addEventListener('change', (evt) => {
  getWeather(evt.target.value);
})
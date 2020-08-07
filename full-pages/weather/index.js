const previousWeatherToggle = document.querySelector('.view-more-arrow');
const previousWeather = document.querySelector('.previous-days');

previousWeatherToggle.addEventListener('click', () => {
	previousWeather.classList.toggle('show-weather')
})
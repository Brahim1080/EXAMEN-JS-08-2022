/* eslint-disable no-console */
const HomePage = async () => {
  const main = document.querySelector('main');
  const cities = await renderPlaces();
  main.innerHTML = cities;
  renderRecommended();
};

function placeAsString(places) {
  let string = ' <div class="container text-center"> <h1> Places to visit ! </h1>';

  places?.forEach((place) => {
    string += `<h4>${place.name} </h4>`;
  });
  string += '</div>';
  return string;
}
async function renderPlaces() {
  const placesJSON = await placesFromAPI();

  const placeHtml = placeAsString(placesJSON);
  return placeHtml;
}

async function placesFromAPI() {
  try {
    const response = await fetch('https://places-exam-api.azurewebsites.net/places');
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const allCities = await response.json();
    return allCities;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function placeRecommendedFromAPI() {
  try {
    const response = await fetch('https://places-exam-api.azurewebsites.net/recommended');
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const city = await response.json();
    return city;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function renderRecommended() {
  const main = document.querySelector('main');

  const recommendedPlace = await placeRecommendedFromAPI();

  main.innerHTML += `<h1 class="text-center">Most popular holiday destination ${recommendedPlace.name}</h1>`;
}

export default HomePage;

import { clearPage } from '../../utils/render';
import Places from '../../utils/places';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = renderPlacesToVisit();
};

function renderPlacesToVisit() {
  let placeToVisit = `<div class = "container"> <h1>Places To visit!</h1> `;

  Places?.forEach((place) => {
    placeToVisit += `${place.name}<hr>`;
  });

  placeToVisit += `</div>`;

  return placeToVisit;
}


export default HomePage;

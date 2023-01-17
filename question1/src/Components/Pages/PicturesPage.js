/* eslint-disable eqeqeq */
import { clearPage } from '../../utils/render';
import Places from '../../utils/places';

let currentCityId = 2;

const PicturesPage = () => {
  clearPage();

  renderPicture();
};


function renderPicture() {
  

  const place = Places[currentCityId];

  const  c = `<div class = "container text-center">
    <img src=" ${place.image}" alt="${place.name}" id= "photo">
   
    <div class="my-4" id="name">${place.name}</div>
    <div class = "container mx-5"> 
    <div class="my-4">
        <button class="btn btn-secondary" id="btn-prev">Previous</button>
        
        <button class="btn btn-secondary" id="btn-next">Next</button>
      </div>
    </div>
    </div>
    `;

  const main = document.querySelector('main');
  main.innerHTML = c;
  document.getElementById('btn-prev').addEventListener('click', () => {
    changeId(currentCityId - 1);
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    changeId(currentCityId + 1);
  });


  
  return c;
}
function changeId(index){
  if(index<0 || index > Places.length)
      return;

  currentCityId = index;
  const place = Places[currentCityId];

  document.querySelector('#photo').src = place.image;
  document.querySelector('#name').innerText = place.name;


  document.getElementById('btn-prev').disabled = currentCityId <= 0;
  document.getElementById('btn-next').disabled = currentCityId >= Places.length - 1;



}

export default PicturesPage;

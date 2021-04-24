import './style.css';
import { Layer } from './Layer/index';

console.log('funguju!');

//navigace

const navElement = document.querySelector('#nav-btn');

const navigation = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

document.querySelectorAll('nav a').forEach((element) => {
  element.addEventListener('click', navigation);
});
navElement.addEventListener('click', navigation);

//objednavani

const orderButtonElement = document.querySelector('.order-btn');
const addPrvek = document.querySelector('.drink__cup');
let ordered = false;
orderButtonElement.addEventListener('click', () => {
  if (ordered === false) {
    addPrvek.classList.add('drink__cup--selected');
    orderButtonElement.textContent = 'Zrušit';
    ordered = true;
  } else {
    addPrvek.classList.remove('drink__cup--selected');
    orderButtonElement.textContent = 'Objednat';
    ordered = false;
  }
});

// komponenty

// let layer = Layer({
//   color: '#feeeca',
//   label: 'mléčná pěna',
// });
// layer += Layer({ color: '#fed7b0', label: 'teplé mléko' });
// layer += Layer({ color: '#613916', label: 'espresso' });

//seznam ingredienci

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];
let layer = '';
for (let i = 0; i < layers.length; i++) {
  layer += Layer(layers[i]);
}
const layerElement = document.querySelector('.drink__info');

layerElement.innerHTML += layer;

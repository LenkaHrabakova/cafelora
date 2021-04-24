import './style.css';

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

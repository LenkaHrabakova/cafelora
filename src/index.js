import './style.css';

console.log('funguju!');

const navElement = document.querySelector('#nav-btn');

const navigation = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

document.querySelectorAll('nav a').forEach((element) => {
  element.addEventListener('click', navigation);
});
navElement.addEventListener('click', navigation);

// //objednavani

//   const orderButtonElement = document.querySelector('.order-btn');
//   const addPrvek = document.querySelector('.drink__cup');
//  orderButtonElement.addEventListener('click', () =>
// {
//     addPrvek.classList.add('drink__cup--selected');
//     orderButtonElement.textContent = '' });

import { greet } from './components/utils.js'; // use import instead of require

window.addEventListener('load', () => {
  alert(greet('Alice'));
});
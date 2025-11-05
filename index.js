import { greet } from './components/utils.js';

// Simple navbar styling - no complex logic
import './components/navbar-apply.js';

window.addEventListener('load', () => {
  console.log(greet('Alice'));
});
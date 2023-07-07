import { connectDatabase } from './Connection'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
  <img src="./cat.png">
  <input type="text" id="input-field" placeholder="Bread">
  <button id="add-button">Add to cart</button>
</div>
`
connectDatabase()
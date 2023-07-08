import { app } from './app'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
  <img src="./cat.png">
  <input type="text" id="input-field" placeholder="Bread">
  <button id="add-button">Add to cart</button>
  <ul id="products-list"></ul>
</div>
`
app()
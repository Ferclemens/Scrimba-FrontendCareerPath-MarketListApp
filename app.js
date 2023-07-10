import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { DB_URL } from './env.js'


//database info
const appSettings = {
    databaseURL: DB_URL
}
const initApp = initializeApp(appSettings)
const database = getDatabase(initApp)
const productsInDB = ref(database, 'products')

export function app() {
    
    //references
    const inputFieldEl = document.getElementById("input-field")
    const addButtonEl = document.getElementById("add-button")
    
    //listeners
    addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value
        push(productsInDB, inputValue)
        inputFieldEl.value = ''
        console.log(`${inputValue} added to database`)
    })

    //functions
    getProductsFromDB()

}

function getProductsFromDB() {
    onValue(productsInDB, function(snapshot){
        let productsArray = Object.entries(snapshot.val())
        cleanList()
        productsArray.map((product) => {
            let entrie = product
            appendItemToproductListEl(entrie)
        })
    })
}

function appendItemToproductListEl(item) {
    //references
    const productListEl = document.getElementById('products-list')

    let itemID = item[0]
    let itemProduct = item[1]
    let newEl = document.createElement('li')
    newEl.textContent = itemProduct
    
    newEl.addEventListener('click', function(){
        let productIdFromDB = ref(database, `products/${itemID}`)
        remove(productIdFromDB)
    })
    

    productListEl.append(newEl) 
}

function cleanList() {
    //references
    const productListEl = document.getElementById('products-list')
    productListEl.innerHTML = ''
}

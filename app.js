import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { DB_URL } from './env.js'



export function app() {
    //database info
    const appSettings = {
        databaseURL: DB_URL
    }
    const app = initializeApp(appSettings)
    const database = getDatabase(app)
    const productsInDB = ref(database, 'products')

    //references
    const inputFieldEl = document.getElementById("input-field")
    const addButtonEl = document.getElementById("add-button")

    //listeners
    addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value
        push(productsInDB, inputValue)
        
        console.log(`${inputValue} added to database`)
    })
}
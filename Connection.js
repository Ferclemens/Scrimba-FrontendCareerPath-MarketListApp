import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

export function connectDatabase() {

    const appSettings = {
        databaseURL: "https://realtime-database-ac7e2-default-rtdb.firebaseio.com/"
    }
    const app = initializeApp(appSettings)
    const database = getDatabase(app)
    const productsInDB = ref(database, 'products')

    console.log(app);

    const inputFieldEl = document.getElementById("input-field")
    const addButtonEl = document.getElementById("add-button")

    addButtonEl.addEventListener("click", function() {
        let inputValue = inputFieldEl.value
        push(productsInDB, inputValue)
        
        console.log(`${inputValue} added to database`)
    })
}
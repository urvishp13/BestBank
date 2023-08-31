import { spendingsEl } from "./drawSpendingsData.js"

const closeBtn = get("close-modal-btn")
const modal = document.querySelector(".modal")

// allow Spendings data to be exited out of for phone and tablet views
closeBtn.addEventListener("click", function() {
    // if (window.innerWidth < 906) {
        modal.style.display = "none"
    // }
})

// // if app is in desktop view, have "Spendings" section aka (content in modal) appear
// closeBtn.addEventListener("click", function() {
//     if (window.innerWidth >= 906) {
//         modal.style.display = "inline"
//     }
// })
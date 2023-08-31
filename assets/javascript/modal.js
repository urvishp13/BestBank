const closeBtn = get("close-modal-btn")
const modal = document.querySelector(".modal")

// allow Spendings data to be exited out of for phone and tablet views
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})
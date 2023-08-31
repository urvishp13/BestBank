const closeBtn = get("close-modal-btn")
const modal = get("spendings")
const spendings = modal

if (window.innerWidth < 906) {
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none"
    })
} else {
    spendings.style.display = "inline"
}
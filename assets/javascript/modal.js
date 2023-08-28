const closeBtn = get("close-modal-btn")
const modal = get("spendings")

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})
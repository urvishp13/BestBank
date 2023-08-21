const get = element => document.getElementById(element)

// grab all the elements from the DOM that we'll be interacting with
const open = get("open-burger")
const nav = get("nav")
const close = get("close-burger")

open.addEventListener("click", () => nav.classList.add("open-nav"))
close.addEventListener("click", () => nav.classList.remove("open-nav"))
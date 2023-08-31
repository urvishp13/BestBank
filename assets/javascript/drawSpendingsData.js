import { accounts } from "./accounts.js"
import { accountsEl } from "./drawAccountsInfo.js"

// grab the Spendings section from the DOM
const spendingsEl = get("spendings")

// populate the section with drawn pictographs of "spendings" data from the accounts.js file
    // everytime each account is clicked, draw its spending data to the DOM
accountsEl.querySelectorAll("button")
.forEach(accountBtn => accountBtn.addEventListener("click", function() {
    spendingsEl.style.display = "inline"
    drawSpendingsData(accountBtn)
}))


// grab the space to draw the spendings data
const spendingsDataEl = get("spending-data")

const drawSpendingsData = (accountBtn) => {
    let html = ''
    let spendingBarNum = 0

    // clear the Spendings section of the previous data (if exists)
    spendingsDataEl.innerHTML = ''

    const account = accounts[accountBtn.id-1]

    for (const spending of account.spendings) {
        html += `
            <div id="${++spendingBarNum}" class="spendingBar">
                <span class="category">${spending.category}</span> <span class="spent">${spending.spent}</span>
            </div>
        `
    }

    spendingsDataEl.innerHTML += html

    setWidthOfBars(document.getElementsByClassName("spendingBar"), account)
}

const setWidthOfBars = (spendingBars, account) => {
    let maxSpent = 0

    for (const spending of account.spendings) {
        const spent = Number(spending.spent)

        if (maxSpent < spent) maxSpent = spent
    }

    for (const spendingBar of spendingBars) {
        spendingBar.style.width = `calc( ${ mathFunction( spendingBar.id ) * 100 * 1.5}%)`
        spendingBar.style.maxWidth = "100%"
        spendingBar.style.minWidth = "fit-content"
    }   
}

const mathFunction = x => 1/x

export { spendingsEl }
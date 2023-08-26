import { accounts } from "./accounts.js"

const get = id => document.getElementById(id)

// grab the Accounts section of the page
const accountsEl = get("accounts")
// grab the accounts from the accounts.js file
// write them and their balance to the DOM
let html = ''
for (const account of accounts) {
    html += `
        <button class="btn info-btn" id="${account.id}">
            <span class="title">${account.title}</span> <span class="balance">${account.balance}</span>
        </button>
    `
}
accountsEl.innerHTML += html

// grab the Spendings section of the page
const spendingsEl = get("spendings")
// populate the section with bars from the accounts.js file
    // everytime account is clicked, loop through each spending for the 
    // account and draw it to the DOM
accountsEl.querySelectorAll("button")
    .forEach(accountBtn => accountBtn.addEventListener("click", function() {
        let html = ''
        let spendingBarNum = 0

        // clear the Spendings section of the previous data (if exists)
        spendingsEl.innerHTML = '<h2>Spendings</h2>'

        const account = accounts[accountBtn.id-1]

        for (const spending of account.spendings) {
            html += `
                <div id="${++spendingBarNum}" class="spendingBar">
                    <span class="category">${spending.category}</span> <span class="spent">${spending.spent}</span>
                </div>
            `
        }

        spendingsEl.innerHTML += html

        setWidthOfBars(document.getElementsByClassName("spendingBar"), account)
    }))

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

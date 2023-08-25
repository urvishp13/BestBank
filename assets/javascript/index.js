import { accounts } from "./accounts.js"

const get = id => document.getElementById(id)

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
html = ''
let spendingBarNum = 0
accountsEl.querySelectorAll("button")
    .forEach(accountBtn => accountBtn.addEventListener("click", function() {
        const account = accounts[accountBtn.id-1]

        for (const spending of account.spendings) {
            html += `
                <div id="${spendingBarNum++}" class="spendingBar">
                    <span class="category">${spending.category}</span> <span class="spent">${spending.spent}</span>
                </div>
            `
        }

        spendingsEl.innerHTML += html

        setWidthOfBars(document.getElementsByClassName("spendingBar"), account)
        // reset html to prepare for displaying the spending for the next
        //      accountBtn click
        html = ''
    }))

const setWidthOfBars = (spendingBars, account) => {
    let maxSpent = 0

    for (const spending of account.spendings) {
        const spent = Number(spending.spent)

        if (maxSpent < spent) maxSpent = spent
    }

    for (const spendingBar of spendingBars) {
        spendingBar.style.width = `calc( ${ mathFunction( spendingBars.length - spendingBar.id ) }em + 25%)`
    }
        
}

const mathFunction = x => x**2

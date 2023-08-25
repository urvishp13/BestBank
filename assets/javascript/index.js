import { accounts } from "./accounts.js"

const get = id => document.getElementById(id)

const accountsEl = get("accounts")
// grab the accounts from the accounts.js file
// write them and their balance to the DOM
let html = ''
for (const account of accounts) {
    html += `
        <button class="btn info-btn" id="${account.id}">
            <span>${account.title}</span> <span>${account.balance}</span>
        </button>
    `
}

accountsEl.innerHTML += html

// grab the Spendings section of the page
// populate the section with bars from the accounts.js file
    // everytime account is clicked, loop through each spending for the 
    //      account and draw it to the DOM

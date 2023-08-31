import { accounts } from "./accounts.js"

// grab the Accounts section of the page
const accountsEl = get("accounts")

// grab the accounts data from the accounts.js file
// write the data to the DOM
let html = ''
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
for (const account of accounts) {
    html += `
        <button class="btn info-btn" id="${account.id}">
            <span class="title">${account.title}</span> 
            <span class="balance">${ formatter.format(account.balance) }</span>
        </button>
    `
}

accountsEl.innerHTML += html

export { accountsEl, formatter }
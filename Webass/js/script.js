document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded successfully!");

    // Handle Journal Entry Submission
    const journalForm = document.getElementById("journalForm");
    if (journalForm) {
        journalForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            const date = new Date().toLocaleString();

            const newEntry = { title, content, date };
            let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
            entries.push(newEntry);
            localStorage.setItem("journalEntries", JSON.stringify(entries));

            alert("Journal entry saved!");
            window.location.href = "journal.html";
        });
    }

    // Display Journal Entries
    const journalContainer = document.getElementById("journalEntries");
    if (journalContainer) {
        let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        entries.forEach(entry => {
            let entryDiv = document.createElement("div");
            entryDiv.classList.add("entry");
            entryDiv.innerHTML = `<h3>${entry.title}</h3><p>${entry.content}</p><small>${entry.date}</small>`;
            journalContainer.appendChild(entryDiv);
        });
    }

    // Expense Tracker Logic
    const expenseForm = document.getElementById("expenseForm");
    if (expenseForm) {
        expenseForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const amount = document.getElementById("amount").value;
            const category = document.getElementById("category").value;
            const date = new Date().toLocaleDateString();

            const newExpense = { amount, category, date };
            let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
            expenses.push(newExpense);
            localStorage.setItem("expenses", JSON.stringify(expenses));

            alert("Expense recorded!");
            window.location.reload();
        });
    }

    // Display Expenses
    const expenseContainer = document.getElementById("expenseList");
    if (expenseContainer) {
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.forEach(expense => {
            let expenseDiv = document.createElement("div");
            expenseDiv.classList.add("expense-item");
            expenseDiv.innerHTML = `<strong>${expense.category}</strong>: $${expense.amount} <small>${expense.date}</small>`;
            expenseContainer.appendChild(expenseDiv);
        });
    }
});

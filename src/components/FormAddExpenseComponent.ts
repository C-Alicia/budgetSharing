import { Expense } from "../Expense";
import { ExpenseGroup } from "../ExpenseGroupe";
import { Person } from "../Person";

export class FormAddExpenseComponent {  

    renderAddExpense() {

        let btnAddExpense = document.getElementById("btnAddExpense") as HTMLButtonElement;
        let personInput = document.getElementById("person") as HTMLInputElement;
        let nameExpenseInput = document.getElementById("nameExpense") as HTMLInputElement;
        let amountInput = document.getElementById("amount") as HTMLInputElement;
        let expenseTab: Expense[] = [];
        let persons: Person[] = [];
        /* let groupExpense: ExpenseGroup[] = []; */


        btnAddExpense?.addEventListener('click', () => {
            const personValue = personInput.value;
            const nameExpense = nameExpenseInput.value;
            const amount = amountInput.value;

            // Créez une nouvelle instance de Person si elle n'existe pas encore
            let personPerson = persons.find(person => person.name === personValue);
            if (!personPerson) {
                const idPerson = persons.length;
                personPerson = new Person(idPerson, personValue);
                persons.push(personPerson);
            }

            const id = expenseTab.length;
            const expenses = new Expense(id, nameExpense, parseFloat(amount), personPerson, false);
            expenseTab.push(expenses);

            // Réinitialisez les champs d'entrée après l'ajout
            nameExpenseInput.value = "";
            amountInput.value = "";
            personInput.value = "";

            console.log("La dépense a été ajoutée avec succès.");
            console.log(expenseTab);
            console.log(personPerson);
        });
    }
   
   /*  addExpense(expense: Expense) {
        this.expensesTab.push(expense);
        console.log(expense);
    }; */


}









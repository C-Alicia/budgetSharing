import { Expense } from "../Expense";
import { ExpenseGroup } from "../ExpenseGroupe";
import { Person } from "../Person";

export class FormGrpAddGrpComponent {

    renderAddGrpExpense() {

        let groupExpense: ExpenseGroup[] = [];
        let expenseTab: Expense[] = [];
        let btnAddGrp = document.getElementById("addGrpExpense");
        let grpExpenseName = (<HTMLInputElement>document.getElementById("grpExpense")).value;

        btnAddGrp!.addEventListener('click', () => {

            if (grpExpenseName === null) {
                alert("Le champ Name est vide!");
            }
            else {
                const idGrp = groupExpense.length;
                const groupExpenses = new ExpenseGroup(idGrp, grpExpenseName, []);
                groupExpense.push(groupExpenses);

                expenseTab

                alert('Votre groupe ' + grpExpenseName + ' a été créee ');
                console.log(groupExpense);
            }
        })

        for (const group of groupExpense) {
            const groupName = group.nameGrp;
            console.log(`Groupe de dépenses : ${groupName}`);
        }
    }
}





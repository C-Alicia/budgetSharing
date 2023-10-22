import { Expense } from "../Expense";
import { ExpenseGroup } from "../ExpenseGroupe";


export class FormShowExpenseComponent {

    renderShowExpense(){

        let groupList = document.getElementById("list");
        let expenseTab: Expense[] = [];
        let groupExpense: ExpenseGroup[] = [];

        
        groupList?.innerHTML 

    
        for (const group of groupExpense) {
            const groupName = group.nameGrp;
    
            console.log(`Groupe de dépense : ${groupName}`);
        }
    
        for (const expenses of expenseTab) {
            const expenseId = expenses.id;
            const expenseName = expenses.name;
            const expenseAmount = expenses.amount;
    
    
            
            console.log(`Dépense : ${expenseName}, Montant : ${expenseAmount}`);
        }







    }



}
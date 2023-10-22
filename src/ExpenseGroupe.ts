import { Expense } from "./Expense";

export class ExpenseGroup {
    private id: number;
    public nameGrp: string;
    private expensesTab: Expense[];

    constructor(id: number, nameGrp: string, expensesTab: Expense[]) {
        this.id = id;
        this.nameGrp = nameGrp;
        this.expensesTab = expensesTab;
    }

    
    addGrpExpense(){
        let groupListExpense: ExpenseGroup[] = [];
        const id = groupListExpense.length;
        const group = new ExpenseGroup(id, this.nameGrp, []);
        groupListExpense.push(group);
        console.log(groupListExpense);
    }
    
    addExpense(expense: Expense) {
        this.expensesTab.push(expense);
        console.log(expense);
    }

    updateGroupList(){
        
    }

    
}
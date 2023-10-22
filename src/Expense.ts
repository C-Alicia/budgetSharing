
import { Person } from "./Person";

export interface ExpenseInterface {
    id: number;
    name: string;
    amount: number;
    createBy : Person;
    disabled: boolean;
}

export class Expense implements ExpenseInterface  {
    id: number;
    name: string;
    amount: number;
    createBy: Person;
    disabled: boolean;

    constructor(id: number, name: string, amount: number, createBy: Person, disabled:boolean) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.createBy = createBy;
        this.disabled = disabled;
    }

    getName(): string {
        return this.name;
    }

    getAmount(): number {
        return this.amount;
    }

    getCreateBy(): Person {
        return this.createBy;
    }

    disableExpense() {
        this.disabled = true;
    }

    isDisabled(): boolean {
        return this.disabled;
    }

    
    
}
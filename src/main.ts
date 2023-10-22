import { ExpenseGroup } from './ExpenseGroupe';
import { Expense } from './Expense';
import { Person } from './Person';
import './style.css'
//import { FormGrpComponent } from './components/FormGrpAddComponent';
//import { ExpenseGroup } from './ExpenseGroupe'


// ajouter un groupe de dépense
let btnAddGrp = document.getElementById("addGrpExpense");
let groupExpense: ExpenseGroup[] = [];
let persons: Person[] = [];


btnAddGrp!.addEventListener('click', () => {

    let grpExpenseName = (<HTMLInputElement>document.getElementById("grpExpense")).value;
    if (grpExpenseName.trim() === "") {
        alert("Le champ est vide!");
    }
    else {
        const id = groupExpense.length;
        const groupExpenses = new ExpenseGroup(id, grpExpenseName, []);
        groupExpense.push(groupExpenses);

        alert('Votre groupe ' + grpExpenseName + ' a été créee ');
        console.log(groupExpense);
    }

    updateGroupList();

    function updateGroupList() {
        const groupList = document.getElementById("list");
        const ul = document.createElement('ul');
        groupList.innerHTML = '';  // Effacez le contenu précédent

        for (const item of groupExpense) {
            const li = document.createElement('li');
            li.textContent = item.nameGrp;
            ul.appendChild(li);
        }

        groupList.appendChild(ul);
        console.log();
    }
});

// ajouter une dépense liée à groupe
let btnAddExpense = document.getElementById("btnAddExpense") as HTMLButtonElement;
let personInput = document.getElementById("person") as HTMLInputElement;
let nameExpenseInput = document.getElementById("nameExpense") as HTMLInputElement;
let amountInput = document.getElementById("amount") as HTMLInputElement;
let expenseTab: Expense[] = [];

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

//lister la liste de groupe de dépense :





/*    for (const group of groupExpense) {
       const li = document.createElement('li');
       li.textContent = group.nameGrp;
       ul.append(li);
       console.log(ul);
       console.log(group.nameGrp);
   }
   
   groupList.append(ul);
   console.log(groupList); */








for (const expenses of expenseTab) {
    const expenseId = expenses.id;
    const expenseName = expenses.name;
    const expenseAmount = expenses.amount;
    console.log(`Dépense : ${expenseName}, Montant : ${expenseAmount}`);
}


/*  const listCreator = (expenseName, expenseValue) => {
     let sublistContent = document.createElement("div");
     sublistContent.classList.add("sublist-content", "flex-space");
     list.appendChild(sublistContent);
     sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
     let editButton = document.createElement("button");
     editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
     editButton.style.fontSize = "1.2em";
     editButton.addEventListener("click", () => {
         modifyElement(editButton, true);
     });




     let deleteButton = document.createElement("button");
     deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
     deleteButton.style.fontSize = "1.2em";
     deleteButton.addEventListener("click", () => {
         modifyElement(deleteButton);
     });
     sublistContent.appendChild(editButton);
     sublistContent.appendChild(deleteButton);
     document.getElementById("list").appendChild(sublistContent);
 };
*/


















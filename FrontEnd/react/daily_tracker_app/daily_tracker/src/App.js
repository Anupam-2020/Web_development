import React, {useState} from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";


let dummyExpense = [
    {
        id: 'e1',
        title: 'Electricity rent',
        amount: 2000,
        date: new Date(2022, 6, 12)
    },
    {
        id: 'e2',
        title: 'Funds',
        amount: 15000,
        date: new Date(2022, 5, 12)
    }
]

function App() {
    // let expenseDate = new Date(2022,3,28);
    // let expenseTitle = "School Fee";
    // let expenseAmount = 300;

    // let arrayInfo = [
    //     {
    //         id: 'e1',
    //         title: 'Electricity rent',
    //         amount: 2000,
    //         date: new Date(2022, 6, 12)
    //     },
    //     {
    //         id: 'e2',
    //         title: 'Funds',
    //         amount: 15000,
    //         date: new Date(2022, 5, 12)
    //     }
    // ]

    const [expenses, setExpenses] = useState(dummyExpense);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
        console.log(expense)
    };


    return (
        <div>
            <h2>Let's get started.</h2>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;
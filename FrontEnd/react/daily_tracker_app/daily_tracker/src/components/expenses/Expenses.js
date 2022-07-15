import React from 'react';
import './Expenses.css';
import ExpemseItem from './ExpenseItem';
import Card from '../ui/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {
                props.item.map(
                    expense => (
                        <ExpemseItem 
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                        />
                    )
                )
            }

            {/* <ExpemseItem
                date = {props.item[0].date}
                title = {props.item[0].title}
                amount = {props.item[0].amount} />
            <ExpemseItem
                date = {props.item[1].date}
                title = {props.item[1].title}
                amount = {props.item[1].amount} /> */}
        </Card>
    );
}

export default Expenses;
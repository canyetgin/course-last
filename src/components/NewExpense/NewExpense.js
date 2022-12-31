import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEntering, setisEntering] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }
  const enteringHandler = () => {
    if (isEntering) {
      setisEntering(false)
    } else {
      setisEntering(true)
    }
  }
  return (
    <div className="new-expense">
      {isEntering ? (
        <ExpenseForm
          entering={enteringHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={enteringHandler}>AddNew Expense</button>
      )}
    </div>
  )
}

export default NewExpense

import React from 'react';
import './ExpenseItem.css';
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
  return (
    <li className='item'>
      <div className='info'>
          <span className='expense'>{expense.charge}</span>
          <span className='amount'>{expense.amount}</span>
      </div>
      <div>
          <button className='edit-btn' onClick={() => {handleEdit(expense.id)}}><MdEdit /></button>
          <button className='clear-btn' onClick={() => handleDelete(expense.id)}><MdDelete /></button>
      </div>
    </li>
  )
}

export default ExpenseItem
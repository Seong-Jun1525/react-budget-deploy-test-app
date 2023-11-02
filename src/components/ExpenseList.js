import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {

  // 2번 출력됨 이유는 index.js에서 <App />이
  // <React.StricMode></React.StricMode>에 감싸져 있기 때문
  // 이거 지우면 한번만 출력됨
  return (
    <>
      <ul className='list'>
          {expenses.map(expense => {
              return (
                  <ExpenseItem 
                      expense={ expense }
                      key={expense.id}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                  />
              )
          })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>목록 지우기<MdDelete className="btn-icon"/></button>
      )}
    </>
  )
}

export default ExpenseList
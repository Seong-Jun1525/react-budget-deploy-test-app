import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import {MdDelete} from 'react-icons/md'

class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpense)
    // 2번 출력됨 이유는 index.js에서 <App />이
    // <React.StricMode></React.StricMode>에 감싸져 있기 때문
    // 이거 지우면 한번만 출력됨
    return (
      <>
        <ul className='list'>
            {this.props.initialExpense.map(expense => {
                return (
                    <ExpenseItem 
                        expense={ expense }
                        key={expense.id}
                        handleDelete={this.props.handleDelete}
                    />
                )
            })}
        </ul>
        <button className='btn'>목록 지우기<MdDelete className="btn-icon"/></button>
      </>
    )
  }
}

export default ExpenseList
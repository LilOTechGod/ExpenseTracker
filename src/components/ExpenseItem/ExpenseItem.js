import React from 'react'
import Card from '../UI/Card'
import './ExpenseItem.css'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';

export const ExpenseItem = (props) => {
    //! Regular JavaScript
    // const  [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // }

    // setTitle((prevState) => {
    //     return {...prevState, title: event.target.value } ;
    // })

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  )
}

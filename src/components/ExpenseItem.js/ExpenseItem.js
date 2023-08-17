import React from 'react'
import './ExpenseItem.css'
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import {useState} from 'react';

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
    <div className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}

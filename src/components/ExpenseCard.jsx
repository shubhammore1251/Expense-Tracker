import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/action/expenses';

const ExpenseCard = ({ item, notifySuccess }) => {
    
    /*using Moment for calculate exact seconds minutes from the given date time*/
    const time = moment(item.createdAt).fromNow();

    const dispatch = useDispatch();
    
    /*Function to handle delete change*/
    const handleDelete = ()=>{
        dispatch(deleteExpense(item));
        notifySuccess();
    }

    return (
        <div className='card' style={{ borderRight: `6px solid ${item.category.color}` }} >

            <div className="card-image-container">
                <img src={item.category.icon} alt={item.category.title} className='card-image' />
            </div>

            <div className="card-info">
                <label className='card-title'>{item.title}</label>
                <label className='card-time'>{time}</label>
            </div>

            <div className="card-right-data">
                <div>
                    <label className='card-amount'>₹ {item.amount}</label>
                </div>

                <div className="delete-icon" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    )
}

export default ExpenseCard

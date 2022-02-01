import React from 'react'
import { useSelector } from 'react-redux';
import ExpenseCard from './ExpenseCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const ExpenseList = () => {
    
    /*Importing list array from our redux store */
    const { expenselist: list, query} = useSelector(state => state.expenses);
    
    /*Filtering the array to make it searchable*/
    const filterList = list.filter((item) => {return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;});

    const notifySuccess = () => toast.success("Expense Deleted");

    return (
        <div className='expense-list'>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />

            
            {filterList.length?filterList.map((item)=>(
                <ExpenseCard item={item} key={item.createdAt} notifySuccess={notifySuccess}/>
            )):
            <div className="empty-state">
                <img src={require('../assests/emptylist.jpg')} alt="EmptyList"  className='empty-image'/>
                <label>Your Expense List is Empty</label>
            </div>
            }
            
            {filterList.length?<Footer/> : null}


        </div>
    )
}

export default ExpenseList

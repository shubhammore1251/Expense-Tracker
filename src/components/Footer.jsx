/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    
    /*Using Expenses list array from reducer*/
    const { expenselist: list } = useSelector(state => state.expenses);
    
    /*Empty array for storing the String amount*/
    let amountArray = [];
    
    for (let index = 0; index < list.length; index++) {
        let amount = list[index].amount;
        amountArray.push(amount);
    }
    
    /*Coverts string array to Number */
    let amountList = amountArray.map(Number);
    let sum = 0;
    
    /*For loop for adding the Total Expense*/
    amountList.forEach(x => {
        sum += x;
    });
    

    /*Function if anyone enter invalid amount */
    const notifyError = () => toast.warning("Please Enter valid Amount To See The Total");
    
    useEffect(() => {
        /*check to show alert for NaN*/
        if (isNaN(sum)) {
            notifyError();
            return;
        }
    }, [])
    

    return (
        
        <>  
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
        />
        
        {/*Checking if total is not a NaN then only showimg the total*/}
        {!isNaN(sum)?
        <div className='footer-container'>
            
                <div className="footer">

                    <div className="inner-text">Your Total Expenses are:</div>
                

                    <div className="inner-text">₹ {sum.toFixed(2)}</div>
                    
                </div>
            
        </div>
        :null}
        

        </>
    )
}

export default Footer

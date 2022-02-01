import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../redux/action/expenses';

const TopFold = () => {
    
    /*State for handling search box query*/
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    /*handling query after change in state of search box query*/
    const handleQuery = (e) =>{
       setQuery(e.target.value);
       dispatch(searchExpense(e.target.value));
    }

    return (
        <div className="topfold">

            {/*If path is home it will display search box and add expense button and if route is not home and it will display back and cancel button*/}
            { window.location.pathname==='/'?(
            <div className="home-topfold">
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" className="search-text" value={query} placeholder='Type to Search for Expenses' onChange={ (value)=> handleQuery(value) }/>
                </div>
 
                <Link to="/add-expense" className='link'>
                    <div className="add-button">
                    <i className="fas fa-plus-circle"></i>
                    <label className='label'>Add</label>
                    </div>
                </Link>
            </div> )
            :
            ( <div className='add-topfold'>
                  
                <Link to="/" className='link'>
                    <div className='add-topfold-button button1'>
                        <i className="fas fa-arrow-circle-left"></i>
                        <label className='label'>Back</label>
                    </div>
                </Link>
               
               <Link to="/" className='link'>
                    <div className='add-topfold-button button2'>
                        <i className="fas fa-times-circle"></i>
                        <label className='label'>Cancel</label>
                    </div>
               </Link>
                
                  
              </div>
            )}
        </div>
    )
}

export default TopFold

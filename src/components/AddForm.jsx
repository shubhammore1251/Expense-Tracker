import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/action/expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SucessModal from './SucessModal';


const AddForm = () => {
    
    /*States for addform*/
    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState("");

    const [category, setCategory] = useState();

    const [categoryOpen, setCategoryOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);


    /*To CHANGE the Styles of input fields while typing in input feild*/
    const [titleStyle, setTitleStyle] = useState("form-input-styles");

    const [amountStyle, setAmountStyle] = useState("form-input-styles");

    const [categoryStyle, setCategoryStyle] = useState("category-dropdown-color");


    
    const dispatch = useDispatch();
    
    /*FUNCTION for changing styles */
    const changeStyle = () => {
        
        if(title!==""){
          setTitleStyle("form-input-styles2"); 
          return;
        }
        setTitleStyle("form-input-styles");
    }; 

    const changeStyle2=()=>{

        if(amount!==""){
            setAmountStyle("form-input-styles2"); 
            return;
        }
        setAmountStyle("form-input-styles");
    }
   
    const changeStyle3=()=>{

        if(category!=="Category"){
            setCategoryStyle("category-dropdown-color2"); 
            return;
        }
        setCategoryStyle("category-dropdown-color");
    }

    
    /*Category array which includes our drop-down categories list*/
    const categories = [
        {
            id: 1,
            title: 'Education',
            icon: require('../assests/education.png'),
            color: 'black',

        },
        {
            id: 2,
            title: 'Bills',
            icon: require('../assests/bills.png'),
            color: 'red',

        },
        {
            id: 3,
            title: 'Food',
            icon: require('../assests/food.png'),
            color: 'brown',

        },
        {
            id: 4,
            title: 'Investements',
            icon: require('../assests/investment.png'),
            color: 'green',

        },
        {
            id: 5,
            title: 'Movie and Subsriptions',
            icon: require('../assests/movie.png'),
            color: 'purple',

        },
        {
            id: 6,
            title: 'Gym and Fitness',
            icon: require('../assests/gym.png'),
            color: 'orange',

        },
        {
            id: 7,
            title: 'Shopping',
            icon: require('../assests/shopping.png'),
            color: '#210b63',

        },
        {
            id: 8,
            title: 'Transport/Taxi',
            icon: require('../assests/taxi.png'),
            color: 'yellow',

        },
        {
            id: 9,
            title: 'Travel',
            icon: require('../assests/travel.png'),
            color: 'blue',

        },
        {
            id: 10,
            title: 'Other',
            icon: require('../assests/other.png'),
            color: '#bd0d5f',

        }

    ]
   

    /*Fuction to handle state change and input field data */

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    const handleCategory = (catg) => {
        setCategory(catg);
        changeStyle3();
        setCategoryOpen(false);
    }
    
    /*Fucntion to validate data and dispatch it to reducer*/
    const handleSubmit = () => {
        if (title === '' || (amount === '' || amount ===0) || !category) {

            const notify = () => toast.error("Please Fill Valid Data");
            notify();
            return;
        }

        const data = {
            title,
            amount,
            category,
            createdAt: new Date()

        };

        dispatch(addExpense(data));
        setIsModalOpen(true);
    }


    return (
        <div className='add-form'>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />

            <SucessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            <div className="form-item">
                <label>Title</label>
                <input className={titleStyle} placeholder='Where did you Spend?' value={title} onChange={(e) => handleTitle(e)} onKeyUp={changeStyle}/>
            </div>

            <div className="form-item">
                <label>Amount ₹ (Please Enter Amount in Number Format)</label>
                <input placeholder='Enter the Amount' className={`amount-input ${amountStyle}`} value={amount} onChange={(e) => handleAmount(e)} onKeyUp={changeStyle2}/>
            </div>

            <div className="category-container">
                <div className="category">
                    <div className={`category-dropdown ${categoryStyle}`}>
                        <label>{category ? category.title : "Category"}</label>
                        <i className="fas fa-caret-down" onClick={() => setCategoryOpen(!categoryOpen)}></i>
                    </div>

                    {categoryOpen &&
                        <div className="category-container2">
                            {categories.map((catg) => (
                                <div className='category-item' style={{ borderRight: `5px solid ${catg.color}` }} key={catg.id} onClick={() => handleCategory(catg)}>
                                    <label>{catg.title}</label>
                                    <img src={catg.icon} alt={title} />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>

            <div className="form-add-btn">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fas fa-hand-point-up"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm

const initialist = ()=>{
    const list = localStorage.getItem("expense-list");

    let expenses=[];

    if(list){
        expenses= JSON.parse(list);
    }
    return expenses;
};


const initialState = {

    expenselist: initialist(),
    query: "",
};


export const expenseReducer=(state=initialState, action)=>{
     

    switch(action.type){

        
        case "ADD_EXPENSE":{

            localStorage.setItem("expense-list", JSON.stringify([...state.expenselist, action.data]))
        
            return{
                ...state,
                expenselist: [...state.expenselist, action.data]
            }
        }
        
        case "DELETE_EXPENSE":{

            const {data} = action;

            const updatedList = state.expenselist.filter((item) => item.createdAt!== data.createdAt);

            localStorage.setItem("expense-list", JSON.stringify(updatedList));

            return{
                ...state,
                expenselist: updatedList
            }
        }
        
        case "SEARCH_EXPENSE":{

            const {query} = action;

            return{
                ...state,
                query
            }
        }

        default:
            return state;
    }
}
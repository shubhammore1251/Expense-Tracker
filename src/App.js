import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddExpense from './components/AddExpense';
function App() {
  return (
    <>
     <Router>
     <Header/>

     <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/add-expense' element={<AddExpense/>}></Route>
     </Routes>

     </Router>
    </>
    
  );
}

export default App;

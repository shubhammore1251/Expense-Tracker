import React from 'react'
import ExpenseList from './ExpenseList'
import TopFold from './TopFold'

const Home = () => {
    return (
        <div className='home'>
            <TopFold/>
            <ExpenseList/>
        </div>
    )
}

export default Home

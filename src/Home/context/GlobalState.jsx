/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"
import AppReducer from './AppReducer'

//init state
const initialState = {
    // transactions: [
    //     {id: 1, text: 'Test', amount: -100},
    //     {id: 2, text: 'Test', amount: 200}
    transactions: Array.from({ length: 1000 }, (_, index) => ({
        id: index + 1,
        text: 'Test ' + index,
        amount: -100,
      }))        
    
}


// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
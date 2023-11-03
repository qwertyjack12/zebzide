/* eslint-disable react/prop-types */
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({ transaction }) => {
    const text = transaction.text
    const sign = transaction.amount < 0 ? '-' : '+'
    const amount = transaction.amount
    const id = transaction.id

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}{Math.abs(amount)}$</span><button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
        </li>
      )
}

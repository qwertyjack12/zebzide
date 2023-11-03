import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../context/GlobalState"
import { Transaction } from "./Transaction"

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  const [visibleTransactions, setVisibleTransactions] = useState(3)

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      // Пользователь достиг конца страницы, добавляем дополнительные элементы
      setVisibleTransactions(prevVisibleTransactions => prevVisibleTransactions + 10)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <h3 className="h3 h">History</h3>
      <ul className="list">
        {transactions.slice(0, visibleTransactions).map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </>
  )
}
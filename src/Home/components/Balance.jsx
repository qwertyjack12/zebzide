import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(
    transaction => transaction.amount
  )
  const total = amounts.reduce(
    (acc, item) => (acc += item), 0
  ).toFixed(2)

  return (
    <>
        <h3 className="h3 h">Your Balance:</h3>
        <h1 className="h1 h" id="balance">${total}</h1>
    </>
  )
}

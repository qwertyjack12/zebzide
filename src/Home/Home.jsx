import { AddTransaction } from "./components/AddTransaction"
import { Balance } from "./components/Balance"
import { Header } from "./components/Header"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import Button from "./components/Button"

import { GlobalProvider } from "./context/GlobalState"

import '../styles/Home.css'

function Home() {


  return (
    <GlobalProvider>
        <Button/>
        <div className="body">
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    </GlobalProvider>
  )
}

export default Home

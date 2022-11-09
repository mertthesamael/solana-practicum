import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import * as web3 from '@solana/web3.js'
import axios from 'axios';
function App() {
  const [address, setAddress] = useState()
  const [balance, setBalance] = useState()
  const [isExecutable, setIsExecutable] = useState()

  const addressSubmittedHandler = (e) => {
    e.preventDefault()
    const address = e.target.address.value
    
    
    const key = new web3.PublicKey(address);
    
  
    setAddress(key.toBase58())
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
    console.log(connection.getAccountInfo(key).then(res=> setIsExecutable(res.executable)))
    connection.getBalance(key).then(balance => {
      setBalance(balance / web3.LAMPORTS_PER_SOL)
    })
    
  }
  return (
    <div className="App">
      
      <h1> Wallet Balance : {balance}</h1>
      <h1>{isExecutable?"Executable" : "Not Executable"}</h1>
      <form onSubmit={addressSubmittedHandler}>
        <input name='address' type='text'  placeholder='address'></input>
        <input  type='submit'  placeholder='address'></input>
      </form>
    </div>
  );
}

export default App;

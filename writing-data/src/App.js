import logo from './logo.svg';
import './App.css';
import * as web3 from '@solana/web3.js'
function App() {
// Create a new keypair
const ownerKeypair = web3.Keypair.generate()

// Get the public key (address)
const publicKey = ownerKeypair.publicKey

// Get the secret key
const secretKey = ownerKeypair.secretKey
  const buttonHandler = () => {
    console.log(publicKey, secretKey)
  }

  //Simple tsx flow ;

  // const transaction = new Transaction()

  // const sendSolInstruction = SystemProgram.transfer({
  //     fromPubkey: sender,
  //     toPubkey: recipient,
  //     lamports: LAMPORTS_PER_SOL * amount
  // })
//   const signature = sendAndConfirmTransaction(
//     connection,
//     transaction,
//     [senderKeypair]
// )
  //transaction.add(sendSolInstruction)


  return (
    <div className="App">
     <button onClick={buttonHandler} style={{background:'transparent', padding:'1rem'}}>PRESS ME</button>
    </div>
  );
}

export default App;

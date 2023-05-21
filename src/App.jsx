import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import QuoteBox from './components/QuoteBox'
import { getRandom } from './utils/random'

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
  }

  return (
    <main className="app">
      <div className='app__cover'></div>
      <div className='bg__image'>
        <img src={quote.image} alt="" />
      </div>
      <section className="app__container">
        <h1>AnimeSoul</h1>

        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />

        <footer>
          <h3>Author: {quote.author}</h3>
        </footer>
      </section>
    </main>
  )
}

export default App

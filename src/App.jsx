import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import QuoteBox from './components/QuoteBox'
import { getRandom } from './utils/random'
import Footer from './components/Footer'

const bgImages = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8']
const bxShadows = ['bx1', 'bx2', 'bx3', 'bx4', 'bx5']

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))
  const [bxShadow, setBxShadow] = useState(getRandom(bxShadows))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
    setBxShadow(getRandom(bxShadows))
  }

  return (
    <main className={`app ${bgImage}`}>
      <div className="app__cover"></div>
      <section className="app__container">
        <h1>AnimeSoul</h1>

        <div className={`phrase__container ${bxShadow}`}>
          <img src={quote.image} alt="" />
          <QuoteBox
            handleChangeQuote={handleChangeQuote}
            phrase={quote.phrase}
          />
        </div>
      </section>
        <Footer 
        author={quote.author}/>
    </main>
  )
}

export default App

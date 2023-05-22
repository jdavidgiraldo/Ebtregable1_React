import React from 'react'
import './styles/QuoteBox.css'

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className="quoteBox">
      <article className="quoteBox__phrase">
        <p>{phrase}</p>
      </article>
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
        Next Character
        <span></span>
        <span></span>
      </button>
    </section>
  )
}

export default QuoteBox

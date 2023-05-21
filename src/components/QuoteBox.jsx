import React from 'react'

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className="quoteBok">
      <button className="quoteBox__btn" onClick={handleChangeQuote}>
        Show Character
      </button>
      <article className="quoteBox__phrase">
        <p>{phrase}</p>
      </article>
    </section>
  )
}

export default QuoteBox

import React from 'react'

const SpanMaker = ({ num }) => {
  let spans = []
  
  for (let i = 0; i < num; i++) {
    spans.push(<span key={i}></span>)
  }
  return spans
}

export default SpanMaker


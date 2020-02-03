const SpanMaker = (num = 1, callback) => {
  let spans = []
  
  for (let i = 0; i < num; i++) {
    spans.push(callback(i))
  }
  return spans
}

export default SpanMaker


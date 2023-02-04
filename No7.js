// 7- Convert this async function to async/await
// ```js
// getQuote().then((quote) => {
//   console.log(quote);
// }).catch(function(err) {
//   console.log(err);
// });
// // after this line,
//
// ```

const getQuote = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000)
  });
  const result = await promise
  return result
}

const getAsyncQuote = async () => {
  try {
    const quote = await getQuote()
    await console.log(quote)
  } catch (err) {
    console.log(err)
  }
}

getAsyncQuote()

// #### 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.
//
// ```
// https://www.boredapi.com/api/activity
// ```
//
// The above API returns what to do when you are bored.
//
//

const fetchBoredapi = async () => {
  const rawResponse = await fetch('https://www.boredapi.com/api/activity', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return await rawResponse.json();
}

const myPromise = new Promise((resolve) => resolve(fetchBoredapi()));

myPromise
  .then((value) => console.log('Rusult:' + JSON.stringify(value)))
  .catch((err) => console.log('Failed:' + err));

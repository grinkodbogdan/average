

const calculate = function() {
  let totalSum = 0;
  const inputs = document.getElementsByTagName('select');
  for(const i of inputs) {
    totalSum += parseInt(i.value);
  }
 let inputsCnt = inputs.length;
 let average = (totalSum / inputsCnt);
 let message = '';
 const resultElement = document.getElementById('result');
 if (average === 6) {
   message = ' nie jest mozliwe!';
 } else if (average >= 4.75) {
   message = ' Czerwony pasek!'
 } else if (average < 4.75) {
   message = ' Nie dostaniesz w tym roku czerwonego paska!'
 }

 resultElement.innerText = average.toFixed(2) + message;
}
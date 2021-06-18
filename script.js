let zachowanieElement;

const calculate = function() {
  zachowanieElement = document.getElementById('zachowanie');
  let totalSum = 0 ;
  const inputs = document.getElementsByTagName('select');
  for(const i of inputs) {
    totalSum += parseInt(i.value);
  }
 let inputsCnt = inputs.length - 1;
 let average = ((totalSum - parseInt(zachowanieElement.value)) / inputsCnt);
 let message = '';
 const resultElement = document.getElementById('result');
 if (average === 6) {
   message = ' nie jest mozliwe!';
 } else if (average >= 4.75 && parseInt(zachowanieElement.value) > 4) {
   message = ' Czerwony pasek!'
 } else if (average < 4.75 || parseInt(zachowanieElement.value) < 5) {
   message = ' Nie dostaniesz w tym roku czerwonego paska!'
 }

 resultElement.innerText = average.toFixed(2) + message;
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
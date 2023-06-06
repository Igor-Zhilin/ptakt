const dateForm = document.getElementById('date-form');
const dateInfo = document.getElementById('date-info');

dateForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const response = await fetch(`http://numbersapi.com/${month}/${day}/date`);
  const data = await response.text();
  dateInfo.innerHTML = data;
});
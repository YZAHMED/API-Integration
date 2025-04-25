// Simple Monty Hall Simulation
const app = document.getElementById('app');
app.innerHTML = `
  <p>Pick a door:</p>
  <button onclick="choose(1)">Door 1</button>
  <button onclick="choose(2)">Door 2</button>
  <button onclick="choose(3)">Door 3</button>
  <p id="result" style="margin-top:1rem;"></p>
`;

function choose(pick) {
  const prizeDoor = Math.floor(Math.random() * 3) + 1;
  const result = document.getElementById('result');
  if (pick === prizeDoor) {
    result.textContent = 'Congratulations! You won the prize behind door ' + pick + '!';
  } else {
    result.textContent = 'Sorry! The prize was behind door ' + prizeDoor + '.';
  }
}

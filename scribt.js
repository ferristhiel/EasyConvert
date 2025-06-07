<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Einheitenumrechner</title>
    <style>
        body.dark {
            background-color: #121212;
            color: #ffffff;
        }
        /* Fügen Sie hier Ihre weiteren Stile hinzu */
    </style>
</head>
<body>
    <h1>Einheitenumrechner</h1>
    <label for="inputValue">Wert:</label>
    <input type="text" id="inputValue">
    
    <label for="fromUnit">Von:</label>
    <select id="fromUnit">
      <option value="mm">Millimeter</option>
      <option value="cm">Zentimeter</option>
      <option value="dm">Dezimeter</option>
      <option value="m">Meter</option>
      <option value="km">Kilometer</option>
    </select>
    
    <label for="toUnit">Nach:</label>
    <select id="toUnit">
      <option value="mm">Millimeter</option>
      <option value="cm">Zentimeter</option>
      <option value="dm">Dezimeter</option>
      <option value="m">Meter</option>
      <option value="km">Kilometer</option>
    </select>
    
    <button onclick="convert()">Umrechnen</button>
    <button onclick="resetFields()">Zurücksetzen</button>
    
    <h2>Ergebnis:</h2>
    <p id="result"></p>

    <label for="toggleTheme">Dunkles Design:</label>
    <input type="checkbox" id="toggleTheme">

    <script>
function convert() {
  const value = parseFloat(document.getElementById('inputValue').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  if (isNaN(value)) {
    document.getElementById('result').innerText = "Bitte Zahl eingeben!";
    return;
  }
  const factors = {
    mm: 0.001,
    cm: 0.01,
    dm: 0.1,
    m: 1,
    km: 1000
  };
  const inMeter = value * factors[from];
  const result = inMeter / factors[to];
  const formatted = parseFloat(result.toFixed(2)).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  document.getElementById('result').innerText = `${value} ${from} = ${formatted} ${to}`;
}

function resetFields() {
  document.getElementById('inputValue').value = '';
  document.getElementById('result').innerText = '';
}

window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggleTheme');
  if (toggle) {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }
});
    </script>
</body>
</html>
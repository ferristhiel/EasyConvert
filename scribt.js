function convert() {
  const value = parseFloat(document.getElementById('inputValue').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  if (isNaN(value)) {
    document.getElementById('result').innerText = "Bitte Zahl eingeben!";
    return;
  }
  // Umrechnungsfaktoren zu Meter
  const factors = {
    mm: 0.001,
    cm: 0.01,
    dm: 0.1,
    m: 1,
    km: 1000
  };
  // Immer zuerst in Meter umrechnen, dann in die Ziel-Einheit
  const inMeter = value * factors[from];
  const result = inMeter / factors[to];
  document.getElementById('result').innerText = `${value} ${from} = ${result.toFixed(6)} ${to}`;
}

function resetFields() {
  document.getElementById('inputValue').value = '';
  document.getElementById('result').innerText = '';
}
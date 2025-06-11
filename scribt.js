function convert() {
  const value = parseFloat(document.getElementById('inputValue').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;

  if (isNaN(value)) {
    document.getElementById('result').innerText = "❌ Bitte eine gültige Zahl eingeben!";
    return;
  }

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

  // Maximal 6 Nachkommastellen, aber ohne unnötige Nullen
  const formatted = parseFloat(result.toFixed(6)).toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6
  });

  document.getElementById('result').innerText = `${value} ${from} = ${formatted} ${to}`;
}

function resetFields() {
  document.getElementById('inputValue').value = '';
  document.getElementById('result').innerText = '–';
}

window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleTheme');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark', toggle.checked);
    });
  }
});

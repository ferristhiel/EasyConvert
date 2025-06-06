function umrechnen() {
  const wert = parseFloat(document.getElementById("input").value);
  const einheit = document.getElementById("einheit").value;
  let ergebnis = "";

  if (isNaN(wert)) {
    ergebnis = "Bitte eine Zahl eingeben!";
  } else {
    if (einheit === "km") {
      ergebnis = `${wert} km = ${wert * 1000} m`;
    } else if (einheit === "m") {
      ergebnis = `${wert} m = ${wert / 1000} km`;
    }
  }

  document.getElementById("ergebnis").innerText = ergebnis;
}
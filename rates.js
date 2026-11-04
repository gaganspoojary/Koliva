const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTphSTVLmbBqoofGulT2t_zXbxLzBcRbp0h2VRjDzOh8e49uF2Y9cDnT1B13XhEJevz_VAMoUQH_xt-/pub?gid=506287089&single=true&output=csv";

const HOME_DISTRICT = "Udupi";
let FOOTER_NOTE = "Rates are indicative. Please confirm with your local dealer before selling.";

let DATE = new Date().toISOString().slice(0, 10);
let RATE_TABLE = "";

(function () {
  function parseCSV(t) {
    var rows = [], row = [], cur = "", q = false;
    for (var i = 0; i < t.length; i++) {
      var c = t[i];
      if (q) {
        if (c === '"' && t[i + 1] === '"') { cur += '"'; i++; }
        else if (c === '"') q = false;
        else cur += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(cur); cur = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && t[i + 1] === "\n") i++;
        row.push(cur); rows.push(row); row = []; cur = "";
      } else cur += c;
    }
    if (cur !== "" || row.length) { row.push(cur); rows.push(row); }
    return rows;
  }

  function getCSV() {
    try {
      var x = new XMLHttpRequest();
      x.open("GET", SHEET_URL + (SHEET_URL.indexOf("?") > -1 ? "&" : "?") + "t=" + Date.now(), false);
      x.send();
      if (x.status === 200 && x.responseText.indexOf(",") > -1) {
        try { localStorage.setItem("koli_csv", x.responseText); } catch (e) {}
        return x.responseText;
      }
    } catch (e) {}
    try { return localStorage.getItem("koli_csv"); } catch (e) { return null; }
  }

  var csv = getCSV();
  if (!csv) { FOOTER_NOTE = "Could not load rates right now. Please refresh in a minute."; return; }

  var rows = parseCSV(csv);

  var d = (rows[0] && rows[0][1] || "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) DATE = d;
  else if (d && !isNaN(new Date(d))) {
    var dt = new Date(d);
    DATE = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2);
  }

  var lines = [];
  for (var i = 2; i < rows.length; i++) {
    var r = rows[i].map(function (s) { return (s || "").trim(); });
    if (!r[1] || !r[4]) continue;
    lines.push([r[0] || "Other States", r[1], r[2] || r[1], r[3] || r[4], r[4], r[5] || 0, r[6] || 0, r[7] || 0].join(" | "));
  }
  RATE_TABLE = lines.join("\n");
})();

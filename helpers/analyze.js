const fs = require("fs");

function parseCSV(csvPath) {
  const raw = fs.readFileSync(csvPath, "utf-8").trim().split("\n");
  const rows = raw.slice(1);
  return rows.map(r => {
    const [category, amount] = r.split(",");
    return { category, amount: parseFloat(amount) };
  });
}

module.exports = { parseCSV };

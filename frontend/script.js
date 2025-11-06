async function send() {
    const raw = document.getElementById("expenses").value.trim().split("\n");
    const apiKey = document.getElementById("apiKey").value;

    const expenses = raw.map(line => {
        const [category, amount] = line.split(",");
        return { category, amount: parseFloat(amount) };
    });

    const res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expenses, apiKey })
    });

    const data = await res.json();

    document.getElementById("output").innerHTML = `
        <h3>📊 Total Spending: ₹${data.total_spending}</h3>
        <pre>${JSON.stringify(data.category_totals, null, 2)}</pre>
        <h3>🤖 AI Summary</h3>
        <p>${data.ai_summary}</p>
    `;
}

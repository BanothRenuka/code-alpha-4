document.getElementById("medicalForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const age = Number(document.getElementById("age").value);
    const bmi = Number(document.getElementById("bmi").value);
    const bp = Number(document.getElementById("bp").value);
    const glucose = Number(document.getElementById("glucose").value);
    const chestPain = Number(document.getElementById("chestPain").value);

    // ----- Feature Engineering -----
    const riskScore =
        (age * 0.02) +
        (bmi * 0.03) +
        (bp * 0.02) +
        (glucose * 0.03) +
        (chestPain * 1.5);

    // ----- Logistic Regression-style Prediction -----
    const probability = 1 / (1 + Math.exp(-riskScore / 10));
    const prediction = probability >= 0.5 ? "High Disease Risk ⚠️" : "Low Disease Risk ✅";

    // ----- Display Output -----
    document.getElementById("output").classList.remove("hidden");
    document.getElementById("result").innerText = `Prediction: ${prediction}`;
    document.getElementById("risk").innerText =
        `Risk Probability: ${(probability * 100).toFixed(2)}%`;

    // ----- Mock Performance Metrics -----
    document.getElementById("accuracy").innerText = "0.85";
    document.getElementById("precision").innerText = "0.82";
    document.getElementById("recall").innerText = "0.80";
    document.getElementById("roc").innerText = "0.88";
});

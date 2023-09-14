function fibonacciSequence() {
    const inputElement = document.getElementById("fibonacciInput");
    const n = Number(inputElement.value);

    if (Number.isInteger(n) && n > 0) {
    let fibo = [0, 1];

    if (n <= 1) {
        document.getElementById("fibonacciResult").textContent = fibo
        .slice(0, n)
        .join(", ");
    } else {
        for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
        document.getElementById("fibonacciResult").textContent = fibo.join(", ");
    }
    } else {

    document.getElementById("fibonacciResult").textContent =
        "Please enter a positive integer.";
    }
}

function reset() {
    document.getElementById("fibonacciInput").value = "";
    document.getElementById("fibonacciResult").textContent = "";
}

document
    .getElementById("fibonacciInput")
    .addEventListener("input", function () {
        fibonacciSequence();
    });
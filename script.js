//To append a Value
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// To Clear
function clearDisplay() {
    document.getElementById("display").value = "";
}

// To Calculate
function calculate() {
    var displayValue = document.getElementById("display").value;
    try {
        var result = eval(displayValue);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

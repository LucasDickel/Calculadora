function addValue(val) {
    document.getElementById('result').textContent += val;
}

function calculate() {
    let visor = document.getElementById('result');
    try {
        visor.textContent = eval(visor.textContent)
    } catch {
        visor.textContent = 'erro';
    }
}

function clearResult () {
    document.getElementById('result').textContent = '';
}
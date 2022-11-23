let countButton = document.querySelector('.separateButton');
countButton.addEventListener('click', thousandSeparator);

function thousandSeparator() {
    let resultField = document.querySelector('.result');
    let input = document.querySelector('.thousand-separator-number');
    let inputFormatted = input.value.replace(",", ".");
    let inputNumber = Number(inputFormatted);
    resultField.value = new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 2}).format(inputNumber);

    //const regex = new RegExp("^[0-9]\d{3}$");
}


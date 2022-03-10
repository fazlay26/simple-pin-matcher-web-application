function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
})

document.getElementById('key-pad').addEventListener('click', function (event) {

    const typeNumbers = document.getElementById('typed-numbers')
    let newNumbers = event.target.innerText

    if (isNaN(newNumbers)) {
        if (newNumbers == 'C') {
            typeNumbers.value = ''
        }


    }
    else {

        const previousNumbers = typeNumbers.value
        newNumbers = previousNumbers + newNumbers
        typeNumbers.value = newNumbers

    }


})
document.getElementById('submit').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const succesMessage = document.getElementById('succes');
    const errorMessage = document.getElementById('error');
    if (displayPin == typedNumbers) {

        succesMessage.style.display = 'block'
        errorMessage.style.display = 'none'
    }
    else {
        succesMessage.style.display = 'none'
        errorMessage.style.display = 'block'
        const remainingTryInput = document.getElementById('try-left')
        const remainingTry = remainingTryInput.innerText
        if (remainingTry > 1) {

            remainingTryInput.innerText = remainingTry - 1

        }
        else if (remainingTry <= 1) {
            const Try = document.getElementById('try').style.display = 'none'


            remainingTryInput.innerText = "sorry!!Please try again later"




        }
    }

})
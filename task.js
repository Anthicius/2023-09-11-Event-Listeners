function calculations() {
    const targetElement = document.getElementById('numbers');
    let counter = 5;
    let h3Element = document.createElement('h3');
    let buttonMinus = document.createElement('button');
    let buttonPlus = document.createElement('button');
    let buttonPlusTwo = document.createElement('button');
    let buttonMinusTwo = document.createElement('button');
    let buttonReset = document.createElement('button');
    let buttonAddScore = document.createElement('button');
    let buttonScore = document.createElement('button');
    let inputCount = document.createElement('input')
    let h4Element = document.createElement('h4');
    let PointList = document.createElement('ul')
    inputCount.type = 'number';
    inputCount.max = '10';
    inputCount.min = '1';

    buttonMinus.textContent = '-';
    buttonScore.textContent = counter;
    buttonPlus.textContent = '+';
    h3Element.textContent = counter;
    buttonMinusTwo.textContent = '-2'
    buttonPlusTwo.textContent = '+2'
    buttonReset.textContent = 'Reset'
    h4Element.textContent = 'Balai:'
    buttonAddScore.textContent = 'Įrašyti balą:'


    targetElement.appendChild(inputCount);
    targetElement.appendChild(h3Element);
    targetElement.appendChild(buttonMinusTwo);
    targetElement.appendChild(buttonMinus);
    targetElement.appendChild(buttonReset)
    targetElement.appendChild(buttonPlus);
    targetElement.appendChild(buttonPlusTwo);
    targetElement.appendChild(buttonAddScore);
    targetElement.appendChild(h4Element);
    targetElement.appendChild(PointList);

    const updateButtons = () => {
        if(counter >=5){
            h3Element.style.color = 'green';
        }
        else {
            h3Element.style.color = 'red';
        }
        if (counter <= 1) {
            buttonMinus.setAttribute('disabled', true);
            buttonMinusTwo.setAttribute('disabled', true);
        } else {
            buttonMinus.removeAttribute('disabled');
            buttonMinusTwo.removeAttribute('disabled');
        }
    
        if (counter >= 10) {
            buttonPlus.setAttribute('disabled', true);
            buttonPlusTwo.setAttribute('disabled', true);
        } else {
            buttonPlus.removeAttribute('disabled');
            buttonPlusTwo.removeAttribute('disabled');
        }
    };

    buttonMinus.addEventListener('click', () => {
        if (counter > 1) {
            counter--;
            h3Element.textContent = counter;
            updateButtons();
        }
    });
    buttonMinusTwo.addEventListener('click', () => {
        if (counter > 2) {
            counter-=2;
            h3Element.textContent = counter;
            updateButtons();
        }
    });

    buttonPlus.addEventListener('click', () => {
        if (counter < 10) {
            counter++;
            h3Element.textContent = counter;
            updateButtons();
        }
    });

    buttonPlusTwo.addEventListener('click', () => {
        if (counter < 9) {
            counter+=2;
            h3Element.textContent = counter;
            updateButtons();
        }
    });
    buttonReset.addEventListener('click', () => {
            counter=5;
            h3Element.textContent = counter;
            updateButtons();
    });

    
    inputCount.addEventListener('input', () => {
        let inputCountValue = parseInt(inputCount.value);
        if(!isNaN(inputCountValue)){
            if (inputCountValue >= 1 && inputCountValue <= 10) {
                counter = inputCountValue;
                h3Element.textContent = counter;
                updateButtons();
            } else {
                inputCount.value = counter;
            }
        }
    })
    buttonAddScore.addEventListener('click', () => {
        const li = document.createElement('li');
    
        const newButton = document.createElement('button');
        newButton.textContent = h3Element.textContent;
        
        li.appendChild(newButton);

        li.addEventListener('click', () => {
            li.remove();
        });
        
        li.style.color = h3Element.style.color;
        PointList.appendChild(li);
        updateButtons();
    });

    updateButtons();
}


calculations();
function calculations() {
    const targetElement = document.getElementById('numbers');
    let counter = 5;
    let h3Element = document.createElement('h3');
    let buttonElement1 = document.createElement('button');
    let buttonElement2 = document.createElement('button');

    buttonElement1.textContent = '-';
    buttonElement2.textContent = '+';
    h3Element.textContent = counter;

    targetElement.appendChild(h3Element);
    targetElement.appendChild(buttonElement1);
    targetElement.appendChild(buttonElement2);

    const updateButtons = () => {
        if (counter <= 1) {
            buttonElement1.setAttribute('disabled', true);
        } else {
            buttonElement1.removeAttribute('disabled');
        }

        if (counter >= 10) {
            buttonElement2.setAttribute('disabled', true);
        } else {
            buttonElement2.removeAttribute('disabled');
        }
    };

    buttonElement1.addEventListener('click', () => {
        if (counter > 1) {
            counter--;
            h3Element.textContent = counter;
            updateButtons();
        }
    });

    buttonElement2.addEventListener('click', () => {
        if (counter < 10) {
            counter++;
            h3Element.textContent = counter;
            updateButtons();
        }
    });

    updateButtons();
}


calculations();
// FAQ Answer Toggling
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer) {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Cost Calculator Functionality
const arduinoType = document.getElementById('arduino-type');
const soilSensor = document.getElementById('soil-sensor');
const solarPanel = document.getElementById('solar-panel');
const waterPump = document.getElementById('water-pump');
const ftdiAdapterCheckbox = document.getElementById('ftdi-adapter');
const tubingLength = document.getElementById('tubing-length');
const emittersNumber = document.getElementById('emitters-number');
const waterReservoir = document.getElementById('water-reservoir');
const wiresNumber = document.getElementById('wires-number'); // Corrected ID
const totalCostDisplay = document.getElementById('total-cost');

function calculateTotalCost() {
    let total = 0;

    // Get the selected Arduino cost
    const arduinoValue = arduinoType.value;
    if (arduinoValue === 'pro-mini') {
        total += 20;
        if (ftdiAdapterCheckbox.checked) {
            total += 10;
        }
    } else if (arduinoValue === 'wemos-d1-mini') {
        total += 30;
    }

    // Get the selected soil sensor cost
    const soilValue = soilSensor.value;
    if (soilValue === 'basic') {
        total += 10;
    } else if (soilValue === 'digital') {
        total += 30;
    }

    // Get the selected solar panel cost
    const solarValue = solarPanel.value;
    if (solarValue === 'small') {
        total += 30;
    } else if (solarValue === 'medium') {
        total += 60;
    }

    // Get the selected water pump cost
    const pumpValue = waterPump.value;
    if (pumpValue === 'mini') {
        total += 20;
    } else if (pumpValue === 'submersible') {
        total += 35;
    }

    // Get the selected tubing length cost
    const tubingValue = tubingLength.value;
    if (tubingValue === '5') {
        total += 20;
    } else if (tubingValue === '10') {
        total += 30;
    } else if (tubingValue === '15') {
        total += 40;
    }

    // Get the selected emitters number cost
    const emittersValue = emittersNumber.value;
    if (emittersValue === '5') {
        total += 10;
    } else if (emittersValue === '10') {
        total += 18;
    } else if (emittersValue === '20') {
        total += 30;
    }

    // Get the selected water reservoir cost
    const reservoirValue = waterReservoir.value;
    if (reservoirValue === 'small-new') {
        total += 25;
    } else if (reservoirValue === 'medium-new') {
        total += 40;
    }

    // Get the wires/connectors number cost
    const wiresValue = wiresNumber.value;
    if (wiresValue === '10') {
        total += 10;
    } else if (wiresValue === '20') {
        total += 18;
    }

    totalCostDisplay.textContent = total + ' AED';
}

// Add event listeners to the calculator elements
arduinoType.addEventListener('change', calculateTotalCost);
soilSensor.addEventListener('change', calculateTotalCost);
solarPanel.addEventListener('change', calculateTotalCost);
waterPump.addEventListener('change', calculateTotalCost);
ftdiAdapterCheckbox.addEventListener('change', calculateTotalCost);
tubingLength.addEventListener('change', calculateTotalCost);
emittersNumber.addEventListener('change', calculateTotalCost);
waterReservoir.addEventListener('change', calculateTotalCost);
wiresNumber.addEventListener('change', calculateTotalCost); // Added event listener for wires

// Initial calculation on page load
calculateTotalCost();
"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

// Luego de la carga del documento.
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('items');
    const img = document.getElementById('displayImage');
    const photographerInput = document.getElementById('photographer');
    const descriptionInput = document.getElementById('description');
    const scoreInput = document.getElementById('score');
    const btnInc = document.getElementById('increaseScore');
    const btnDec = document.getElementById('decreaseScore');

    // Agregue al elemento select los nombres de los ítems que se encuentran en el arreglo.
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    let currentKey = null;

    // Al escoger una opción del elemento select, muestre los demás valores del ítem en los elementos correspondientes del HTML.
    select.addEventListener('change', (e) => {
        const key = e.target.value;
        if (itemData[key]) {
            currentKey = key;
            img.src = itemData[key].image;
            photographerInput.value = itemData[key].photographer;
            descriptionInput.value = itemData[key].description;
            scoreInput.value = itemData[key].score;
        }
    });

    // Al hacer clic en uno de los botones, aumente o disminuya el puntaje actual.
    btnInc.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentKey) {
            itemData[currentKey].score++;
            scoreInput.value = itemData[currentKey].score;
        }
    });
    
    btnDec.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentKey) {
            itemData[currentKey].score--;
            scoreInput.value = itemData[currentKey].score;
        }
    });
});
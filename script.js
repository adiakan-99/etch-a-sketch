const gridContainer = document.querySelector('.container');

const setSizeButton = document.querySelector('.set-size-button');
const sketchButton = document.querySelector('.sketch-button');
const clear = document.querySelector('.clear');

let numberOfSquare = 4;

function removeLastSpace (string) {
    return string.slice(0, string.length - 1)
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function getSize () {
    numberOfSquare = parseInt(prompt('Enter the number of squres on each side(2-100)'));
    if (numberOfSquare > 100 || numberOfSquare < 2 || !(numberOfSquare)) {
        alert('Invalid Answer');
        getSize();
    } else {
        clearGrid();
        setGrid(numberOfSquare);
    }
}

function clearGrid () {
    const gridItem = Array.from(gridContainer.childNodes);
    gridItem.forEach((item) => {
        gridContainer.removeChild(item);
    })
}

function setGrid(numberOfSquare) {
    for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
        const gridItem = document.createElement('div');
        gridContainer.appendChild(gridItem);
    }

    let gridRow = '';
    let gridColumn = '';

    for (let i = 0; i < numberOfSquare; i++) {
        gridRow += 'auto ';
        gridColumn += 'auto ';
    }

    gridContainer.style.gridTemplateColumns = removeLastSpace(gridColumn);
    gridContainer.style.gridTemplateROws = removeLastSpace(gridRow);

}

function fillColor (e) {
    let color = getRandomColor();
    
    e.target.style.backgroundColor = color;
}

function removeColor (e) {
    let color = 'white';

    e.target.style.backgroundColor = color;
}

setSizeButton.addEventListener('click', getSize);



sketchButton.addEventListener('click', (e) => {
    const gridItem = Array.from(gridContainer.childNodes);
    
    gridItem.forEach((item) => {
        item.addEventListener('mouseover', fillColor);
    });
});



clear.addEventListener('click', () => {
    const gridItem = Array.from(gridContainer.childNodes);

    gridItem.forEach((item) => {
        item.style.backgroundColor = '#ffffff';
    });
    
});

setGrid(16);
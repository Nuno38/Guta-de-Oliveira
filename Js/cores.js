const colors = [
    { color: '#FF5733', title: 'Energia', description: 'Representa paixão e dinamismo.' },
    { color: '#FFC300', title: 'Alegria', description: 'Simboliza otimismo e criatividade.' },
    { color: '#DAF7A6', title: 'Calma', description: 'Reflete tranquilidade e harmonia.' },
    { color: '#33FF57', title: 'Natureza', description: 'Ligação com o natural e o crescimento.' },
    { color: '#33FFF9', title: 'Frescura', description: 'Inspira leveza e vitalidade.' },
    { color: '#335BFF', title: 'Confiança', description: 'Indica segurança e serenidade.' },
    { color: '#7D33FF', title: 'Mistério', description: 'Evoca espiritualidade e criatividade.' },
    { color: '#FF33A8', title: 'Romance', description: 'Expressa amor e emoção.' },
    { color: '#FF8C33', title: 'Entusiasmo', description: 'Motiva e atrai atenção.' },
    { color: '#C70039', title: 'Determinação', description: 'Força e coragem.' },
    { color: '#900C3F', title: 'Elegância', description: 'Transmite sofisticação e poder.' },
    { color: '#581845', title: 'Profundidade', description: 'Carrega complexidade e introspecção.' },
    { color: '#4CAF50', title: 'Equilíbrio', description: 'Representa saúde e bem-estar.' },
    { color: '#2196F3', title: 'Sabedoria', description: 'Associa-se a inteligência e clareza.' },
    { color: '#FFEB3B', title: 'Felicidade', description: 'Irradia positividade.' },
    { color: '#9C27B0', title: 'Criatividade', description: 'Estimula imaginação e invenção.' },
    { color: '#E91E63', title: 'Empatia', description: 'Ligação emocional e compaixão.' },
    { color: '#03A9F4', title: 'Liberdade', description: 'Abertura e espontaneidade.' },
    { color: '#CDDC39', title: 'Renovação', description: 'Sinaliza novas possibilidades.' },
    { color: '#FF9800', title: 'Aventura', description: 'Exploração e diversão.' },
    { color: '#795548', title: 'Estabilidade', description: 'Base sólida e confiável.' }
];

const colorContainer = document.getElementById('colorContainer');
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoDescription = document.getElementById('infoDescription');
const selectedColors = document.getElementById('selectedColors');
const colorPreview = document.getElementById('colorPreview');
const selectedDescriptions = document.getElementById('selectedDescriptions');

let selected = [];

colors.forEach((colorObj, index) => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = colorObj.color;

    colorBox.addEventListener('click', () => {
        if (selected.length < 3 || selected.some(sel => sel.color === colorObj.color)) {
            if (!selected.some(sel => sel.color === colorObj.color)) {
                selected.push(colorObj);
            } else {
                selected = selected.filter(sel => sel.color !== colorObj.color);
            }

            updateSelectedColors();
        }
    });

    colorContainer.appendChild(colorBox);
});

function updateSelectedColors() {
    colorPreview.innerHTML = '';
    selectedDescriptions.innerHTML = '';

    selected.forEach(sel => {
        const colorSpan = document.createElement('span');
        colorSpan.style.backgroundColor = sel.color;
        colorPreview.appendChild(colorSpan);

        const colorInfo = document.createElement('p');
        colorInfo.textContent = `${sel.title}: ${sel.description}`;
        selectedDescriptions.appendChild(colorInfo);
    });
}
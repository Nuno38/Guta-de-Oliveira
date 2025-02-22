const questions = document.querySelectorAll('.question');
let answers = {};

function nextQuestion(current) {
    const selected = document.querySelector(`input[name="question${current}"]:checked`);
    if (selected) {
        answers[`question${current}`] = selected.value;
        questions[current - 1].classList.remove('active');
        questions[current].classList.add('active');
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function showResult() {
    const selected = document.querySelector(`input[name="question3"]:checked`);
    if (selected) {
        answers['question3'] = selected.value;

        // Lógica para determinar o tipo de negócio com base nas respostas
        // Isso pode ser mais complexo dependendo da regra que você quer aplicar
        // Aqui está uma lógica simples apenas para demonstração
        const mostCommonAnswer = Object.values(answers).sort((a, b) =>
            Object.values(answers).filter(v => v === a).length - 
            Object.values(answers).filter(v => v === b).length
        ).pop();

        let resultText;
        switch (mostCommonAnswer) {
            case 'A':
                resultText = "Seu perfil é!"+"\n"+"\nAmante.";
                break;
            case 'B':
                resultText = " Seu perfil é!"+"\n"+"\nCara comum.";
                break;
            case 'C':
                resultText = " Seu perfil é!"+"\n"+"\nCriador.";
                break;
            case 'D':
                resultText = " Seu perfil é!"+"\n"+"\nSábio";
                break;
            case 'E':
                resultText = " Seu perfil é!"+"\n"+"\nExplorador.";
                break;
            case 'F':
                resultText = " Seu perfil é!"+"\n"+"\nRebelde.";
                break;
            case 'G':
                resultText = "Seu perfil é!"+"\n"+"\nGovernante.";
                break;
            case 'H':
                resultText = " Seu perfil é!"+"\n"+"\nHerói.";
                break;
            case 'I':
                resultText = " Seu perfil é!"+"\n"+"\nInocente.";
                break;
            case 'J':
                resultText = " Seu perfil é!"+"\n"+"\nPrestativo.";
                break;
            case 'K':
                resultText = " Seu perfil é!"+"\n"+"\nMago.";
                break;
            case 'L':
                resultText = " Seu perfil é!"+"\n"+"\nLouco.";
                break;
            default:
                resultText = "Não foi possível determinar o tipo de negócio.";
        }

        document.getElementById('resultText').innerText = resultText;
        questions[2].classList.remove('active');
        document.getElementById('result').classList.add('active');
    } else {
        alert('Por favor, selecione uma resposta.');
    }
}

function restart() {
    answers = {};
    document.querySelector('input[name="question1"]:checked').checked = false;
    document.querySelector('input[name="question2"]:checked').checked = false;
    document.querySelector('input[name="question3"]:checked').checked = false;
    document.getElementById('result').classList.remove('active');
    document.getElementById('question1').classList.add('active');
}



//Neste código:
//1. As respostas são armazenadas no objeto `answers`.
//2. A função `showResult` determina o tipo de negócio com base na resposta mais comum usando uma lógica simples.
//3. O resultado é exibido na última seção.
//4. A função `restart` redefine o questionário para permitir que o usuário comece novamente.


 

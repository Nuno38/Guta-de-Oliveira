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
                resultText = " Realista e Coletivo.";
                break;
            case 'C':
                resultText = " Inovador e Criativo.";
                break;
            case 'D':
                resultText = " Sábio e Verdadeiro.";
                break;
            case 'E':
                resultText = " Livre e Satisfatório.";
                break;
            case 'F':
                resultText = " Revolucionário e Audacioso.";
                break;
            case 'G':
                resultText = "Poderoso e Responsável.";
                break;
            case 'H':
                resultText = " Corajoso e Vigoroso.";
                break;
            case 'I':
                resultText = " Simples e Pacífico.";
                break;
            case 'J':
                resultText = " Acolhedor e Compassivo.";
                break;
            case 'K':
                resultText = " Transformador e Profundo.";
                break;
            case 'L':
                resultText = " Divertido e Leve.";
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


 

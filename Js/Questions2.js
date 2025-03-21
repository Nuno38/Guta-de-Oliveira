const questions = document.querySelectorAll('.question');
let answers = {};

function nextQuestion(current) {
    const selected = document.querySelectorAll(`input[name="question${current}"]:checked`);
    
    if (selected.length > 2) {
        alert("Selecione no máximo duas opções.");
        return;
    }

    if (selected.length > 0) {
        answers[`question${current}`] = Array.from(selected).map(input => input.value);
        questions[current - 1].classList.remove('active');
        questions[current].classList.add('active');
    } else {
        alert('Por favor, selecione pelo menos uma resposta.');
    }
}

function showResult() {
    const selected = document.querySelectorAll(`input[name="question3"]:checked`);
    
    if (selected.length > 2) {
        alert("Selecione no máximo duas opções.");
        return;
    }

    if (selected.length > 0) {
        answers['question3'] = Array.from(selected).map(input => input.value);
    
        let resultText = "Não foi possível determinar o tipo de negócio.";
        // Verifica se as respostas contêm os valores esperados
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("B"))&&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("C"))&&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("K"))
        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Cara comum, Criador, Mago";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("A"))&&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("C"))&&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("K")) 
        ){
           
            resultText = "Seu perfil é!" + "\n\nPredominante: Cara comum, Amante, Criador, Mago";

        }
            
         else {
            alert('Por favor, selecione pelo menos uma resposta.');
        }

        document.getElementById('resultText').innerText = resultText;
        questions[2].classList.remove('active');
        document.getElementById('result').classList.add('active');
     
    }
    
}
function restart() {
    answers = {};
    document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
    document.getElementById('result').classList.remove('active');
    document.getElementById('question1').classList.add('active');
}

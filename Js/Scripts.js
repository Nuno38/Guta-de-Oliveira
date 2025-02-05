const controls= document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

function setaEsquerda(){
    
    if(true){ currentItem -=1; }
    else{currentItem +=1;}
    if(currentItem >=maxItems){
        currentItem=0;
    }
    if( currentItem< 0) {
           currentItem =0;
    }
    items.forEach(item => item.classList.remove('current-item'));
    items[currentItem].scrollIntoView({
     inline:"center"
    });  
}

function setaDireita(){

    if(true){ currentItem +=1;  }
    else{ currentItem +=1; }

    if(currentItem >=maxItems){
        currentItem=0;
    }
    if( currentItem< 0) {
           currentItem =0;
    }
    items.forEach(item => item.classList.remove('current-item'));
    items[currentItem].scrollIntoView({
     inline:"center"
    }); 
}

// alterar uma classe do css com determinada tela

const larguraDaTela= screen.Width;
const tela = document.querySelector('.container');

function verificaTela(Width){
    Width =parseInt(Width);
    $( ".container" ).text(width);
    

}

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
                resultText = "Seu tipo de negócio é Envolvente e Magnético.";
                break;
            case 'B':
                resultText = "Seu tipo de negócio é Realista e Coletivo.";
                break;
            case 'C':
                resultText = "Seu tipo de negócio é Inovador e Criativo.";
                break;
            case 'D':
                resultText = "Seu tipo de negócio é Sábio e Verdadeiro.";
                break;
            case 'E':
                resultText = "Seu tipo de negócio é Livre e Satisfatório.";
                break;
            case 'F':
                resultText = "Seu tipo de negócio é Revolucionário e Audacioso.";
                break;
            case 'G':
                resultText = "Seu tipo de negócio é Poderoso e Responsável.";
                break;
            case 'H':
                resultText = "Seu tipo de negócio é Corajoso e Vigoroso.";
                break;
            case 'I':
                resultText = "Seu tipo de negócio é Simples e Pacífico.";
                break;
            case 'J':
                resultText = "Seu tipo de negócio é Acolhedor e Compassivo.";
                break;
            case 'K':
                resultText = "Seu tipo de negócio é Transformador e Profundo.";
                break;
            case 'L':
                resultText = "Seu tipo de negócio é Divertido e Leve.";
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
// remove a imagem

const isRetina = window.devicePixelRatio >= 2;
const imagemElement = document.getElementById('imagem');
const textImagem = document.getElementById ('text-imagem');
const linhaInicio =document.getElementById('linha');

if (isRetina) {
  imagemElement.remove();
  textImagem.remove();
  linhaInicio.remove();
}
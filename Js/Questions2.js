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
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("C")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("K"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Cara comum, Criador e Mago";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("B") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("B") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Amante, Criador, Mago";

        }
        else if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("C") || answers["question2"]?.includes("B")) &&
                (answers["question3"]?.includes("C") || answers["question3"]?.includes("H"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Amante, Cara comum, Heroi";

        }
        else if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSabio, Explorador, Criador, Louco";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("G"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador, Amante, Inocente, Governante";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Prestativo, Criador, Mago";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Amante, Criador, Mago";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Amante, Criador, Mago";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Amante, Criador, Mago";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Amante, Criador, Mago";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Amante, Criador, Mago";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("A")) &&
            (answers["question2"]?.includes("L") || answers["question2"]?.includes("C")) &&
            (answers["question3"]?.includes("L") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Amante, Criador, Mago";

        } //Segunda bateria de verificação -----------------------------------------
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("C")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("L"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Criador, Sabio e Louco";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("C")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("I"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Cara comum,  Inocente";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("F")) &&
            (answers["question2"]?.includes("D") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("D") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSabio, Rebelde, Sábio, Amante";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("E") || answers["question2"]?.includes("J")) &&
             (answers["question3"]?.includes("E") || answers["question3"]?.includes("H"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador, Cara comum, Prestativo, Herói";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("K")) &&
            (answers["question2"]?.includes("F") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("F") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Mago, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("G") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("G") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("H") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("H") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("L") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("L") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Cara comum, Sábio, Louco";

        } //// Terceira verificação 
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("D")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("E")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("A"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Sábio, Explorador ";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("B") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("B") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("C") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("C") || answers["question3"]?.includes("J"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Sábio,  Prestativo";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Governante, Explorador, Cara comum";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("I"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador, Criador, Mago, Inocente";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("L")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Louco, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("E")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco,  Criador,  Explorador,  Amante";

        }
        // terceira verificação 

        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("C")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("L"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Criador, Sabio e Louco";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("C")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("I"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Cara comum,  Inocente";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("F")) &&
            (answers["question2"]?.includes("D") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("D") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSabio, Rebelde, Sábio, Amante";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("E") || answers["question2"]?.includes("J")) &&
             (answers["question3"]?.includes("E") || answers["question3"]?.includes("H"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador, Cara comum, Prestativo, Herói";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("K")) &&
            (answers["question2"]?.includes("F") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("F") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Mago, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("G") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("G") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("H") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("H") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Cara comum, Sábio, Louco";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("B")) &&
            (answers["question2"]?.includes("L") || answers["question2"]?.includes("D")) &&
            (answers["question3"]?.includes("L") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Cara comum, Sábio, Louco";

        } //// Terceira verificação 
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("E")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("F")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("B"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Explorador, Rebelde, Cara comum ";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("C")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("E")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Criador, Explorador, Amante";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("D")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("E")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Sábio,  Explorador, Mago";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Herói, Rebelde, Criador";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("J"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador, Sábio, Louco, Prestativo";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Amante, Cara comun";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Sábio, Rebelde, Cara comum";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Sábio, Rebelde, Cara comum";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Sábio, Rebelde, Cara comum";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Sábio, Rebelde, Cara comum";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Sábio, Rebelde, Cara comum";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("F")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Sábio, Rebelde, Cara comum";

        } // Quarta verificação ----------------------------------------------
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("F")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("G")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("C"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Rebelde, Governante, Criador ";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("D")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("F")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Sábio, Rebelde, Cara comum";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("E")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("F")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Explorador, Rebelde, Louco";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Inocente, Governante";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("A")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("K"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador,  Amante, Mago";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Cara comum, Governante, Criador";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Explorador, Governante, Criador";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Explorador, Governante, Criador";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Explorador, Governante, Criador";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Explorador, Governante, Criador";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("G")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Explorador, Governante, Criador";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("G")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Explorador, Governante, Criador";

        } // Quinta verificação ------------------------------------------------------------------------
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("G")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("H")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("D"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Governante, Herói, Sábio ";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("E")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("G")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Explorador, Governante, Criador";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("F")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("G")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Rebelde, Governante, Amante";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Prestativo, Herói, Explorador";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("B")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("L"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador,  Rebelde, Cara comum, Louco";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("C")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Criador, Herói, Sábio";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Rebelde, Herói, Sábio";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Rebelde, Sábio";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Rebelde, Herói, Sábio";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Rebelde, Herói, Sábio";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("H")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Rebelde, Herói, Sábio";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("H")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Rebelde, Herói, Sábio";

        } 
        //Sexta verificação ---------------------------------------------------------------------------------------

        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("H")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("I")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("C"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Herói, Inocente, Criador ";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("F")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("H")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Rebelde, Herói, Sábio";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("G")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("H")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Governante, Herói, Cara comum";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("K")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Mago, Inocente, Rebelde";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("C")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("A"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador,  Governante, Criador, Amante";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("D")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Sábio, Inocente, Esplorador";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Governante, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Governante, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Governante, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Governante, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("I")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Governante, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("I")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Governante, Inocente, Criador";

        } 
        //setima verificação--------------------------------------------------------------------------
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("I")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("J")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("D"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Inocente, Prestativo, Sábio";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("G")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("I")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Governante, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("H")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("I")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Herói, Inocente, Criador";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("L")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("J")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("G"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Louco, Prestativo, Governante";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("D")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("B"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador,  Herói, Sábio, Cara comum";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("E")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("J")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Explorador, Prestativo, Rebelde";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("J")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Herói, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("J")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Herói, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("j")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Herói, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("j")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Herói, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("H")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("J")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Herói, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("J")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Herói, Prestativo, Sábio";

        } 
        // oitava verificação ---------------------------------------------------------------------------------------
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("J")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("K")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("E"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Prestativo, Mago, Explorador";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("H")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("J")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Herói, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("I")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("J")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Inocente, Prestativo, Sábio";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("A")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("H"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Amante, Mago, Herói";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("E")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("C"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador,  Inocente, Criador";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("F")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("G"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Mago, Governante";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Inocente, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Inocente, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Inocente, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Inocente, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Inocente, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("I")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("K")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Inocente, Mago, Explorador";

        }
        // nona verificação ---------------------------------------------------------------------------------
        if (
            (answers["question1"]?.includes("A") || answers["question1"]?.includes("K")) &&
            (answers["question2"]?.includes("A") || answers["question2"]?.includes("L")) &&
            (answers["question3"]?.includes("A") || answers["question3"]?.includes("F"))


        ) {
            resultText = "Seu perfil é!" + "\n\nAmante, Mago, Louco, Rebelde";
        }
        if ((answers["question1"]?.includes("B") || answers["question1"]?.includes("I")) &&
            (answers["question2"]?.includes("B") || answers["question2"]?.includes("K")) &&
            (answers["question3"]?.includes("B") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCara comum, Inocente, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("C") || answers["question1"]?.includes("J")) &&
            (answers["question2"]?.includes("C") || answers["question2"]?.includes("K")) &&
            (answers["question3"]?.includes("C") || answers["question3"]?.includes("E"))
        ) {

            resultText = "Seu perfil é!" + "\n\nCriador, Prestativo, Mago, Explorador";

        }
        if ((answers["question1"]?.includes("D") || answers["question1"]?.includes("B")) &&
                (answers["question2"]?.includes("D") || answers["question2"]?.includes("K")) &&
                (answers["question3"]?.includes("D") || answers["question3"]?.includes("I"))
        ) {

            resultText = "Seu perfil é!" + "\n\nSábio, Cara comum, Mago, Inocente";

        }
        if ((answers["question1"]?.includes("E") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("E") || answers["question2"]?.includes("F")) &&
                (answers["question3"]?.includes("E") || answers["question3"]?.includes("D"))
        ) {

            resultText = "Seu perfil é!" + "\n\nExplorador,  Prestativo, Rebelde, Sábio";

        }
        if ((answers["question1"]?.includes("F") || answers["question1"]?.includes("G")) &&
                (answers["question2"]?.includes("F") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("F") || answers["question3"]?.includes("H"))
        ) {

            resultText = "Seu perfil é!" + "\n\nRebelde, Governante, Louco, Herói";

        }
        if ((answers["question1"]?.includes("G") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("G") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("G") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nGovernante, Prestativo, Louco, Rebelde";

        }
        if ((answers["question1"]?.includes("H") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("H") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("H") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nHeroi, Prestativo, Louco, Rebelde";

        }
        if ((answers["question1"]?.includes("I") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("I") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("I") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nInocente, Prestativo, Louco, Rebelde";

        }
        if ((answers["question1"]?.includes("J") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("J") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("J") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nPrestativo, Prestativo, Louco, Rebelde";

        }
        if ((answers["question1"]?.includes("K") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("K") || answers["question2"]?.includes("L")) &&
                (answers["question3"]?.includes("K") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nMago, Prestativo, Louco, Rebelde";

        }
        if ((answers["question1"]?.includes("L") || answers["question1"]?.includes("J")) &&
                (answers["question2"]?.includes("L") || answers["question2"]?.includes("L")) &&
                 (answers["question3"]?.includes("L") || answers["question3"]?.includes("F"))
        ) {

            resultText = "Seu perfil é!" + "\n\nLouco, Prestativo, Rebelde";

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

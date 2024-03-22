const questions = [
    {
        question: "pregunta 1",
        options: [{
            correct: false,
            description: "respuesta correcta"
        },
        {
            correct: true,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta 4"
        }]
    },
    {
        question: "pregunta 2",
        options: [{
            correct: true,
            description: "respuesta correcta"
        },
        {
            correct: false,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta"
        }]
    },
    {
        question: "pregunta 3",
        options: [{
            correct: true,
            description: "respuesta correcta"
        },
        {
            correct: false,
            description: "otra respuesta"
        },
        {
            correct: false,
            description: "otra respuesta"
        }]
    }
];


const onClickValidate = () => {
    const inputs = document.querySelectorAll('.option');
    inputs.forEach((input) => {
        const arrayValue = input.value.split(',');
        const indexQuestion = arrayValue[0];
        const indexOption = arrayValue[1];
        const optionObject = questions[indexQuestion].options[indexOption];
        if (input.checked) {
            const span = document.querySelector(`#q_${indexQuestion}_${indexOption}`);
            if (optionObject.correct) {
                span.style.color = 'green';
            } else {
                span.style.color = 'red';
            }
        }
    });
};




const onLoad = () => {
    const buttonValidate = document.querySelector("#validate-questions");
    buttonValidate.addEventListener('click', onClickValidate);

    const questionsElement = document.querySelector("#questions");

    questions.forEach((q, indexQuestion) => {
        const questionElement = document.createElement('p');
        questionElement.innerText = q.question;
        questionsElement.appendChild(questionElement);

        q.options.forEach((option, indexOption) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'checkbox';
            optionInput.classList.add('option');
            optionInput.value = indexQuestion + ',' + indexOption;
            optionInput.id = 'q-' + indexQuestion + 'checkbox' + indexOption;

            questionsElement.appendChild(optionInput);

            const optionText = document.createElement('span');
            optionText.innerText = option.description;
            optionText.id = 'q_' +indexQuestion + '_' + indexOption;

            questionsElement.appendChild(optionText);

            questionsElement.appendChild(document.createElement('br'));


        })

        

    });
    


}
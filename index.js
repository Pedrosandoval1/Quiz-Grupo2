let elQuestionScreen = document.getElementById("questionscreen")
let elScreenResult = document.getElementById("resultscreen")
let usuarioId = document.getElementById("textHistorial")
let historial = [];
let sumador = 0
function Quiz() {
    this.questions = []
    this.counter = 0
    this.indexCurrentQuestion = 0
    this.questionsAnswered = 0
    this.addQuestion = function(question) {
        this.questions.push(question)
    }
    this.showCurrentQuestion = function() {
        if (this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement()
        } else {
            elQuestionScreen.classList.add('hidden')
            
            let elCorrectAnswers = document.querySelector("#correctAnswers")
            elCorrectAnswers.innerHTML = quiz.counter
            historial[historial.length - 1].points = quiz.counter;
        
            // elScreenResult.classList.add('block')
            elScreenResult.style.display = "block"
        }

    }
}

function Question(title, answers, correctAnswer) {
    this.title = title
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    }
    this.isCorrectAnswer = function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }

    this.getElement = function() {
        let questionNumber = document.createElement("h2")
        questionNumber.textContent = `pregunta ${sumador+= 1} de 5`
        elQuestionScreen.append(questionNumber)
        let questionTitle = document.createElement("h3")
        questionTitle.textContent = this.title
        elQuestionScreen.append(questionTitle)

        let questionAnswers = document.createElement("ul")
        questionAnswers.classList.add("question__awswers")

        this.answers.forEach((answer, index) => {
            let elAnswer = document.createElement("li")
            elAnswer.classList.add("awswer")
            elAnswer.textContent = answer
            elAnswer.id = index+1
            elAnswer.addEventListener("click", this.checkAnswer)
            questionAnswers.append(elAnswer)
        })

        elQuestionScreen.append(questionAnswers)
    }

    this.checkAnswer = (event) => {
        quiz.questionsAnswered ++
        let anwserSelected = event.target
        let isCorrectAnswer = this.isCorrectAnswer(anwserSelected.id);
        if (isCorrectAnswer) {
            anwserSelected.classList.add('answer--correct')
            quiz.counter++
        } else {
            anwserSelected.classList.add('answer--wrong')
            let elCorrectAnswer = document.getElementById(this.correctAnswer)
            
        }        
        
        let incrementQuestionNumber = 1;
        
        if (!isCorrectAnswer)
            switch (quiz.indexCurrentQuestion) {
                case 0:
                    incrementQuestionNumber = 4;
                    break;
            
                case 4:
                    incrementQuestionNumber = 5;
                    break;

                case 10:    
                    incrementQuestionNumber = 5;
                    break;
            }
            

        if (quiz.questionsAnswered === 5) incrementQuestionNumber = quiz.questions.length;

        console.log("🚀 ~ file: index.js ~ line 86 ~ Question ~ incrementQuestionNumber", incrementQuestionNumber)
        setTimeout(function() {
            elQuestionScreen.textContent = ''
            quiz.indexCurrentQuestion += incrementQuestionNumber            
            quiz.showCurrentQuestion() 
        }, 1000)
    }
            
}

let question1 = new Question('¿Cuánto tiempo llevas usando el producto?', ["primera vez", "1 Mes" ,"1 año"], 3)
let question2 = new Question('¿Qué alternativas consideraste antes de comprar el producto?', ['	Métodos de Pago', '	Disponibilidad', '	Tiempo en despacho', '	Atencion al cliente'], 1)
let question3 = new Question('¿Con qué frecuencia utilizas el producto o servicio?', ['	poca frecuencia', '	Mensualmente', 'Mucha Frecuencia'], 1)
let question4 = new Question('¿El producto te ayuda a lograr tus objetivos?', ['si', 'no'], 1)
let question5 = new Question('¿Cuál es tu rango de edad?', ["Mayor a 20 años", "Entre 40 y 50 años", "Mayor a 60 años"], 1)
let question6 = new Question('¿Cuál es tu situación laboral?', ['Trabajo actualmente', 'casado', 'Pensionado'], 1)
let question7 = new Question('¿Tiene Hijos?', ['Si ','NO' ], 1)
let question8 = new Question('¿Cuál es tu estado civil y si tienes hijos?', ['Soltero', 'Casado', 'Divorciado'], 1)
let question9 = new Question('¿Cuál es tu nivel de educación?', ['Profesional Universitario', 'Estudiante Universitario', 'Clase media completa'], 1)
let question10 = new Question('¿Cuál es tu ingreso familiar anual aproximado?', ['Menos de 10Mill', 'Mas de 10mill'], 2)
let question11 = new Question('¿Qué tan satisfecho estás hoy con tu experiencia en la tienda?', ["No estoy satisfecho", "Poco satisfecho", "Satisfecho"], 3)
let question12 = new Question('¿Qué tan probable es que recomiendes (inserta el producto o servicio) a otras personas?', ['	No lo recomendaría','Poco Probable', 'Probable', 'Muy Probable'], 4)
let question13 = new Question('Califica tu satisfacción respecto a nuestro equipo para resolver tu problema.', ['1-3 baja satisfacción', '3-5 media satisfacción','5-7 satisfecho o/a'], 3)
let question14 = new Question('¿Sentiste que nuestro equipo respondió con prontitud tu consulta?', ['si', 'no'], 1)
let question15 = new Question('¿Estás de acuerdo o en desacuerdo con que tu problema fue resuelto efectivamente?', ["De acuerdo", "En desacuerdo"], 1)
let question16 = new Question('¿Qué posibilidades hay de que vuelvas a comprarnos?', ['	Ninguna posibilidad', '	Posiblemente', 'Totalmente Posible'], 3)
let question17 = new Question('¿Qué posibilidades hay de que vuelvas a nuestro sitio web?', ['Ninguna posibilidad', 'Posiblemente', 'Totalmente Posible'], 3)
let question18 = new Question('¿Podemos comunicarnos contigo para dar seguimiento a estas respuestas?', ['Si', 'No'], 1)
let question19 = new Question('En el futuro, ¿estarías dispuesto a volver a realizar esta encuesta?', ['Si', 'No'], 1)
let question20 = new Question('Si tuviéramos que actualizar (inserta la función del producto aquí), ¿podríamos comunicarnos contigo para hablar sobre estos cambios?', ['Si', 'No'], 1)

let quiz = new Quiz()
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.addQuestion(question3)
quiz.addQuestion(question4)
quiz.addQuestion(question5)
quiz.addQuestion(question6)
quiz.addQuestion(question7)
quiz.addQuestion(question8)
quiz.addQuestion(question9)
quiz.addQuestion(question10)
quiz.addQuestion(question11)
quiz.addQuestion(question12)
quiz.addQuestion(question13)
quiz.addQuestion(question14)
quiz.addQuestion(question15)
quiz.addQuestion(question16)
quiz.addQuestion(question17)
quiz.addQuestion(question18)
quiz.addQuestion(question19)
quiz.addQuestion(question20)
 



function seeFirstQuestion() {
    let elWelcomeScr = document.getElementById("welcomescreen")
    // elWelcomeScr.style.display = 'none'
    elWelcomeScr.classList.remove('block')
    elWelcomeScr.classList.add('hidden')

    elQuestionScreen.classList.remove('hidden')
    quiz.indexCurrentQuestion = 0;
    quiz.questionsAnswered = 0;
    quiz.counter = 0;
    quiz.showCurrentQuestion()    
}

let elWelcomeBtn = document.getElementById("welcome_btn")
elWelcomeBtn.addEventListener("click", seeFirstQuestion)



// para el botton del iniciar sesion 
function respuesta (){    
    let formulario = document.getElementById("contenedor")
    formulario.classList.remove('block')
    formulario.classList.add('hidden')

    let quizSreen = document.getElementById("quiz")
    quizSreen.classList.add('block')

    historial.push({user: document.getElementById("usuario").value})    
}

let laRespuesta = document.getElementById("boton")
laRespuesta.addEventListener("click", respuesta)

function respuestaId2() {
    resultado = document.getElementById("usuario").value
    document.getElementById("textHistorial").innerHTML= ""
   
}

    
function mostrar() {
    let mostrarUsuarios = document.getElementById("textHistorial")
    mostrarUsuarios.classList.add('block')
    
    let laRespuesta2 = document.getElementById("boton")
    laRespuesta2.addEventListener("click", respuestaId2)

    historial.forEach((use) =>{
        let elHistorial = document.getElementById("textHistorial")
        let liHistorial = document.createElement("li")
            liHistorial.append(`${use.user}`)
            liHistorial.append(` obtuvo ${use.points}`)
        
        if (use.points !== undefined) {
            elHistorial.append(liHistorial)
        }
    })
    
}
    let mostrarHistorial = document.getElementById("buttonHistorial")
    mostrarHistorial.addEventListener("click", mostrar)


function reset() {
    let formulario = document.getElementById("contenedor")
    formulario.classList.add('block')

    let elWelcomeScr = document.getElementById("welcomescreen")
    elWelcomeScr.classList.remove('none')
    elWelcomeScr.classList.add('block')

    elScreenResult.style.display = "none";

    let quizz = document.getElementById('quiz')
    quizz.classList.remove('block')
    quizz.classList.add('none')
}

let reset1 = document.getElementById("regresar")
reset1.addEventListener("click", reset)






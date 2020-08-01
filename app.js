function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        
	var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		
		answers = [];

		for(letter in questions[i].answers){

			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}
    
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	
	quizContainer.innerHTML = output.join('');

	}

	function showResults(questions, quizContainer, resultsContainer){
        

	var answerContainers = quizContainer.querySelectorAll('.answers');

	var userAnswer = '';
	var numCorrect = 0;
	

	for(var i=0; i<questions.length; i++){

		
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		
		if(userAnswer===questions[i].correctAnswer){
			
            numCorrect++;
            
			answerContainers[i].style.color = 'green';
		}
	
		else{
			
			answerContainers[i].style.color = 'red';
		}
	}

	
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        
	}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var myQuestions = [
	{
		question: "Who invented JavaScript?",
		answers: {
		  a: "Douglas Crockford",
		  b: "Sheryl Sandberg",
		  c: "Brendan Eich"
		},
		correctAnswer: "c"
	  },
	  {
        question: "How do you insert a comment in a CSS file?",
        answers: {
          a: "/*this is a comment*/",
          b: "'this is a comment",
          c: "//this is a comment"
        },
        correctAnswer: "a"
	  },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
	{
		question: "What does HTML stand for?",
		answers: {
			a: "Hyper Text Markup Language" ,
			b: "Home Tool Markup Language",
			c: "Hyperlinks and Text Markup Language"
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

resultsContainer.setAttribute("class","btn");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
resultsContainer.setAttribute("class","btn");
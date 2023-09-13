const urlParams = new URLSearchParams(window.location.search);
const Answers = parseInt(urlParams.get('wrongAnswers'));

const wrongAnswersElement = document.getElementById('wrong-answers');
wrongAnswersElement.textContent = Answers;
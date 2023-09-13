
let wrongAnswers = 0;
let wrongAnswers1 = 0;
let totalWrongAnswers = 0;

function checkAnswer(answer) {
  if (answer === 'a') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 1;
  }
  else if (answer === 'b') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 3;
  }
  else if (answer === 'c') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 4;
  }
  else if (answer === 'd') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 5;
  }
  else if (answer === 'e') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 2;
  }

  if (totalWrongAnswers => 15) {
    window.location.href = `finis.html?wrongAnswers=${totalWrongAnswers}`;
  }
  else if (totalWrongAnswers < 15) {
    window.location.href = `finis2.html?wrongAnswers=${totalWrongAnswers}`;
  }
}
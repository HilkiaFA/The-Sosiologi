
let wrongAnswers = 0;
let wrongAnswers1 = 0;
let totalWrongAnswers = 0;

function checkAnswer(answer) {
  if (answer === 'a') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 4;
    window.location.href = `game4.html?wrongAnswers=${totalWrongAnswers}`;
  }
  else if (answer === 'b') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 1;
    window.location.href = `game4.html?wrongAnswers=${totalWrongAnswers}`;
  }
  else if (answer === 'c') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 3;
    window.location.href = `game4.html?wrongAnswers=${totalWrongAnswers}`;
  }
  else if (answer === 'd') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 5;
    window.location.href = `game4.html?wrongAnswers=${totalWrongAnswers}`;
  }
  else if (answer === 'e') {
    const urlParams = new URLSearchParams(window.location.search);
    wrongAnswers = parseInt(urlParams.get('wrongAnswers'));
    totalWrongAnswers = wrongAnswers + 2;
    window.location.href = `game4.html?wrongAnswers=${totalWrongAnswers}`;
  }
}
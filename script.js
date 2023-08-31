let wrongAnswers = 0;

function checkAnswer(answer) {
  if (answer === 'a') {
    window.location.href = `index.html?wrongAnswers=4`;
}else if (answer === 'b') {
    window.location.href = `index.html?wrongAnswers=1`;
}
else if (answer === 'c') {
    window.location.href = `index.html?wrongAnswers=2`;
}
else if (answer === 'd') {
    window.location.href = `index.html?wrongAnswers=5`;
}
}
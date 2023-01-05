const quizOnline = document.querySelector('.quiz-online');
const quizP = document.querySelectorAll('.quiz-online_p');
const quizHidden = document.querySelectorAll('.quiz_hidden');
const quizClose = document.querySelector('.quiz_close');

quizP.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (quizOnline.classList.contains('quiz-online_big')) {
      quizOnline.classList.remove('quiz-online_big');
      quizHidden.forEach((item) => {
        item.classList.remove('quiz_visible');
      });
      quizP.forEach((i) => {
        if (i.classList.contains('quiz_piz')) {
            i.classList.add('quiz_visible')
        }
      })
    } else {
      quizOnline.classList.add('quiz-online_big');
      quizHidden.forEach((item) => {
        item.classList.add('quiz_visible');
      });
      quizP.forEach((i) => {
        if (i.classList.contains('quiz_piz')) {
            i.classList.remove('quiz_visible')
        }
      })
    }
  });
});

quizClose.addEventListener('click', (e) => {
  quizOnline.classList.add('quiz_hidden');
});

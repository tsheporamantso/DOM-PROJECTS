const questions = document.querySelectorAll('.question');
const btns = document.querySelectorAll('.question-btn');

/*
! DOM element selection solution.
*/
// questions.forEach((question) => {
//   const btn = question.querySelector('.question-btn');
//   btn.addEventListener('click', () => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });

/*
! Node Traversal solution
*/
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// Componente de quiz reutilizável. Uso:
//   <div class="quiz" data-quiz="id-do-quiz"></div>
//   renderQuiz('id-do-quiz', [...]);

(function () {
  "use strict";

  window.QUIZZES = window.QUIZZES || {};

  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function render(container, questions) {
    container.innerHTML = "";
    container.classList.add("quiz-container");

    const state = {
      answers: new Array(questions.length).fill(null),
      submitted: false,
    };

    const intro = el("div", "quiz-intro");
    intro.innerHTML = `<strong>Autoavaliação (${questions.length} perguntas).</strong> Responda e clique em "Verificar respostas" ao final.`;
    container.appendChild(intro);

    questions.forEach((q, qi) => {
      const block = el("div", "quiz-question");
      block.innerHTML = `<div class="quiz-q">${qi + 1}. ${q.question}</div>`;
      const options = el("div", "quiz-options");
      q.options.forEach((opt, oi) => {
        const label = el("label", "quiz-option");
        const input = el("input");
        input.type = "radio";
        input.name = `q-${qi}`;
        input.value = oi;
        input.addEventListener("change", () => {
          state.answers[qi] = oi;
        });
        const span = el("span");
        span.textContent = opt;
        label.appendChild(input);
        label.appendChild(span);
        options.appendChild(label);
      });
      block.appendChild(options);
      const feedback = el("div", "quiz-feedback");
      feedback.style.display = "none";
      block.appendChild(feedback);
      container.appendChild(block);
    });

    const controls = el("div", "quiz-controls");
    const btnCheck = el("button", "quiz-btn");
    btnCheck.textContent = "Verificar respostas";
    const btnReset = el("button", "quiz-btn quiz-btn-secondary");
    btnReset.textContent = "Refazer";
    btnReset.style.display = "none";
    controls.appendChild(btnCheck);
    controls.appendChild(btnReset);
    container.appendChild(controls);

    const summary = el("div", "quiz-summary");
    summary.style.display = "none";
    container.appendChild(summary);

    btnCheck.addEventListener("click", () => {
      if (state.submitted) return;
      let correct = 0;
      const blocks = container.querySelectorAll(".quiz-question");
      questions.forEach((q, qi) => {
        const answer = state.answers[qi];
        const fb = blocks[qi].querySelector(".quiz-feedback");
        const options = blocks[qi].querySelectorAll(".quiz-option");
        options.forEach((lbl, oi) => {
          lbl.classList.remove("correct", "incorrect");
          if (oi === q.answer) lbl.classList.add("correct");
          if (answer === oi && oi !== q.answer) lbl.classList.add("incorrect");
          lbl.querySelector("input").disabled = true;
        });
        const wasCorrect = answer === q.answer;
        if (wasCorrect) correct++;
        fb.innerHTML = `<strong>${wasCorrect ? "✓ Correta." : "✗ Incorreta."}</strong> ${q.explanation || ""}`;
        fb.classList.toggle("ok", wasCorrect);
        fb.style.display = "block";
      });
      summary.innerHTML = `Você acertou <strong>${correct} de ${questions.length}</strong> (${Math.round(correct/questions.length*100)}%).`;
      summary.style.display = "block";
      btnCheck.style.display = "none";
      btnReset.style.display = "inline-block";
      state.submitted = true;
    });

    btnReset.addEventListener("click", () => {
      render(container, questions);
    });
  }

  window.renderQuiz = function (quizId, questions) {
    const containers = document.querySelectorAll(`[data-quiz="${quizId}"]`);
    containers.forEach((c) => render(c, questions));
  };
})();

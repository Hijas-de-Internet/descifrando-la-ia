/* Descifrando la IA — Interactive Quiz Engine */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var btn = quiz.querySelector(".quiz-check");
    var feedback = quiz.querySelector(".quiz-feedback");
    var correct = quiz.dataset.correct;

    btn.addEventListener("click", function () {
      var selected = quiz.querySelector('input[type="radio"]:checked');
      if (!selected) {
        feedback.textContent = "Selecciona una opción primero.";
        feedback.className = "quiz-feedback quiz-neutral";
        return;
      }

      var labels = quiz.querySelectorAll(".quiz-option");
      labels.forEach(function (label) {
        label.classList.remove("quiz-correct", "quiz-wrong");
        var input = label.querySelector('input[type="radio"]');
        if (input.value === correct) {
          label.classList.add("quiz-correct");
        } else if (input.checked) {
          label.classList.add("quiz-wrong");
        }
      });

      if (selected.value === correct) {
        feedback.innerHTML = "<strong>¡Correcto!</strong> " + quiz.dataset.explanation;
        feedback.className = "quiz-feedback quiz-success";
      } else {
        feedback.innerHTML = "<strong>No exactamente.</strong> " + quiz.dataset.explanation;
        feedback.className = "quiz-feedback quiz-error";
      }

      btn.disabled = true;
      btn.textContent = "Respondido";
    });
  });

  /* Interactive Checklist with progress counter */
  document.querySelectorAll(".checklist").forEach(function (list) {
    var boxes = list.querySelectorAll('input[type="checkbox"]');
    var counter = list.querySelector(".checklist-count");
    var total = boxes.length;

    boxes.forEach(function (box) {
      box.addEventListener("change", function () {
        var checked = list.querySelectorAll('input[type="checkbox"]:checked').length;
        counter.textContent = checked;
        if (checked === total) {
          list.classList.add("checklist-complete");
        } else {
          list.classList.remove("checklist-complete");
        }
      });
    });
  });
});

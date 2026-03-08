// Accessibility: font size controls
document.addEventListener("DOMContentLoaded", function () {
  var sizes = [85, 90, 95, 100, 110, 120, 135, 150, 175, 200];
  var saved = localStorage.getItem("hdi-font-size");
  var current = saved ? parseInt(saved, 10) : 100;

  // Only apply if user previously changed it
  if (saved) {
    document.querySelector(".md-typeset").style.fontSize = current + "%";
  }

  // Create buttons
  var container = document.createElement("div");
  container.className = "font-size-controls";
  container.innerHTML =
    '<button class="font-size-btn" id="font-decrease" title="Reducir texto">A-</button>' +
    '<button class="font-size-btn" id="font-increase" title="Aumentar texto">A+</button>';

  // Insert in header, before search
  var header = document.querySelector(".md-header__inner");
  if (header) {
    var search = header.querySelector(".md-search");
    header.insertBefore(container, search);
  }

  document.getElementById("font-decrease").addEventListener("click", function () {
    var idx = sizes.indexOf(current);
    if (idx > 0) {
      current = sizes[idx - 1];
      apply();
    }
  });

  document.getElementById("font-increase").addEventListener("click", function () {
    var idx = sizes.indexOf(current);
    if (idx < sizes.length - 1) {
      current = sizes[idx + 1];
      apply();
    }
  });

  function apply() {
    document.querySelector(".md-typeset").style.fontSize = current + "%";
    localStorage.setItem("hdi-font-size", current);
  }
});

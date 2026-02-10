function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

/* LANGUAGE TOGGLE */
let currentLang = "en";

function toggleLang() {
  currentLang = currentLang === "en" ? "ar" : "en";
  document.body.classList.toggle("rtl");

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });
}

/* COUNTERS */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  let inc = target / 120;

  function update() {
    count += inc;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  }
  update();
});

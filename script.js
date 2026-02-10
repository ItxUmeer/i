function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

/* COUNTER ANIMATION */
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  let inc = target / 100;

  function update() {
    count += inc;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  }
  update();
});

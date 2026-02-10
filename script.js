function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// Animated Counters
document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  let step = target / 200;

  let interval = setInterval(() => {
    count += step;
    counter.innerText = Math.floor(count);
    if (count >= target) {
      counter.innerText = target;
      clearInterval(interval);
    }
  }, 10);
});

// Language Toggle
document.getElementById("langToggle").addEventListener("click", () => {
  document.body.classList.toggle("rtl");
});

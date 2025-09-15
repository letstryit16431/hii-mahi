function nextQuestion(answer, current) {
  if (answer) {
    document.getElementById(`q${current}`).classList.remove("active");
    if (current < 3) {
      document.getElementById(`q${current + 1}`).classList.add("active");
    } else {
      document.getElementById("final").classList.add("active");
      startFloatingHearts();
    }
  }
}

function handleNo() {
  document.querySelectorAll(".question").forEach(q => q.classList.remove("active"));
  document.getElementById("rejected").classList.add("active");
}

function resetQuestions() {
  document.querySelectorAll(".question").forEach(q => q.classList.remove("active"));
  document.getElementById("q1").classList.add("active");
}

function dodgeNo() {
  const noBtn = event.target;

  // Random position
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function startFloatingHearts() {
  const container = document.querySelector(".floating-hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart-float");
    heart.innerHTML = "❤";

    // random left position
    heart.style.left = Math.random() * 100 + "%";

    container.appendChild(heart);

    // remove after animation
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 500);
}

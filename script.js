const nav = document.querySelector(".main-nav");
const indicator = document.querySelector(".nav-indicator");
const links = document.querySelectorAll(".main-nav a");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const rect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    indicator.style.width = rect.width + "px";

    indicator.style.left = rect.left - navRect.left + "px";
  });
});

nav.addEventListener("mouseleave", () => {
  indicator.style.width = "0px";
});
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");

  let count = 0;

  const updateCounter = () => {
    const increment = target / 100;

    if (count < target) {
      count += increment;

      counter.innerText = Math.ceil(count);

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset();

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});

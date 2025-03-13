
const sky = document.querySelector("body");

function generateStars() {
  const starCount = 1500;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.top = `${
      Math.random() * document.documentElement.scrollHeight
    }px`;
    star.style.left = `${Math.random() * 100}vw`;

    const animationDuration = Math.random() * 3 + 2;
    star.style.animation = `twinkle ${animationDuration}s infinite alternate`;

    sky.appendChild(star);
  }

  for (let i = 0; i < 5; i++) {
    createShootingStar();
  }
}

function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("star");

  const size = Math.random() * 3 + 1;
  shootingStar.style.width = `${size}px`;
  shootingStar.style.height = `${size}px`;
  shootingStar.style.top = `${Math.random() * 50}vh`;
  shootingStar.style.left = `${Math.random() * 100}vw`;

  shootingStar.style.animation = `shoot 2s linear infinite`;

  sky.appendChild(shootingStar);
}

const style = document.createElement("style");
style.innerHTML = `
    @keyframes twinkle {
      0% { opacity: 0.5; transform: scale(1); }
      100% { opacity: 1; transform: scale(1.2); }
    }
    @keyframes shoot {
      0% { transform: translate(0, 0) scale(1); opacity: 1; }
      100% { transform: translate(-50vw, 50vh) scale(0.5); opacity: 0; }
    }
  `;
document.head.appendChild(style);
generateStars();

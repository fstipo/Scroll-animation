const showBox = () => {
  const boxes = document.querySelectorAll('.box');
  const addTrigger = window.innerHeight / 1.25;
  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;
    if (topBox < addTrigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
  window.addEventListener('scroll', showBox);
};

window.addEventListener('load', showBox);

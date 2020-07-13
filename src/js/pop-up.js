(() => {
  const refs = {
    openPop: document.querySelector('[open-pop-up]'),
    closePop: document.querySelector('[close-pop]'),
    modalPop: document.querySelector('[data-pop-up]'),
  };

  refs.openPop.addEventListener('click', togglePop);
  refs.closePop.addEventListener('click', togglePop);

  function togglePop() {
    refs.modalPop.classList.toggle('hidden');
  }
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    // document.body.classList.toggle('modal-open');
  });
})();

(() => {
  const menuClose = document.querySelector('[close]');
  const mobileMenuOp = document.querySelector('[open]');

  menuClose.addEventListener('click', () => {
    menuClose.classList.toggle('is-open');

    mobileMenuOp.classList.toggle('is-open');
  });
})();

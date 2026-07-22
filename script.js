const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.main-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

document.querySelectorAll('[data-app-link]').forEach((link) => {
  const appUrl = window.PODOCARE_APP_URL;

  if (appUrl) {
    link.href = appUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    return;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('O novo aplicativo Podocare estará disponível em breve.');
  });
});

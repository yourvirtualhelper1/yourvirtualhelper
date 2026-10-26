const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop?.classList.toggle('visible', window.scrollY > 450));
backTop?.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    const marker = item.querySelector('summary span');
    if (marker) marker.textContent = item.open ? '×' : '+';
  });
});

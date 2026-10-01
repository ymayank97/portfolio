import './index.css';

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.nav-links a')];
const sections = navLinks.map(link => document.getElementById(link.hash.slice(1))!);
let activeLink: HTMLAnchorElement | undefined;
let scrollQueued = false;

function updateNavigation() {
  let activeIndex = 0;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= 180) activeIndex = index;
  });
  const nextLink = navLinks[activeIndex];
  if (nextLink !== activeLink) {
    activeLink?.removeAttribute('aria-current');
    nextLink.setAttribute('aria-current', 'location');
    activeLink = nextLink;
  }
  scrollQueued = false;
}

window.addEventListener('scroll', () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
updateNavigation();

function revealWorkDetails() {
  const target = document.getElementById(location.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener('hashchange', revealWorkDetails);
revealWorkDetails();

window.addEventListener('keydown', event => {
  if (!event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.target instanceof HTMLElement && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
  const link = [...document.querySelectorAll<HTMLAnchorElement>('[data-shortcut]')]
    .find(anchor => anchor.dataset.shortcut === event.key.toLowerCase());
  if (link) {
    event.preventDefault();
    link.click();
  }
});

const copyButton = document.querySelector<HTMLButtonElement>('.copy-email')!;
const copyLabel = copyButton.querySelector<HTMLElement>('.copy-label')!;
const copyStatus = document.querySelector<HTMLElement>('.copy-status')!;
let copyTimeout: ReturnType<typeof setTimeout>;
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  clearTimeout(copyTimeout);
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email!);
    copyLabel.textContent = 'copied!';
    copyStatus.textContent = 'Email address copied to clipboard.';
  } catch {
    copyLabel.textContent = 'copy email';
    copyStatus.textContent = `Please copy the address directly: ${copyButton.dataset.email}`;
  }
  copyTimeout = setTimeout(() => {
    copyLabel.textContent = 'copy email';
    copyStatus.textContent = '';
  }, 3500);
});

function initializeClock() {
  const clock = document.querySelector<HTMLElement>('[data-clock]')!;
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', hour12: false,
  });
  function updateClock() {
    clock.textContent = `${formatter.format(new Date())} in dallas`;
  }
  updateClock();
  setInterval(() => { if (!document.hidden) updateClock(); }, 60_000);
}
// Initialize the footer clock only when it is near the viewport.
new IntersectionObserver((entries, observer) => {
  if (entries.some(entry => entry.isIntersecting)) {
    initializeClock();
    observer.disconnect();
  }
}, { rootMargin: '100px' }).observe(document.querySelector('[data-clock]')!);
document.querySelector<HTMLElement>('[data-year]')!.textContent = String(new Date().getFullYear());

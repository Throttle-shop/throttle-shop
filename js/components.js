async function loadComponents() {
  // Load Header
  const headerRes = await fetch('components/header.html');
  document.getElementById('header').innerHTML = await headerRes.text();

  // Load Footer
  const footerRes = await fetch('components/footer.html');
  document.getElementById('footer').innerHTML = await footerRes.text();

  // Mobile menu toggle
  const toggle = document.getElementById('menuToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('active');
    });
  }

  // Highlight current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('#navLinks a').forEach(link => {
    if (currentPath.includes(link.getAttribute('href')) ||
        (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Show hamburger on mobile
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.menu-toggle').forEach(el => el.style.display = 'block');
  }

  // ── Shrink header on scroll ──
  const headerWrapper = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      headerWrapper.classList.add('scrolled');
    } else {
      headerWrapper.classList.remove('scrolled');
    }
  }, { passive: true });
}

window.onload = loadComponents;

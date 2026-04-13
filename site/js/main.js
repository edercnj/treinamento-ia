// ============================================
// TREINAMENTO IA — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  injectSubNavItems();
  initSidebar();
  initScrollProgress();
  initBackToTop();
  initFadeIn();
  initScrollSpy();
});

// --- Sidebar Toggle (Mobile) ---
function initSidebar() {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay?.classList.toggle('active');
  });

  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Close sidebar on nav click (mobile)
  sidebar.querySelectorAll('.nav-item, .nav-sub-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove('open');
        overlay?.classList.remove('active');
      }
    });
  });
}

// --- Scroll Progress Bar ---
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress-bar');
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// --- Back to Top Button ---
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Fade-in on Scroll ---
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });

  elements.forEach(el => observer.observe(el));

  // Safety fallback: if a .fade-in element is already above viewport when page loads
  // (e.g., when navigating via hash anchor), ensure it becomes visible.
  requestAnimationFrame(() => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  });
}

// --- Highlight Active Nav ---
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath) {
      item.classList.add('active');
    }
  });
}

// --- Slugify helper ---
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// --- Inject Sub-Nav Items (Auto TOC) ---
function injectSubNavItems() {
  const activeItem = document.querySelector('.nav-item.active');
  if (!activeItem) return;

  // Find all sections with a section-badge (these are the main sub-sections)
  const sections = document.querySelectorAll('main .content-body section.fade-in');
  if (!sections.length) return;

  const subItems = [];

  sections.forEach(section => {
    const badge = section.querySelector('.section-badge');
    const heading = section.querySelector('h2');
    if (!heading) return;

    // Ensure section has an id for anchoring
    if (!section.id) {
      const slug = slugify(heading.textContent);
      section.id = slug;
    }

    // Extract section number (like "Seção 1.1" -> "1.1", "Apêndice A.1" -> "A.1")
    let number = '';
    if (badge) {
      // Prefer numeric pattern (1.1, 11.2, etc.)
      const numMatch = badge.textContent.match(/(\d+(?:\.\d+)*)/);
      if (numMatch) {
        number = numMatch[1];
      } else {
        // Fallback: letter-based (A.1, B.2, etc.) — skip leading words
        const altMatch = badge.textContent.match(/\b([A-Z](?:\.\d+)?)\b/);
        if (altMatch) number = altMatch[1];
      }
    }

    subItems.push({
      id: section.id,
      number: number,
      title: heading.textContent.trim()
    });
  });

  if (!subItems.length) return;

  // Build the sub-nav HTML
  const subNav = document.createElement('div');
  subNav.className = 'nav-sub-items';
  subNav.innerHTML = subItems.map(item => `
    <a href="#${item.id}" class="nav-sub-item" data-target="${item.id}">
      ${item.number ? `<span class="nav-sub-item-number">${item.number}</span>` : ''}
      <span class="nav-sub-item-title">${item.title}</span>
    </a>
  `).join('');

  // Insert right after the active nav item
  activeItem.insertAdjacentElement('afterend', subNav);
}

// --- Scroll Spy (highlight current section in sub-nav) ---
function initScrollSpy() {
  const subItems = document.querySelectorAll('.nav-sub-item');
  if (!subItems.length) return;

  const sections = Array.from(subItems).map(item => {
    const id = item.getAttribute('data-target');
    return {
      el: document.getElementById(id),
      navItem: item
    };
  }).filter(s => s.el);

  if (!sections.length) return;

  let currentActive = null;

  const updateActive = () => {
    // Find the section whose top is just above the middle of the viewport
    const offset = window.innerHeight * 0.3;
    let active = sections[0];

    for (const section of sections) {
      const rect = section.el.getBoundingClientRect();
      if (rect.top <= offset) {
        active = section;
      } else {
        break;
      }
    }

    if (active !== currentActive) {
      if (currentActive) currentActive.navItem.classList.remove('active');
      active.navItem.classList.add('active');
      currentActive = active;

      // Scroll sub-nav to keep active item visible
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        const itemRect = active.navItem.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        if (itemRect.top < sidebarRect.top + 60 || itemRect.bottom > sidebarRect.bottom - 20) {
          active.navItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }
    }
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

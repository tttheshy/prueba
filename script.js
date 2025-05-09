function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    window.scrollTo(0, 0); // Vuelve arriba al cambiar de pestaña
  }
  
  // Animaciones al hacer scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
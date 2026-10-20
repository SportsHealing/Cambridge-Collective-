// Mobile menu toggle. No dependencies.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (!btn || !nav) { return; }

  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  }

  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  // Close the menu after choosing a link, so same-page anchors work on mobile.
  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && nav.classList.contains('open')) {
      setOpen(false);
    }
  });

  // Escape closes the menu and returns focus to the button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });
})();

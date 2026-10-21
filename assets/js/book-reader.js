document.addEventListener('DOMContentLoaded', () => {
  const bookPages = [...document.querySelectorAll('.book-page')];
  const progressBar = document.getElementById('book-progress-bar');
  const currentPageEl = document.getElementById('book-current-page');
  const totalPagesEl = document.getElementById('book-total-pages');
  const navButtons = [...document.querySelectorAll('.book-reader__nav')];

  if (!bookPages.length) return;

  let currentIndex = 0;
  const totalPages = bookPages.length;

  const updateReader = () => {
    bookPages.forEach((page, index) => {
      page.classList.toggle('is-active', index === currentIndex);
    });

    const progress = ((currentIndex + 1) / totalPages) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (currentPageEl) currentPageEl.textContent = String(currentIndex + 1);
    if (totalPagesEl) totalPagesEl.textContent = String(totalPages);
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.direction === 'next' ? 1 : -1;
      currentIndex = Math.min(Math.max(currentIndex + direction, 0), totalPages - 1);
      updateReader();
    });
  });

  updateReader();
});

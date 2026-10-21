document.addEventListener('DOMContentLoaded', () => {
  const nextLink = document.querySelector('.poem-view__next');
  if (!nextLink) return;

  const toggleLink = () => {
    nextLink.classList.toggle('is-fading');
  };

  nextLink.addEventListener('mouseenter', () => {
    nextLink.classList.add('is-fading');
  });

  nextLink.addEventListener('mouseleave', () => {
    nextLink.classList.remove('is-fading');
  });

  setInterval(toggleLink, 1800);
});

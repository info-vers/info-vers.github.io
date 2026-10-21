document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.projectGridReady === 'true') {
    return;
  }
  document.body.dataset.projectGridReady = 'true';

  const cards = document.querySelectorAll('.project-card');
  const modal = document.querySelector('.project-modal-overlay');
  const modalContent = document.getElementById('project-modal-content');
  const closeButton = document.querySelector('.project-modal__close');
  const projects = window.__PROJECTS__ || [];

  if (!cards.length || !modal || !modalContent || !projects.length) {
    return;
  }

  const renderProjectModal = (project) => {
    if (!project) return;

    const audienceClass = (project.audience || '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '');

    modalContent.innerHTML = `
      <div class="project-modal__header">
        <h3 id="project-modal-title">${project.title}</h3>
      </div>
      <div class="project-modal__meta">
        <span class="project-card__tag project-card__tag--${audienceClass}">${project.audience}</span>
        <span class="project-card__badge">${project.duration}</span>
        <span class="project-card__badge">${project.tech}</span>
      </div>
      <p class="project-modal__summary">${project.details || project.summary}</p>
      <ul class="project-modal__list">
        ${(project.milestones || []).map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;
  };

  cards.forEach((card, index) => {
    const button = card.querySelector('.project-card__button');
    if (!button) return;

    button.addEventListener('click', () => {
      renderProjectModal(projects[index]);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

---
layout: single
classes: wide
title: "Proiecte"
permalink: /proiecte/
---

<div class="project-shell">
  <div class="project-shell__intro">
    <p class="eyebrow">Mentorarea mea</p>
    <h2>Proiecte create pentru învățare practică și progres vizibil.</h2>
  </div>

  {% assign project_list = site.proiecte | sort: 'order' %}
  {% if project_list.size > 0 %}
    <div class="project-grid">
      {% for project in project_list %}
        <article class="project-card" data-project-index="{{ forloop.index0 }}">
          <img src="{{ project.image }}" alt="{{ project.title }}" class="project-card__image" />
          <div class="project-card__body">
            <div class="project-card__meta-row">
              <span class="project-card__tag project-card__tag--{{ project.audience | downcase | replace: ' ', '-' | replace: '(', '' | replace: ')', '' }}">{{ project.audience }}</span>
              <span class="project-card__badge">{{ project.duration }}</span>
              <span class="project-card__badge">{{ project.tech }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <button type="button" class="project-card__button">Vezi detalii</button>
          </div>
        </article>
      {% endfor %}
    </div>
  {% endif %}
</div>

<div class="project-modal-overlay" aria-hidden="true">
  <div class="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
    <button class="project-modal__close" aria-label="Închide">×</button>
    <div id="project-modal-content"></div>
  </div>
</div>

<script>
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.querySelector('.project-modal-overlay');
  const modalContent = document.getElementById('project-modal-content');
  const closeButton = document.querySelector('.project-modal__close');
  const projects = {{ site.proiecte | sort: 'order' | jsonify }};

  const renderProjectModal = (project) => {
    const audienceClass = project.audience.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    modalContent.innerHTML = `
      <div class="project-modal__header">
        <h3 id="project-modal-title">${project.title}</h3>
      </div>
      <div class="project-modal__meta">
        <span class="project-card__tag project-card__tag--${audienceClass}">${project.audience}</span>
        <span class="project-card__badge">${project.duration}</span>
        <span class="project-card__badge">${project.tech}</span>
      </div>
      <p class="project-modal__summary">${project.details}</p>
      <ul class="project-modal__list">
        ${(project.milestones || []).map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  };

  projectCards.forEach((card, index) => {
    const button = card.querySelector('.project-card__button');
    button.addEventListener('click', () => {
      renderProjectModal(projects[index]);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
</script>

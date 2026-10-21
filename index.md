---
layout: single
title: "About Me"
permalink: /
author_profile: false
classes: wide
---

<div class="cv-shell">
  <header class="cv-header">
    <div class="cv-header__identity">
      <p class="cv-kicker">Computer Science Mentor • Educator • Creative Technologist</p>
      <h1>InfoVers</h1>
      <p class="cv-role">Helping students build real coding projects, confidence, and a future-ready skillset.</p>
    </div>

    <div class="cv-header__meta">
      <span>Romania</span>
      <span>Remote / Online</span>
      <span>Mentorship • Teaching • Project Design</span>
    </div>
  </header>

  <section class="cv-section cv-section--intro">
    <div class="cv-section__title">
      <h2>Profile</h2>
    </div>
    <div class="cv-section__content">
      <p>
        I support students and families through structured, project-based learning in computer science.
        My work combines mentoring, conceptual clarity, and practical application so learners can move from
        curiosity to meaningful technical projects with confidence.
      </p>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-section__title">
      <h2>Experience</h2>
    </div>

    <div class="cv-section__content cv-timeline">
      <article class="cv-job">
        <div class="cv-job__period">2023 — Present</div>
        <div class="cv-job__body">
          <h3>Computer Science Mentor</h3>
          <p class="cv-job__meta">Independent / Private Mentorship</p>
          <ul>
            <li>Guide students through coding fundamentals, algorithmic thinking, and project-based learning.</li>
            <li>Design structured roadmaps for beginners, high school learners, and university-level preparation.</li>
            <li>Create portfolios, mini-apps, and interactive challenges that turn concept learning into real outputs.</li>
          </ul>
        </div>
      </article>

      <article class="cv-job">
        <div class="cv-job__period">2021 — 2023</div>
        <div class="cv-job__body">
          <h3>Academic Support & Technical Coaching</h3>
          <p class="cv-job__meta">Problem Solving • Logic • Exam Preparation</p>
          <ul>
            <li>Help students improve logical reasoning, debugging skills, and exam confidence.</li>
            <li>Support preparation for programming and theoretical computer science topics.</li>
            <li>Build personalized study plans focused on clarity, consistency, and measurable progress.</li>
          </ul>
        </div>
      </article>

      <article class="cv-job">
        <div class="cv-job__period">2019 — 2021</div>
        <div class="cv-job__body">
          <h3>Creative Coding & Educational Content</h3>
          <p class="cv-job__meta">Workshops • Projects • Storytelling</p>
          <ul>
            <li>Built educational digital content for children, combining storytelling and coding concepts.</li>
            <li>Created interactive book and learning experiences to make technical topics approachable.</li>
            <li>Developed learning materials adapted for different age groups and learning styles.</li>
          </ul>
        </div>
      </article>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-section__title">
      <h2>Education</h2>
    </div>
    <div class="cv-section__content">
      <div class="cv-education">
        <div class="cv-education__item">
          <strong>Computer Science / Technology Education</strong>
          <span>Self-directed learning, mentoring practice, and applied project development</span>
        </div>
        <div class="cv-education__item">
          <strong>Continuous Learning</strong>
          <span>Algorithms, web development, creative coding, UX, and student-centered teaching</span>
        </div>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-section__title">
      <h2>Skills</h2>
    </div>
    <div class="cv-section__content">
      <div class="cv-skills">
        <span>Python</span>
        <span>JavaScript</span>
        <span>HTML / CSS</span>
        <span>Algorithms</span>
        <span>Problem Solving</span>
        <span>Mentoring</span>
        <span>Project Design</span>
        <span>Curriculum Structure</span>
        <span>UX for Learning</span>
        <span>Creative Storytelling</span>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-section__title">
      <h2>Highlights</h2>
    </div>
    <div class="cv-section__content">
      <ul class="cv-highlights">
        <li>Project-based learning that keeps students motivated and accountable.</li>
        <li>Clear progression from beginner logic to portfolio-ready build work.</li>
        <li>Support for academic confidence, structured learning, and real-world problem solving.</li>
      </ul>
    </div>
  </section>
</div>

<style>
  .cv-shell {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 0 3rem;
  }

  .cv-header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .cv-kicker {
    margin: 0 0 0.8rem;
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #9fc3ff;
    font-weight: 700;
  }

  .cv-header h1 {
    margin: 0;
    font-size: clamp(2.6rem, 5vw, 4.5rem);
    line-height: 1;
  }

  .cv-role {
    margin: 0.8rem 0 0;
    max-width: 720px;
    font-size: 1.08rem;
    color: rgba(255,255,255,0.8);
  }

  .cv-header__meta {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    color: rgba(255,255,255,0.8);
    font-weight: 600;
    text-align: right;
  }

  .cv-section {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .cv-section__title h2 {
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #cfe3ff;
  }

  .cv-section__content {
    min-width: 0;
  }

  .cv-section__content p {
    margin: 0;
    line-height: 1.8;
    color: rgba(255,255,255,0.86);
  }

  .cv-timeline {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .cv-job {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 1rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .cv-job:first-child {
    border-top: none;
    padding-top: 0;
  }

  .cv-job__period {
    color: #8cc7ff;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .cv-job__body h3 {
    margin: 0 0 0.2rem;
    font-size: 1.35rem;
  }

  .cv-job__meta {
    margin: 0 0 0.7rem;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
  }

  .cv-job__body ul,
  .cv-highlights {
    margin: 0;
    padding-left: 1.2rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.82);
  }

  .cv-education {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .cv-education__item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.9rem 1rem;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    background: rgba(255,255,255,0.02);
  }

  .cv-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .cv-skills span {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 0.9rem;
    border-radius: 999px;
    background: rgba(124, 200, 255, 0.08);
    border: 1px solid rgba(124, 200, 255, 0.14);
    color: #eaf6ff;
    font-weight: 600;
  }

  @media (max-width: 860px) {
    .cv-header,
    .cv-section {
      grid-template-columns: 1fr;
      display: block;
    }

    .cv-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .cv-header__meta {
      text-align: left;
    }

    .cv-job {
      grid-template-columns: 1fr;
    }
  }
</style>

---
layout: single
title: "Learn Coding by Building Real Projects — From Scratch to Launch"
permalink: /
author_profile: true
---

<div class="mentorship-hero">
  <div class="mentorship-hero__content">
    <p class="mentorship-kicker">Project-Based Mentorship</p>
    <h2>Learn Coding by Building Real Projects — From Scratch to Launch.</h2>
    <p class="mentorship-lead">We help students turn curiosity into confidence through guided builds, real-world problem solving, and creative portfolio work.</p>

    <div class="mentorship-hero__actions">
      <a class="mentorship-cta mentorship-cta--parents" href="#for-parents">
        <span>For Parents</span>
      </a>
      <a class="mentorship-cta mentorship-cta--students" href="#for-students">
        <span>For Students</span>
      </a>
    </div>
  </div>

  <div class="mentorship-hero__panel">
    <div class="mentorship-highlight">
      <strong>What students build</strong>
      <ul>
        <li>Games, mini apps, and real coding challenges</li>
        <li>Structured learning milestones with feedback</li>
        <li>Portfolio-ready projects that feel relevant</li>
      </ul>
    </div>
  </div>
</div>

<div class="mentorship-split" id="for-parents">
  <div class="mentorship-card mentorship-card--parents">
    <h3>For Parents</h3>
    <ul>
      <li>Clear structure and logical progression</li>
      <li>Problem-solving skills that transfer across subjects</li>
      <li>Academic safety nets for exams and Bacalaureat prep</li>
      <li>Measurable growth through projects and reflection</li>
    </ul>
  </div>

  <div class="mentorship-card mentorship-card--students" id="for-students">
    <h3>For Students</h3>
    <ul>
      <li>Build a portfolio from day one</li>
      <li>Create games, apps, and creative tools</li>
      <li>Practice design, debugging, and presentation</li>
      <li>Learn with freedom to experiment and iterate</li>
    </ul>
  </div>
</div>

<style>
  .mentorship-hero {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 2rem;
    align-items: center;
    margin: 2rem 0 2.5rem;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(64, 126, 255, 0.08), rgba(170, 92, 255, 0.06));
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 22px;
  }

  .mentorship-kicker {
    margin-bottom: 0.75rem;
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #9fc3ff;
    font-weight: 700;
  }

  .mentorship-hero h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.1;
    font-size: clamp(2rem, 2.8vw, 3.3rem);
  }

  .mentorship-lead {
    font-size: 1.08rem;
    color: rgba(255,255,255,0.8);
  }

  .mentorship-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .mentorship-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0.9rem 1.4rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .mentorship-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 26px rgba(0,0,0,0.18);
    text-decoration: none;
  }

  .mentorship-cta--parents {
    background: linear-gradient(135deg, #5ca7ff, #7c7cff);
    color: white;
  }

  .mentorship-cta--students {
    background: linear-gradient(135deg, #f39b6d, #ff5e7a);
    color: white;
  }

  .mentorship-hero__panel {
    display: flex;
    justify-content: center;
  }

  .mentorship-highlight {
    width: 100%;
    padding: 1.2rem 1.1rem;
    border-radius: 18px;
    background: rgba(15, 27, 50, 0.8);
    border: 1px solid rgba(255,255,255,0.06);
  }

  .mentorship-highlight strong {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.05rem;
  }

  .mentorship-highlight ul {
    margin: 0;
    padding-left: 1.2rem;
    color: rgba(255,255,255,0.82);
  }

  .mentorship-split {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .mentorship-card {
    padding: 1.5rem;
    border-radius: 18px;
    background: rgba(18, 20, 36, 0.8);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .mentorship-card h3 {
    margin-top: 0;
    font-size: 1.6rem;
  }

  .mentorship-card ul {
    margin: 0;
    padding-left: 1.2rem;
    color: rgba(255,255,255,0.82);
  }

  @media (max-width: 700px) {
    .mentorship-hero {
      grid-template-columns: 1fr;
      padding: 1.1rem;
    }
  }
</style>

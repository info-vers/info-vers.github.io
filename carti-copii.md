---
layout: single
classes: wide
title: "Cărți pentru Copii"
permalink: /carti-copii/
---

<div class="bookshelf">
  <div class="bookshelf__intro">
    <p class="eyebrow">Lectură interactivă</p>
    <h2>Explorați cărțile create pentru imaginație și învățare.</h2>
  </div>

  <div class="book-reader__list">
    {% for carte in site.carti %}
      <a href="{{ carte.url }}" class="book-reader__item">{{ carte.title }}</a>
    {% endfor %}
  </div>
</div>

---
layout: poem-view
title: "Info Versuri"
permalink: /versuri/
author_profile: false
---

<div class="poem-view__list">
  {% assign versuri_sortate = site.versuri | sort: 'date' | reverse %}
  {% for poezie in versuri_sortate %}
    <article class="poem-list-item">
      <div class="poem-list-item__meta">{{ poezie.date | date: "%d.%m.%Y" }}</div>
      <h3><a href="{{ poezie.url }}">{{ poezie.title }}</a></h3>
    </article>
  {% endfor %}
</div>

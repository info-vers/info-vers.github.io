---
layout: single
classes: wide
title: "Info Versuri"
permalink: /versuri/
author_profile: false
---

<div class="poem-view">
  {% assign poem_collection = site.versuri | sort: 'date' | reverse %}
  {% for poem in poem_collection %}
    <article class="poem-list-item">
      <div class="poem-list-item__meta">{{ poem.date | date: "%d.%m.%Y" }}</div>
      <h3><a href="{{ poem.url }}">{{ poem.title }}</a></h3>
    </article>
  {% endfor %}
</div>

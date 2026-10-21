---
layout: single
title: "Info Versuri"
permalink: /versuri/
author_profile: false
---

<div style="display: flex; flex-wrap: wrap; gap: 30px;">

  <!-- SIDEBAR: Top 10 Titluri -->
  <div style="flex: 1; min-width: 200px; max-width: 280px; border-right: 1px solid #2c2c2c; padding-right: 20px;">
    <h3 style="color: #A33849; margin-top: 0;">Top 10 Poezii</h3>
    <ul style="list-style-type: none; padding-left: 0; line-height: 1.8;">
      {% assign sidebar_versuri = site.versuri | sort: 'date' | reverse | limit: 10 %}
      {% for poezie in sidebar_versuri %}
        <li style="margin-bottom: 10px; border-bottom: 1px dashed #222; padding-bottom: 5px;">
          <a href="{{ poezie.url }}" style="text-decoration: none; font-weight: bold;">{{ poezie.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>

  <!-- MAIN CONTENT: Cronologie -->
  <div style="flex: 2; min-width: 300px;">
    <h3 style="margin-top: 0;">Toate poeziile (Recente primele)</h3>
    <p>Folosește meniul din stânga pentru acces rapid la ultimele 10 titluri lansate.</p>

    {% assign versuri_sortate = site.versuri | sort: 'date' | reverse %}
    {% for poezie in versuri_sortate %}
    <article style="margin-bottom: 40px; border-bottom: 1px solid #2c2c2c; padding-bottom: 20px;">
      <h2 style="margin-bottom: 5px;"><a href="{{ poezie.url }}" style="color: #fff;">{{ poezie.title }}</a></h2>
      <small style="color: #888;">Data publicării: {{ poezie.date | date: "%d.%m.%Y" }}</small>
      <div style="margin-top: 15px; font-style: italic; white-space: pre-line; color: #ccc; padding-left: 10px; border-left: 2px solid #6A1B29;">
        {{ poezie.content }}
      </div>
    </article>
    {% endfor %}
  </div>

</div>

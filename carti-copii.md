---
layout: single
title: "Cărți pentru Copii"
permalink: /carti-copii/
---

Descoperă poveștile și cărțile ilustrate create special pentru cei mici. Selectează o carte de mai jos pentru a o citi:

{% for carte in site.carti %}
* [{{ carte.title }}]({{ carte.url }}) - {{ carte.description }}
{% endfor %}

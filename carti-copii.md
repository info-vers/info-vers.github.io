---
layout: book-reader
title: "Cărți pentru Copii"
permalink: /carti-copii/
book_title: "Aventurile Micului Robot"
book_pages:
  - image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80"
    text: "Byte, micuțul robot, a descoperit o lume plină de culori și enigme. Fiecare casă îi zâmbea în ritmul unui nou cod."
  - image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
    text: "El a învățat că buclele repetă acțiuni și că pasiunea pentru învățare este cea mai bună cheie pentru a rezolva probleme."
  - image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
    text: "În final, Byte a salvat orașul prin pricepere, prietenie și răbdare. A învățat că fiecare mic pas devine un mare pas înainte."
---

<div class="book-reader__list">
  {% for carte in site.carti %}
    <a href="{{ carte.url }}">{{ carte.title }}</a>
  {% endfor %}
</div>

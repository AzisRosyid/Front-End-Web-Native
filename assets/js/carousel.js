function setupCarousel(name, items) {
  let query = `.${name}`;
  sessionStorage.setItem(name, 1);

  function element() {
    let target = document.querySelector(query);
    target.className += ' carousel-container';
    for (let i of items) {
      let div = document.createElement('div');
      div.className = `carousel ${name}-item fade`;
      div.innerHTML = `<img src="assets/image/${i}">`;
      target.appendChild(div);
    }
    target.innerHTML += `<a class="prev ${name}-prev">&#10094;</a>`;
    target.innerHTML += `<a class="next ${name}-next">&#10095;</a>`;
    let nav = document.createElement('div');
    nav.className = 'carousel-nav-container';
    for (let i = 1; i <= items.length; i++) {
      nav.innerHTML += `<span class="carousel-nav ${name}-nav ${name}-nav-${i}"></span>`;
    }
    target.appendChild(nav);
  }

  function event() {
    const next = document.querySelector(`${query}-next`);
    const prev = document.querySelector(`${query}-prev`);

    next.addEventListener('click', function() {
      let index = sessionStorage.getItem(name);
      sessionStorage.setItem(name, ++index);
      show(sessionStorage.getItem(name));
    });
    prev.addEventListener('click', function() {
      let index = sessionStorage.getItem(name);
      sessionStorage.setItem(name, --index);
      show(sessionStorage.getItem(name));
    });

    for (let i = 1; i <= items.length; i++) {
      let nav = document.querySelector(`${query}-nav-${i}`);
      nav.addEventListener('click', function() {
        sessionStorage.setItem(name, i);
        show(sessionStorage.getItem(name));
      });
    }
  }

  function show(n) {
    let carousels = document.querySelectorAll(`${query}-item`)
    let navs = document.querySelectorAll(`${query}-nav`);
    if (n > carousels.length) sessionStorage.setItem(name, 1);
    if (n < 1) sessionStorage.setItem(name, carousels.length);
    for (i of carousels) i.style.display = "none";
    for (i of navs) i.className = i.className.replace(" active", "");
    let index = sessionStorage.getItem(name);
    carousels[index-1].style.display = "block";
    navs[index-1].className += " active";
  }

  element();
  event();
  show();
}

const carrossels = [
  { selector: ".carrossel_1 .product", counter: 0 },
  { selector: ".carrossel_2 .product_2", counter: 0 },
  { selector: ".carrossel_3 .card", counter: 0 },
  { selector: ".carrossel_4 .product_3", counter: 0 },
  { selector: ".carrossel_5 .fones", counter: 0 },
  { selector: ".carrossel_6 .serviços_tv", counter: 0 }
];

function left(carrosselIndex) {
  carrossels[carrosselIndex].counter--;
  scroll(carrossels[carrosselIndex]);
}

function right(carrosselIndex) {
  carrossels[carrosselIndex].counter++;
  scroll(carrossels[carrosselIndex]);
}

function scroll(carrossel) {
  const items = document.querySelectorAll(carrossel.selector);
  items.forEach(function (item) {
    item.style.transform = `translateX(-${carrossel.counter * 420}px)`;
  });
}

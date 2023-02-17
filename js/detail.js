$('input[type="checkbox"]').on("click", check_add_card);

let cost = 0;
let html_price = document.getElementById("price-select-item");

function uncheck() {
  $(".check-product-to-card").prop("checked", false);
}

function check_add_card() {
  if ($(this).prop("checked") == true) {
    cost = cost + Number($(this).val());
    html_price.innerHTML = `$${cost}`;
  } else {
    cost = cost - Number($(this).val());
    html_price.innerHTML = `$${cost}`;
  }
}

window.onbeforeunload = uncheck();

new Splide("#carousel-recently", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-seller-mode-prev position-absolute",
    next: "splide__arrow--next control-arrow-seller-mode-next position-absolute",
  },
}).mount();

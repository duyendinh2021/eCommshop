new Splide("#carousel-best-sl", {
  pagination: false,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow",
    prev: "splide__arrow--prev control-arrow-prev",
    next: "splide__arrow--next control-arrow-next",
  },
}).mount();

new Splide("#carousel-deals-main", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals",
    prev: "splide__arrow--prev control-arrow-deals-prev",
    next: "splide__arrow--next control-arrow-deals-next",
  },
}).mount();

new Splide("#carousel-deals", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  paginationDirection: "ttb",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-deals-mode-prev position-absolute",
    next: "splide__arrow--next control-arrow-deals-mode-next position-absolute",
  },
}).mount();

new Splide("#carousel-bestsller", {
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

new Splide("#carousel-seller-today", {
  //   rewind: true,
  type: "loop",
}).mount();

var main = new Splide("#thumbnail-carousel-today-deals-main", {
  type: "fade",
  rewind: true,
  pagination: false,
  arrows: false,
});

var thumbnails = new Splide("#thumbnail-carousel-today-deals", {
  fixedWidth: 100,
  fixedHeight: 60,
  // gap: 10,
  rewind: true,
  pagination: false,
  isNavigation: true,
  breakpoints: {
    600: {
      fixedWidth: 60,
      fixedHeight: 44,
    },
  },
});

main.sync(thumbnails);
main.mount();
thumbnails.mount();
